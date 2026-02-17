"use client";

import { Trophy } from "lucide-react";
import SolutionPageTemplate from "../components/SolutionPageTemplate";

export default function PropTradingPage() {
  return (
    <SolutionPageTemplate
      icon={Trophy}
      badge="Prop Trading"
      title="Prop Challenge"
      highlight="Management Engine"
      subtitle="Launch and manage proprietary trading challenges with fully configurable evaluation rules, risk parameters, and automated payout structures."
      description="Our prop trading solution gives you everything needed to run a professional prop firm. Create multi-phase evaluation programs with custom profit targets, drawdown limits, and trading day requirements. The system automatically monitors all risk rules in real time, handles phase transitions, and manages funded account allocations. From challenge creation to profit splits — every step is automated and transparent."
      features={[
        { title: "Multi-Phase Challenges", description: "Create 1-step, 2-step, or custom evaluation programs with unique rules per phase." },
        { title: "Automated Risk Monitoring", description: "Real-time breach detection for daily loss, max drawdown, and position limits." },
        { title: "Configurable Rules Engine", description: "Set profit targets, drawdown limits, minimum trading days, and scaling plans." },
        { title: "Funded Account Management", description: "Automatic account provisioning and profit-split calculations for funded traders." },
        { title: "Challenge Dashboard", description: "Real-time progress tracking for traders with detailed performance analytics." },
        { title: "Payout Automation", description: "Configurable profit-split ratios with automated payout scheduling and processing." },
      ]}
      benefits={[
        "Launch your prop firm with zero development effort",
        "Fully automated evaluation — no manual monitoring needed",
        "Real-time risk breach detection protects your capital",
        "Configurable challenge types to match your business model",
        "Transparent trader dashboards build trust and reduce support tickets",
        "Automated payouts reduce operational overhead",
        "Scaling plans reward consistent traders with larger accounts",
        "Complete analytics for business intelligence and optimization",
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
              <div className="bg-zinc-800 rounded-md px-3 py-1 text-xs text-zinc-500 text-center">Prop Challenge — $100K Evaluation</div>
            </div>
          </div>
          <div className="p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-zinc-500">Phase 1 — Evaluation</div>
                <div className="text-sm text-white font-semibold mt-0.5">$100,000 Challenge</div>
              </div>
              <div className="bg-green-500/10 text-green-400 text-[10px] font-medium px-2.5 py-1 rounded-full border border-green-500/20">
                In Progress
              </div>
            </div>
            <div className="space-y-3">
              {[
                { label: "Profit Target (8%)", current: "$5,200", target: "$8,000", pct: 65, color: "from-blue-500 to-green-500" },
                { label: "Max Drawdown (10%)", current: "$3,100", target: "$10,000", pct: 31, color: "from-yellow-500 to-red-500" },
                { label: "Trading Days", current: "8", target: "10 min", pct: 80, color: "from-blue-400 to-blue-600" },
              ].map((bar) => (
                <div key={bar.label}>
                  <div className="flex justify-between text-[10px] mb-1">
                    <span className="text-zinc-400">{bar.label}</span>
                    <span className="text-zinc-300">{bar.current} / {bar.target}</span>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${bar.color} rounded-full`} style={{ width: `${bar.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "Win Rate", value: "68%", color: "text-green-400" },
                { label: "Profit Factor", value: "2.4", color: "text-blue-400" },
                { label: "Days Left", value: "22", color: "text-white" },
              ].map((stat) => (
                <div key={stat.label} className="bg-zinc-800/50 rounded p-2.5 text-center">
                  <div className="text-[9px] text-zinc-500">{stat.label}</div>
                  <div className={`text-sm font-bold ${stat.color} font-mono mt-0.5`}>{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    />
  );
}
