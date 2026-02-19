import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import logoImage from '../assets/setupfx24.png'

const PageLayout = ({ title, subtitle, children }) => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <nav className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-[72px]">
          <a href="/" className="flex items-center">
            <img src={logoImage} alt="SetupFX24" className="h-8 w-auto" />
          </a>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-zinc-400 hover:text-white text-sm font-medium transition-colors"
          >
            <ArrowLeft size={16} />
            Back
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">{title}</h1>
          {subtitle && (
            <p className="mt-4 text-zinc-400 text-lg max-w-2xl">{subtitle}</p>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        {children}
      </div>
    </div>
  )
}

export default PageLayout
