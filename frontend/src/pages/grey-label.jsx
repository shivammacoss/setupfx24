import PageLayout from "../components/PageLayout";
import { motion } from "framer-motion";
import {
  Tag,
  CheckCircle,
  ArrowRight,
  Zap,
  Settings,
  Palette,
  Globe,
  Shield,
  BarChart3,
  Smartphone,
} from "lucide-react";

const features = [
  { icon: Palette, title: "Partial Branding", desc: "Customize logos, colors, and key UI elements while leveraging our proven platform design." },
  { icon: Globe, title: "Web Trading Platform", desc: "Pre-built web trader with your branding applied — ready to go in days, not weeks." },
  { icon: Smartphone, title: "Mobile App Access", desc: "Branded mobile trading experience on iOS and Android with your logo and colors." },
  { icon: Settings, title: "Pre-Configured Setup", desc: "Platform comes pre-configured with symbols, spreads, and trading rules — just customize and launch." },
  { icon: Shield, title: "Shared Infrastructure", desc: "Benefit from enterprise-grade hosting, security, and uptime without managing your own servers." },
  { icon: BarChart3, title: "Admin Dashboard", desc: "Access a back-office panel to manage clients, view reports, and monitor trading activity." },
];

const benefits = [
  "Lower upfront cost compared to full white-label",
  "Faster time to market — launch in days",
  "No server management or infrastructure overhead",
  "Ideal for new brokers and startups",
  "Upgrade path to full white-label when ready",
  "Ongoing updates and maintenance included",
  "Shared liquidity and execution infrastructure",
  "Dedicated support and onboarding assistance",
];

const comparison = [
  { feature: "Custom Logo & Colors", grey: true, white: true },
  { feature: "Custom Domain", grey: false, white: true },
  { feature: "Full UI Customization", grey: false, white: true },
  { feature: "Own App Store Listing", grey: false, white: true },
  { feature: "Web & Mobile Trading", grey: true, white: true },
  { feature: "Admin Dashboard", grey: true, white: true },
  { feature: "Source Code Access", grey: false, white: true },
  { feature: "Setup Time", grey: "Days", white: "2-4 Weeks" },
  { feature: "Cost", grey: "Lower", white: "Higher" },
];

export default function GreyLabelPage() {
  return (
    <PageLayout
      title="Grey Label Platform"
      subtitle="A cost-effective, semi-branded trading platform — perfect for new brokers who want to launch fast without the full white-label investment."
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 via-zinc-900/50 to-zinc-800/30 p-10 md:p-14 mb-20 overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <Tag className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-xs font-semibold">Grey Label Platform</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Launch Your Brokerage <span className="text-blue-400">In Days, Not Months.</span>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
            Get a semi-branded trading platform with your logo and colors at a fraction of the cost of a full white-label. Ideal for startups and new brokers who want to test the market quickly.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/#contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/25 text-sm">
              Get Demo <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/solutions/white-label" className="inline-flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-200 hover:bg-white/5 text-sm">
              Compare with White Label
            </a>
          </div>
        </div>
      </motion.div>

      <div className="mb-20">
        <h3 className="text-2xl font-bold text-white mb-2">What You Get</h3>
        <p className="text-zinc-400 text-sm mb-8">Everything you need to start your brokerage — without the complexity.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.08 }} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 group">
              <div className="w-11 h-11 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                <f.icon className="w-5 h-5 text-blue-400" />
              </div>
              <h4 className="text-white font-semibold text-sm mb-2">{f.title}</h4>
              <p className="text-zinc-400 text-xs leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mb-20">
        <h3 className="text-2xl font-bold text-white mb-2">Grey Label vs White Label</h3>
        <p className="text-zinc-400 text-sm mb-8">See how the two options compare — choose what fits your stage.</p>
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-3 bg-zinc-800/50 px-6 py-3">
            <span className="text-zinc-400 text-xs font-semibold">Feature</span>
            <span className="text-blue-400 text-xs font-semibold text-center">Grey Label</span>
            <span className="text-white text-xs font-semibold text-center">White Label</span>
          </div>
          {comparison.map((row, i) => (
            <div key={i} className="grid grid-cols-3 px-6 py-3 border-t border-zinc-800/50">
              <span className="text-zinc-300 text-sm">{row.feature}</span>
              <span className="text-center text-sm">
                {typeof row.grey === "boolean" ? (
                  row.grey ? <CheckCircle className="w-4 h-4 text-blue-400 inline" /> : <span className="text-zinc-600">—</span>
                ) : (
                  <span className="text-blue-400 font-medium">{row.grey}</span>
                )}
              </span>
              <span className="text-center text-sm">
                {typeof row.white === "boolean" ? (
                  row.white ? <CheckCircle className="w-4 h-4 text-green-400 inline" /> : <span className="text-zinc-600">—</span>
                ) : (
                  <span className="text-white font-medium">{row.white}</span>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-20">
        <h3 className="text-2xl font-bold text-white mb-2">Why Grey Label?</h3>
        <p className="text-zinc-400 text-sm mb-8">The smart way to enter the brokerage market.</p>
        <div className="grid md:grid-cols-2 gap-3">
          {benefits.map((b, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: i * 0.05 }} className="flex items-start gap-3 bg-zinc-900/30 border border-zinc-800/50 rounded-lg px-5 py-4">
              <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <span className="text-zinc-300 text-sm">{b}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="text-center bg-gradient-to-br from-blue-600/10 via-zinc-900/50 to-blue-600/5 border border-blue-500/20 rounded-2xl p-10 md:p-14">
        <Zap className="w-10 h-10 text-blue-400 mx-auto mb-4" />
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Ready to Get Started?</h3>
        <p className="text-zinc-400 text-sm max-w-xl mx-auto mb-8">See the grey label platform in action. Schedule a free demo and launch your brokerage in days.</p>
        <a href="/#contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-10 py-4 rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/25 text-sm">
          Get Demo <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>
    </PageLayout>
  );
}
