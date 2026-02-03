import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { 
  LayoutDashboard, 
  Users,
  LogOut,
  TrendingUp,
  Wallet,
  Building2,
  UserCog,
  DollarSign,
  IndianRupee,
  Copy,
  Trophy,
  CreditCard,
  Shield,
  FileCheck,
  HeadphonesIcon,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Palette,
  Mail,
  Gift,
  Image,
  Key,
  Eye,
  EyeOff,
  Lock,
  User
} from 'lucide-react'
import { API_URL } from '../config/api'
import logoImage from '../assets/SetupFX.png'

const AdminLayout = ({ children, title, subtitle }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [sidebarExpanded, setSidebarExpanded] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState({})
  const [admin, setAdmin] = useState(null)
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [passwordData, setPasswordData] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' })
  const [passwordError, setPasswordError] = useState('')
  const [passwordSuccess, setPasswordSuccess] = useState('')
  const [passwordLoading, setPasswordLoading] = useState(false)
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showProfileModal, setShowProfileModal] = useState(false)
  const [profileData, setProfileData] = useState({ firstName: '', lastName: '', phone: '' })
  const [profileError, setProfileError] = useState('')
  const [profileSuccess, setProfileSuccess] = useState('')
  const [profileLoading, setProfileLoading] = useState(false)

  // Get admin data from localStorage
  useEffect(() => {
    const adminUser = localStorage.getItem('adminUser')
    if (adminUser) {
      setAdmin(JSON.parse(adminUser))
    }
  }, [])

  // All menu items with sidebarPermission key
  const allMenuItems = [
    { name: 'Overview Dashboard', icon: LayoutDashboard, path: '/admin/dashboard', sidebarKey: 'overviewDashboard' },
    { name: 'User Management', icon: Users, path: '/admin/users', sidebarKey: 'userManagement' },
    { name: 'Trade Management', icon: TrendingUp, path: '/admin/trades', sidebarKey: 'tradeManagement' },
    { name: 'Fund Management', icon: Wallet, path: '/admin/funds', sidebarKey: 'fundManagement' },
    { name: 'Bank Settings', icon: Building2, path: '/admin/bank-settings', sidebarKey: 'bankSettings' },
    { name: 'IB Management', icon: UserCog, path: '/admin/ib-management', sidebarKey: 'ibManagement' },
    { name: 'Forex Charges', icon: DollarSign, path: '/admin/forex-charges', sidebarKey: 'forexCharges' },
    { name: 'Earnings Report', icon: TrendingUp, path: '/admin/earnings', sidebarKey: 'earningsReport' },
    { name: 'Copy Trade Management', icon: Copy, path: '/admin/copy-trade', sidebarKey: 'copyTrade' },
    { name: 'Prop Firm Challenges', icon: Trophy, path: '/admin/prop-firm', sidebarKey: 'propFirmChallenges' },
    { name: 'Account Types', icon: CreditCard, path: '/admin/account-types', sidebarKey: 'accountTypes' },
    { name: 'Theme Settings', icon: Palette, path: '/admin/theme', sidebarKey: 'themeSettings' },
    { name: 'Email Templates', icon: Mail, path: '/admin/email-templates', sidebarKey: 'emailTemplates' },
    { name: 'Bonus Management', icon: Gift, path: '/admin/bonus-management', sidebarKey: 'bonusManagement' },
    { name: 'Banner Management', icon: Image, path: '/admin/banners', sidebarKey: 'bonusManagement' },
    { name: 'Employee Management', icon: Shield, path: '/admin/admin-management', sidebarKey: 'employeeManagement' },
    { name: 'KYC Verification', icon: FileCheck, path: '/admin/kyc', sidebarKey: 'kycVerification' },
    { name: 'Support Tickets', icon: HeadphonesIcon, path: '/admin/support', sidebarKey: 'supportTickets' },
    { name: 'My Profile', icon: User, path: '/admin/profile', sidebarKey: 'myProfile' },
  ]

  // Check if user has sidebar permission (SUPER_ADMIN has all permissions)
  const hasSidebarPermission = (sidebarKey) => {
    if (!admin) return false
    if (admin.role === 'SUPER_ADMIN') return true
    if (sidebarKey === 'overviewDashboard') return true // Dashboard always visible
    if (sidebarKey === 'myProfile') return true // My Profile always visible
    
    // Check sidebarPermissions (new format)
    if (admin.sidebarPermissions && admin.sidebarPermissions[sidebarKey] === true) {
      return true
    }
    
    return false
  }

  // Filter menu items based on sidebar permissions
  const menuItems = allMenuItems.filter(item => hasSidebarPermission(item.sidebarKey))

  useEffect(() => {
    const adminToken = localStorage.getItem('adminToken')
    if (!adminToken) {
      navigate('/admin')
    }
  }, [navigate])

  const handleLogout = () => {
    const currentAdmin = admin
    localStorage.removeItem('adminToken')
    localStorage.removeItem('adminUser')
    // Redirect based on role - ADMIN goes to /admin-employee, SUPER_ADMIN goes to /admin
    if (currentAdmin?.role === 'ADMIN') {
      navigate('/admin-employee')
    } else {
      navigate('/admin')
    }
  }

  const handleChangePassword = async (e) => {
    e.preventDefault()
    setPasswordError('')
    setPasswordSuccess('')

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setPasswordError('New passwords do not match')
      return
    }

    if (passwordData.newPassword.length < 6) {
      setPasswordError('Password must be at least 6 characters')
      return
    }

    setPasswordLoading(true)
    try {
      const token = localStorage.getItem('adminToken')
      const res = await fetch(`${API_URL}/admin-mgmt/change-password`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          currentPassword: passwordData.currentPassword,
          newPassword: passwordData.newPassword
        })
      })
      const data = await res.json()

      if (data.success) {
        setPasswordSuccess('Password changed successfully!')
        setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' })
        setTimeout(() => {
          setShowPasswordModal(false)
          setPasswordSuccess('')
        }, 2000)
      } else {
        setPasswordError(data.message || 'Failed to change password')
      }
    } catch (err) {
      setPasswordError('Connection error. Please try again.')
    }
    setPasswordLoading(false)
  }

  const handleUpdateProfile = async (e) => {
    e.preventDefault()
    setProfileError('')
    setProfileSuccess('')

    if (!profileData.firstName.trim()) {
      setProfileError('First name is required')
      return
    }

    setProfileLoading(true)
    try {
      const token = localStorage.getItem('adminToken')
      const res = await fetch(`${API_URL}/admin-mgmt/update-profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(profileData)
      })
      const data = await res.json()

      if (data.success) {
        // Update localStorage with new data
        const updatedAdmin = { ...admin, firstName: profileData.firstName, lastName: profileData.lastName, phone: profileData.phone }
        localStorage.setItem('adminUser', JSON.stringify(updatedAdmin))
        setAdmin(updatedAdmin)
        setProfileSuccess('Profile updated successfully!')
        setTimeout(() => {
          setShowProfileModal(false)
          setProfileSuccess('')
        }, 2000)
      } else {
        setProfileError(data.message || 'Failed to update profile')
      }
    } catch (err) {
      setProfileError('Connection error. Please try again.')
    }
    setProfileLoading(false)
  }

  const isActive = (path) => location.pathname === path

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  return (
    <div className="min-h-screen bg-dark-900 flex">
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          ${sidebarExpanded ? 'w-64' : 'w-16'} 
          ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          bg-dark-900 border-r border-gray-800 flex flex-col 
          transition-all duration-300 ease-in-out
        `}
      >
        {/* Logo */}
        <div className="p-4 flex items-center justify-between border-b border-gray-800">
          <div className="flex items-center gap-2">
            <img src={logoImage} alt="SetupFX" className="h-8 w-auto object-contain flex-shrink-0" />
          </div>
          <button 
            onClick={() => setSidebarExpanded(!sidebarExpanded)}
            className="hidden lg:block p-1 hover:bg-dark-700 rounded transition-colors"
          >
            <Menu size={18} className="text-gray-400" />
          </button>
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="lg:hidden p-1 hover:bg-dark-700 rounded transition-colors"
          >
            <X size={18} className="text-gray-400" />
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 px-2 py-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                navigate(item.path)
                setMobileMenuOpen(false)
              }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-colors ${
                isActive(item.path)
                  ? 'bg-red-500 text-white' 
                  : 'text-gray-400 hover:text-white hover:bg-dark-700'
              }`}
              title={!sidebarExpanded ? item.name : ''}
            >
              <item.icon size={18} className="flex-shrink-0" />
              {sidebarExpanded && (
                <span className="text-sm font-medium whitespace-nowrap truncate">{item.name}</span>
              )}
            </button>
          ))}
        </nav>

        {/* Change Password & Logout */}
        <div className="p-2 border-t border-gray-800 space-y-1">
          <button 
            onClick={() => {
              setShowPasswordModal(true)
              setPasswordError('')
              setPasswordSuccess('')
              setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' })
            }}
            className="w-full flex items-center gap-3 px-3 py-2.5 text-gray-400 hover:text-white hover:bg-dark-700 transition-colors rounded-lg"
            title={!sidebarExpanded ? 'Change Password' : ''}
          >
            <Key size={18} className="flex-shrink-0" />
            {sidebarExpanded && <span className="text-sm font-medium whitespace-nowrap">Change Password</span>}
          </button>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 text-gray-400 hover:text-white hover:bg-dark-700 transition-colors rounded-lg"
            title={!sidebarExpanded ? 'Log Out' : ''}
          >
            <LogOut size={18} className="flex-shrink-0" />
            {sidebarExpanded && <span className="text-sm font-medium whitespace-nowrap">Log Out</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto min-w-0">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-dark-900/95 backdrop-blur-sm flex items-center justify-between px-4 sm:px-6 py-4 border-b border-gray-800">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 hover:bg-dark-700 rounded-lg transition-colors"
            >
              <Menu size={20} className="text-gray-400" />
            </button>
            <div>
              <h1 className="text-lg sm:text-xl font-semibold text-white">{title || 'Admin Dashboard'}</h1>
              {subtitle && <p className="text-gray-500 text-sm hidden sm:block">{subtitle}</p>}
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-red-500/20 text-red-500 rounded-full text-xs sm:text-sm">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="hidden sm:inline">Admin Mode</span>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-4 sm:p-6">
          {children}
        </div>
      </main>

      {/* Change Password Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-dark-800 rounded-xl p-6 w-full max-w-md border border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                <Lock size={20} className="text-red-500" />
                Change Password
              </h2>
              <button
                onClick={() => setShowPasswordModal(false)}
                className="p-2 hover:bg-dark-700 rounded-lg transition-colors"
              >
                <X size={20} className="text-gray-400" />
              </button>
            </div>

            <form onSubmit={handleChangePassword} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Current Password</label>
                <div className="relative">
                  <input
                    type={showCurrentPassword ? 'text' : 'password'}
                    value={passwordData.currentPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                    className="w-full bg-dark-700 border border-gray-600 rounded-lg px-4 py-3 pr-12 text-white focus:outline-none focus:border-red-500"
                    placeholder="Enter current password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                  >
                    {showCurrentPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">New Password</label>
                <div className="relative">
                  <input
                    type={showNewPassword ? 'text' : 'password'}
                    value={passwordData.newPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                    className="w-full bg-dark-700 border border-gray-600 rounded-lg px-4 py-3 pr-12 text-white focus:outline-none focus:border-red-500"
                    placeholder="Enter new password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                  >
                    {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Confirm New Password</label>
                <input
                  type="password"
                  value={passwordData.confirmPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                  className="w-full bg-dark-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500"
                  placeholder="Confirm new password"
                  required
                />
              </div>

              {passwordError && (
                <p className="text-red-500 text-sm">{passwordError}</p>
              )}

              {passwordSuccess && (
                <p className="text-green-500 text-sm">{passwordSuccess}</p>
              )}

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowPasswordModal(false)}
                  className="flex-1 px-4 py-3 bg-dark-700 text-white rounded-lg hover:bg-dark-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={passwordLoading}
                  className="flex-1 px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50"
                >
                  {passwordLoading ? 'Changing...' : 'Change Password'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Profile Modal */}
      {showProfileModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-dark-800 rounded-xl p-6 w-full max-w-md border border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                <Users size={20} className="text-red-500" />
                Edit Profile
              </h2>
              <button
                onClick={() => setShowProfileModal(false)}
                className="p-2 hover:bg-dark-700 rounded-lg transition-colors"
              >
                <X size={20} className="text-gray-400" />
              </button>
            </div>

            <form onSubmit={handleUpdateProfile} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">First Name *</label>
                <input
                  type="text"
                  value={profileData.firstName}
                  onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                  className="w-full bg-dark-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500"
                  placeholder="Enter first name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Last Name</label>
                <input
                  type="text"
                  value={profileData.lastName}
                  onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
                  className="w-full bg-dark-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500"
                  placeholder="Enter last name"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Phone</label>
                <input
                  type="text"
                  value={profileData.phone}
                  onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                  className="w-full bg-dark-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500"
                  placeholder="Enter phone number"
                />
              </div>

              {profileError && (
                <p className="text-red-500 text-sm">{profileError}</p>
              )}

              {profileSuccess && (
                <p className="text-green-500 text-sm">{profileSuccess}</p>
              )}

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowProfileModal(false)}
                  className="flex-1 px-4 py-3 bg-dark-700 text-white rounded-lg hover:bg-dark-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={profileLoading}
                  className="flex-1 px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50"
                >
                  {profileLoading ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminLayout
