import { ArrowLeftRight } from "lucide-react";
import SolutionPageTemplate from "../components/SolutionPageTemplate";

export default function AdvanceOrderExchangePage() {
  return (
    <SolutionPageTemplate
      icon={ArrowLeftRight}
      badge="Advance Order Exchange"
      title="Advanced Order Types &"
      highlight="Matching Engine"
      subtitle="Institutional-grade order management with advanced order types, smart routing, and ultra-low latency execution for your trading platform."
      description="Our Advance Order Exchange solution brings institutional-level order management to your brokerage. Support complex order types beyond basic market and limit orders — including OCO, trailing stops, iceberg orders, and time-weighted execution. The built-in matching engine handles high-frequency order flow with microsecond latency, while smart order routing ensures best execution across multiple liquidity providers."
      features={[
        { title: "Advanced Order Types", description: "OCO, trailing stop, iceberg, bracket, TWAP, and custom algorithmic order types." },
        { title: "Smart Order Routing", description: "Automatic routing to the best liquidity source based on price, depth, and latency." },
        { title: "Matching Engine", description: "Ultra-low latency order matching with price-time priority and configurable rules." },
        { title: "Risk Pre-Trade Checks", description: "Real-time margin validation, position limits, and exposure checks before execution." },
        { title: "Order Book Depth", description: "Full Level 2 market depth display with aggregated liquidity from multiple sources." },
        { title: "Execution Reports", description: "Detailed fill reports, slippage analysis, and execution quality metrics." },
      ]}
      benefits={[
        "Support professional traders with institutional-grade order types",
        "Ultra-low latency execution with microsecond order processing",
        "Smart routing ensures best execution across liquidity providers",
        "Pre-trade risk checks protect both the broker and the client",
        "Full audit trail for regulatory compliance and dispute resolution",
        "Configurable matching rules for different asset classes",
        "Scalable architecture handles thousands of orders per second",
        "FIX protocol support for institutional connectivity",
      ]}
      mockupContent={
        <div className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/80 shadow-2xl">
          <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900 border-b border-zinc-800">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-zinc-800 rounded-md px-3 py-1 text-xs text-zinc-500 text-center">Advanced Order Exchange</div>
            </div>
          </div>
          <div className="p-5 space-y-3">
            <div className="text-xs text-zinc-500 font-medium">Order Book — EUR/USD</div>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1">
                <div className="text-[9px] text-zinc-500 text-center mb-1">BIDS</div>
                {[
                  { price: "1.0847", size: "2.5M", pct: 85 },
                  { price: "1.0846", size: "1.8M", pct: 65 },
                  { price: "1.0845", size: "3.2M", pct: 95 },
                  { price: "1.0844", size: "1.1M", pct: 40 },
                ].map((bid) => (
                  <div key={bid.price} className="relative bg-green-500/5 rounded px-2 py-1 overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 bg-green-500/10" style={{ width: `${bid.pct}%` }} />
                    <div className="relative flex justify-between">
                      <span className="text-[10px] text-green-400 font-mono">{bid.price}</span>
                      <span className="text-[10px] text-zinc-400 font-mono">{bid.size}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-1">
                <div className="text-[9px] text-zinc-500 text-center mb-1">ASKS</div>
                {[
                  { price: "1.0848", size: "1.9M", pct: 70 },
                  { price: "1.0849", size: "2.8M", pct: 90 },
                  { price: "1.0850", size: "1.4M", pct: 50 },
                  { price: "1.0851", size: "3.5M", pct: 100 },
                ].map((ask) => (
                  <div key={ask.price} className="relative bg-red-500/5 rounded px-2 py-1 overflow-hidden">
                    <div className="absolute right-0 top-0 bottom-0 bg-red-500/10" style={{ width: `${ask.pct}%` }} />
                    <div className="relative flex justify-between">
                      <span className="text-[10px] text-red-400 font-mono">{ask.price}</span>
                      <span className="text-[10px] text-zinc-400 font-mono">{ask.size}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-4 gap-1.5 pt-1">
              {["Market", "Limit", "OCO", "Trailing"].map((type) => (
                <div key={type} className="bg-zinc-800/60 text-zinc-400 text-[9px] text-center py-1.5 rounded font-medium">
                  {type}
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    />
  );
}
