import WebSocket from 'ws'

class MetaApiService {
  constructor() {
    this.ws = null
    this.accountId = process.env.METAAPI_ACCOUNT_ID
    this.token = process.env.METAAPI_TOKEN
    this.priceCache = new Map()
    this.subscribers = new Set()
    this.reconnectTimer = null
    this.heartbeatTimer = null
    this.isConnected = false
    this.io = null
  }

  setSocketIO(io) {
    this.io = io
  }

  getWebSocketUrl() {
    return `wss://mt-client-api-v1.london.agiliumtrade.ai/ws?auth-token=${this.token}`
  }

  connect() {
    if (!this.token || !this.accountId) {
      console.error('MetaAPI: Missing METAAPI_TOKEN or METAAPI_ACCOUNT_ID in environment')
      return
    }

    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      console.log('MetaAPI: Already connected')
      return
    }

    console.log('MetaAPI: Connecting to WebSocket...')
    
    try {
      this.ws = new WebSocket(this.getWebSocketUrl())

      this.ws.on('open', () => {
        console.log('MetaAPI: WebSocket connected!')
        this.isConnected = true
        
        // Subscribe to market data
        this.subscribeToMarketData()
        
        // Start heartbeat
        this.startHeartbeat()
      })

      this.ws.on('message', (data) => {
        this.handleMessage(data)
      })

      this.ws.on('error', (error) => {
        console.error('MetaAPI: WebSocket error:', error.message)
      })

      this.ws.on('close', () => {
        console.log('MetaAPI: WebSocket disconnected, reconnecting in 5s...')
        this.isConnected = false
        this.stopHeartbeat()
        this.scheduleReconnect()
      })
    } catch (error) {
      console.error('MetaAPI: Connection error:', error.message)
      this.scheduleReconnect()
    }
  }

  subscribeToMarketData() {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return

    // Subscribe to account to get market data access
    const subscribeMsg = {
      type: 'subscribe',
      accountId: this.accountId,
      subscriptions: ['marketData']
    }
    
    this.ws.send(JSON.stringify(subscribeMsg))
    console.log('MetaAPI: Subscribed to market data for account:', this.accountId)

    // Subscribe to specific symbols
    const symbols = this.getDefaultSymbols()
    this.subscribeToSymbols(symbols)
  }

  subscribeToSymbols(symbols) {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return

    symbols.forEach(symbol => {
      const msg = {
        type: 'subscribeToMarketData',
        accountId: this.accountId,
        symbol: symbol,
        subscriptions: ['quotes']
      }
      this.ws.send(JSON.stringify(msg))
    })
    
    console.log(`MetaAPI: Subscribed to ${symbols.length} symbols`)
  }

  handleMessage(data) {
    try {
      const msg = JSON.parse(data.toString())
      
      // Handle price quotes
      if (msg.type === 'prices' || msg.type === 'quote') {
        const symbol = msg.symbol
        const bid = parseFloat(msg.bid)
        const ask = parseFloat(msg.ask)
        
        if (symbol && !isNaN(bid) && !isNaN(ask)) {
          const price = { bid, ask, time: Date.now() }
          this.priceCache.set(symbol, price)
          
          // Broadcast to Socket.IO subscribers
          if (this.io && this.subscribers.size > 0) {
            this.io.to('prices').emit('priceUpdate', { symbol, price })
          }
        }
      }
      
      // Handle synchronization complete
      if (msg.type === 'synchronizationStarted') {
        console.log('MetaAPI: Synchronization started')
      }
      
      if (msg.type === 'accountInformation') {
        console.log('MetaAPI: Account synchronized')
      }

      // Handle errors
      if (msg.type === 'error') {
        console.error('MetaAPI: Error:', msg.message)
      }
    } catch (error) {
      // Ignore parse errors
    }
  }

  startHeartbeat() {
    this.stopHeartbeat()
    this.heartbeatTimer = setInterval(() => {
      if (this.ws && this.ws.readyState === WebSocket.OPEN) {
        this.ws.ping()
      }
    }, 30000)
  }

  stopHeartbeat() {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer)
      this.heartbeatTimer = null
    }
  }

  scheduleReconnect() {
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer)
    }
    this.reconnectTimer = setTimeout(() => {
      this.connect()
    }, 5000)
  }

  disconnect() {
    this.stopHeartbeat()
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer)
    }
    if (this.ws) {
      this.ws.close()
      this.ws = null
    }
    this.isConnected = false
  }

  addSubscriber(socketId) {
    this.subscribers.add(socketId)
  }

  removeSubscriber(socketId) {
    this.subscribers.delete(socketId)
  }

  getPrice(symbol) {
    return this.priceCache.get(symbol)
  }

  getAllPrices() {
    return Object.fromEntries(this.priceCache)
  }

  getPriceCache() {
    return this.priceCache
  }

  // Get price via REST API (fallback)
  async fetchPrice(symbol) {
    try {
      const url = `https://mt-client-api-v1.london.agiliumtrade.ai/users/current/accounts/${this.accountId}/symbols/${symbol}/current-price`
      const response = await fetch(url, {
        headers: {
          'auth-token': this.token
        }
      })
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }
      
      const data = await response.json()
      if (data.bid && data.ask) {
        const price = { bid: data.bid, ask: data.ask, time: Date.now() }
        this.priceCache.set(symbol, price)
        return price
      }
      return null
    } catch (error) {
      console.error(`MetaAPI: Error fetching price for ${symbol}:`, error.message)
      return null
    }
  }

  // Fetch multiple prices via REST API
  async fetchBatchPrices(symbols) {
    const prices = {}
    
    // Check cache first
    const now = Date.now()
    const missingSymbols = []
    
    for (const symbol of symbols) {
      const cached = this.priceCache.get(symbol)
      if (cached && (now - cached.time) < 5000) {
        prices[symbol] = cached
      } else {
        missingSymbols.push(symbol)
      }
    }
    
    // Fetch missing prices in parallel (limit concurrency)
    const BATCH_SIZE = 10
    for (let i = 0; i < missingSymbols.length; i += BATCH_SIZE) {
      const batch = missingSymbols.slice(i, i + BATCH_SIZE)
      const results = await Promise.allSettled(
        batch.map(symbol => this.fetchPrice(symbol))
      )
      
      results.forEach((result, index) => {
        if (result.status === 'fulfilled' && result.value) {
          prices[batch[index]] = result.value
        }
      })
    }
    
    return prices
  }

  // Get available symbols from MetaAPI
  async getSymbols() {
    try {
      const url = `https://mt-client-api-v1.london.agiliumtrade.ai/users/current/accounts/${this.accountId}/symbols`
      const response = await fetch(url, {
        headers: {
          'auth-token': this.token
        }
      })
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }
      
      const symbols = await response.json()
      return symbols
    } catch (error) {
      console.error('MetaAPI: Error fetching symbols:', error.message)
      return this.getDefaultSymbols()
    }
  }

  // Get symbol specification
  async getSymbolSpecification(symbol) {
    try {
      const url = `https://mt-client-api-v1.london.agiliumtrade.ai/users/current/accounts/${this.accountId}/symbols/${symbol}/specification`
      const response = await fetch(url, {
        headers: {
          'auth-token': this.token
        }
      })
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }
      
      return await response.json()
    } catch (error) {
      console.error(`MetaAPI: Error fetching specification for ${symbol}:`, error.message)
      return null
    }
  }

  getDefaultSymbols() {
    return [
      // Forex Majors
      'EURUSD', 'GBPUSD', 'USDJPY', 'USDCHF', 'AUDUSD', 'NZDUSD', 'USDCAD',
      // Forex Crosses
      'EURGBP', 'EURJPY', 'GBPJPY', 'EURCHF', 'EURAUD', 'EURCAD', 'GBPAUD',
      'AUDCAD', 'AUDJPY', 'CADJPY', 'CHFJPY', 'NZDJPY',
      // Metals
      'XAUUSD', 'XAGUSD',
      // Crypto
      'BTCUSD', 'ETHUSD'
    ]
  }
}

// Singleton instance
const metaApiService = new MetaApiService()

export default metaApiService
