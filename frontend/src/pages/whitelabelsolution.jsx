"use client";

import PageLayout from "../components/PageLayout";
import { motion } from "framer-motion";
import {
  Layers,
  CheckCircle,
  Palette,
  Globe,
  Smartphone,
  Shield,
  BarChart3,
  Users,
  Headphones,
  Zap,
  ArrowRight,
} from "lucide-react";

const features = [
  { icon: Palette, title: "Full Brand Customization", desc: "Custom logos, colors, fonts, domains, and email templates across all platforms." },
  { icon: Globe, title: "Web Trader Platform", desc: "Browser-based trading with real-time charts, order management, and multi-asset support." },
  { icon: Smartphone, title: "Mobile Trading App", desc: "Flutter-based iOS & Android app published under your own developer account." },
  { icon: Users, title: "Client Portal & CRM", desc: "Self-service dashboard for deposits, withdrawals, KYC, and complete admin panel." },
  { icon: Shield, title: "Enterprise Security", desc: "Bank-grade encryption, 2FA, DDoS protection, and full regulatory compliance." },
  { icon: BarChart3, title: "Analytics & Reporting", desc: "Real-time dashboards with trading volume, revenue, and client activity insights." },
];

const benefits = [
  "100% white-label — zero SetupFX24 branding visible to your clients",
  "Go live in as little as 2–4 weeks with a fully branded platform",
  "Mobile apps published under your own App Store & Play Store accounts",
  "Continuous updates and new features without any downtime",
  "Dedicated account manager and 24/7 technical support",
  "Scalable infrastructure that grows with your client base",
  "Multi-language and multi-currency support out of the box",
  "Full API access for custom integrations and third-party tools",
];

const steps = [
  { num: "01", title: "Consultation", desc: "We discuss your brand, requirements, and target market." },
  { num: "02", title: "Customization", desc: "Your platform is branded and configured to your specifications." },
  { num: "03", title: "Testing", desc: "Full QA, UAT, and performance testing before launch." },
  { num: "04", title: "Go Live", desc: "Deploy on your domain with ongoing support and updates." },
];

export default function WhiteLabelPage() {
  return (
    <PageLayout
      title="White Label Solution"
      subtitle="Launch your own fully branded trading platform. Your brand, your clients, your business — powered by our technology."
    >
      {/* Hero CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 via-zinc-900/50 to-purple-600/10 p-10 md:p-14 mb-20 overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <Layers className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-xs font-semibold">White Label Platform</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Your Brand. <span className="text-blue-400">Your Platform.</span>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
            Get a complete, production-ready trading ecosystem that looks and feels 100% yours. From web trader and mobile apps to CRM and client portal — every pixel carries your brand identity.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/25 text-sm"
            >
              Get Demo
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-200 hover:bg-white/5 text-sm"
            >
              View Pricing
            </a>
          </div>
        </div>
      </motion.div>

      {/* Platform Preview Mockup */}
      <div className="mb-20">
        <h3 className="text-2xl font-bold text-white mb-2 text-center">Platform Preview</h3>
        <p className="text-zinc-400 text-sm text-center mb-8">Everything branded under your company — zero trace of us.</p>
        <motion.div
          initial={{ opacity: 0, rotateX: 90 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          whileHover={{ rotateY: 8, scale: 1.02 }}
          className="max-w-4xl mx-auto cursor-pointer"
          style={{ perspective: 1200 }}
        >
          <img
            src="/WLS.png"
            alt="White Label Platform Preview"
            className="w-full h-auto rounded-2xl border border-zinc-800/50 shadow-2xl shadow-blue-500/10 transition-shadow duration-300 hover:shadow-blue-500/20"
          />
        </motion.div>
      </div>

      {/* Features Grid */}
      <div className="mb-20">
        <h3 className="text-2xl font-bold text-white mb-2">What&apos;s Included</h3>
        <p className="text-zinc-400 text-sm mb-8">Everything you need to launch and run a successful brokerage.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                <f.icon className="w-5 h-5 text-blue-400" />
              </div>
              <h4 className="text-white font-semibold text-sm mb-2">{f.title}</h4>
              <p className="text-zinc-400 text-xs leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="mb-20">
        <h3 className="text-2xl font-bold text-white mb-2">How It Works</h3>
        <p className="text-zinc-400 text-sm mb-8">From consultation to go-live in 4 simple steps.</p>
        <div className="grid md:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-center"
            >
              <div className="text-3xl font-bold text-blue-500/20 mb-3">{s.num}</div>
              <h4 className="text-white font-semibold text-sm mb-2">{s.title}</h4>
              <p className="text-zinc-400 text-xs leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="mb-20">
        <h3 className="text-2xl font-bold text-white mb-2">Why Choose Our White Label</h3>
        <p className="text-zinc-400 text-sm mb-8">Built for brokers who want full control without the development headache.</p>
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

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center bg-gradient-to-br from-blue-600/10 via-zinc-900/50 to-blue-600/5 border border-blue-500/20 rounded-2xl p-10 md:p-14"
      >
        <Zap className="w-10 h-10 text-blue-400 mx-auto mb-4" />
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Ready to Launch Your Platform?</h3>
        <p className="text-zinc-400 text-sm max-w-xl mx-auto mb-8">
          Schedule a free demo and see how our white-label solution can power your brokerage business.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-10 py-4 rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/25 text-sm"
        >
          Get Demo
          <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>
    </PageLayout>
  );
}
