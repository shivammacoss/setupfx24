import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import logoImage from '../assets/setupfx24.png'

const SolutionPageTemplate = ({ icon: Icon, badge, title, highlight, subtitle, description, features, benefits, mockupContent }) => {
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
          {badge && (
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
              {Icon && <Icon className="w-4 h-4 text-blue-400" />}
              <span className="text-blue-400 text-xs font-semibold">{badge}</span>
            </div>
          )}
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            {title} {highlight && <span className="text-blue-400">{highlight}</span>}
          </h1>
          {subtitle && (
            <p className="mt-4 text-zinc-400 text-lg max-w-2xl">{subtitle}</p>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        {/* Description */}
        {description && (
          <div className="mb-16">
            <p className="text-zinc-400 leading-relaxed max-w-4xl">{description}</p>
          </div>
        )}

        {/* Mockup */}
        {mockupContent && (
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white mb-2 text-center">Platform Preview</h3>
            <p className="text-zinc-400 text-sm text-center mb-8">See how it works in action.</p>
            <div className="max-w-2xl mx-auto">
              {mockupContent}
            </div>
          </div>
        )}

        {/* Features Grid */}
        {features && features.length > 0 && (
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white mb-2">Key Features</h3>
            <p className="text-zinc-400 text-sm mb-8">Everything you need, built in.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300"
                >
                  <h4 className="text-white font-semibold text-sm mb-2">{f.title}</h4>
                  <p className="text-zinc-400 text-xs leading-relaxed">{f.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Benefits */}
        {benefits && benefits.length > 0 && (
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white mb-2">Why Choose This Solution</h3>
            <p className="text-zinc-400 text-sm mb-8">Built for performance and scale.</p>
            <div className="grid md:grid-cols-2 gap-3">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-start gap-3 bg-zinc-900/30 border border-zinc-800/50 rounded-lg px-5 py-4"
                >
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-zinc-300 text-sm">{b}</span>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-br from-blue-600/10 via-zinc-900/50 to-blue-600/5 border border-blue-500/20 rounded-2xl p-10 md:p-14">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Ready to Get Started?</h3>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto mb-8">
            Schedule a free consultation and see how this solution can power your business.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-10 py-4 rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/25 text-sm"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default SolutionPageTemplate
