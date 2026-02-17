import PageLayout from "../components/PageLayout";
import { motion } from "framer-motion";
import {
  Droplets, Plug, Shield, Workflow, CheckCircle, ArrowRight, Zap,
  Globe, Smartphone, Layers, Copy, LayoutDashboard, TrendingUp, BarChart3,
} from "lucide-react";

const clientIntegrationFeatures = [
  "Connect your liquidity to Web & Mobile platforms",
  "Configure pricing, symbols, and spreads",
  "Ensure fast execution and stability",
  "Full compatibility with your CRM & admin panel",
];

const setupfxLiquidityFeatures = [
  "Forex, Crypto, Commodities, Indices & CFDs",
  "Tight spreads & deep market depth",
  "High-speed execution with low latency",
  "Stable performance during high volatility",
];

const abBookFeatures = [
  "Supports both A-Book and B-Book models",
  "Smart order routing",
  "Risk management flexibility",
  "Custom setup based on broker strategy",
];

const platformCompatibility = [
  { icon: Globe, label: "Web Trading Platforms" },
  { icon: Smartphone, label: "Mobile Trading Apps (Android & iOS)" },
  { icon: Layers, label: "White Label Trading Systems" },
  { icon: Copy, label: "Copy Trading, PAM & MAM" },
  { icon: LayoutDashboard, label: "CRM & Admin Dashboards" },
];

const whyChoose = [
  "Use your own liquidity or ours",
  "Fast and secure integrations",
  "Scalable infrastructure",
  "Transparent setup",
  "Dedicated technical support",
];

export default function LiquidityPage() {
  return (
    <PageLayout
      title="Liquidity Solutions"
      subtitle="Flexible Liquidity. Full Control. Seamless Execution."
    >
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="relative rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 via-zinc-900/50 to-cyan-600/10 p-10 md:p-14 mb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <Droplets className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-xs font-semibold">Liquidity by SetupFX</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            End-to-End <span className="text-blue-400">Liquidity Solutions</span>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
            SetupFX offers end-to-end liquidity solutions for brokers and trading firms. We integrate your existing liquidity providers or supply our own deep liquidity, based on your business needs.
          </p>
          <a href="/#contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/25 text-sm">
            Discuss Your Liquidity Setup <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>

      <div className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Two Ways We Handle Liquidity</h3>
        <p className="text-zinc-400 text-sm max-w-xl mx-auto">Choose the model that fits your business — or combine both for maximum flexibility.</p>
      </div>

      <motion.div id="client-integration" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="grid lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300">
          <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
            <Plug className="w-7 h-7 text-blue-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Client Liquidity Integration</h3>
          <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-4">Already working with a liquidity provider?</p>
          <p className="text-zinc-400 text-sm leading-relaxed mb-6">No problem. SetupFX can connect and configure your existing liquidity with your platform. You stay in control of your liquidity relationships — we handle the technology.</p>
          <h4 className="text-white text-sm font-semibold mb-3">What we do:</h4>
          <ul className="space-y-2.5">
            {clientIntegrationFeatures.map((f) => (
              <li key={f} className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-zinc-300 text-sm">{f}</span>
              </li>
            ))}
          </ul>
        </div>
        <div id="setupfx-liquidity" className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300">
          <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
            <Droplets className="w-7 h-7 text-blue-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">SetupFX Liquidity Provider</h3>
          <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-4">Don&apos;t have a liquidity provider?</p>
          <p className="text-zinc-400 text-sm leading-relaxed mb-6">SetupFX can provide reliable, multi-asset liquidity. Get access to deep markets with tight spreads and high-speed execution across all major asset classes.</p>
          <h4 className="text-white text-sm font-semibold mb-3">Includes:</h4>
          <ul className="space-y-2.5">
            {setupfxLiquidityFeatures.map((f) => (
              <li key={f} className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-zinc-300 text-sm">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <motion.div id="ab-book" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 md:p-10 mb-20 hover:border-blue-500/30 transition-all duration-300">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
              <Shield className="w-7 h-7 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">A-Book & B-Book Support</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">Our liquidity infrastructure supports both A-Book and B-Book execution models with smart order routing and full risk management flexibility.</p>
            <ul className="space-y-2.5">
              {abBookFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-zinc-300 text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: TrendingUp, title: "A-Book", desc: "Pass orders directly to liquidity providers" },
              { icon: BarChart3, title: "B-Book", desc: "Internalize orders with risk controls" },
              { icon: Workflow, title: "Smart Routing", desc: "Automatic order routing logic" },
              { icon: Shield, title: "Risk Management", desc: "Real-time exposure monitoring" },
            ].map((item) => (
              <div key={item.title} className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-5 text-center">
                <item.icon className="w-6 h-6 text-blue-400 mx-auto mb-3" />
                <h4 className="text-white text-sm font-semibold mb-1">{item.title}</h4>
                <p className="text-zinc-400 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div id="compatibility" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="mb-20">
        <h3 className="text-2xl font-bold text-white mb-2">Platform Compatibility</h3>
        <p className="text-zinc-400 text-sm mb-8">Our liquidity works seamlessly with all major trading platforms and systems.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {platformCompatibility.map((p, i) => (
            <motion.div key={p.label} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.3 + i * 0.07 }} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 text-center hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 group">
              <div className="w-11 h-11 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-500/20 transition-colors">
                <p.icon className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-zinc-300 text-xs font-medium">{p.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="mb-20">
        <h3 className="text-2xl font-bold text-white mb-2">Why Choose SetupFX?</h3>
        <p className="text-zinc-400 text-sm mb-8">Built for brokers who need reliable, flexible liquidity infrastructure.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {whyChoose.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: 0.4 + i * 0.06 }} className="flex items-center gap-3 bg-zinc-900/30 border border-zinc-800/50 rounded-lg px-4 py-4">
              <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <span className="text-zinc-300 text-sm font-medium">{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="text-center bg-gradient-to-br from-blue-600/10 via-zinc-900/50 to-cyan-600/5 border border-blue-500/20 rounded-2xl p-10 md:p-14">
        <Zap className="w-10 h-10 text-blue-400 mx-auto mb-4" />
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Get Started with SetupFX Liquidity</h3>
        <p className="text-zinc-400 text-sm max-w-xl mx-auto mb-8">Whether you bring your own liquidity provider or need SetupFX to supply liquidity, we ensure a smooth, secure, and professional trading environment.</p>
        <a href="/#contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-10 py-4 rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/25 text-sm">
          Contact Us Today <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>
    </PageLayout>
  );
}
