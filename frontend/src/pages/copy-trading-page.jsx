import { Copy } from "lucide-react";
import SolutionPageTemplate from "../components/SolutionPageTemplate";

export default function CopyTradingPage() {
  return (
    <SolutionPageTemplate
      icon={Copy}
      badge="Copy Trading"
      title="Social Trading"
      highlight="Master & Follower"
      subtitle="Enable your clients to copy top-performing traders automatically. A complete social trading ecosystem that drives engagement and volume."
      description="Our copy trading solution lets you offer a full social trading experience on your platform. Traders can become signal providers (masters) and share their strategies, while followers can automatically replicate trades in real time with customizable risk settings. The system handles allocation, risk management, and performance tracking — all seamlessly integrated into your branded platform."
      features={[
        { title: "Master/Follower System", description: "Traders can become masters and attract followers who auto-copy their trades." },
        { title: "Real-Time Trade Replication", description: "Instant trade copying with configurable lot sizing, risk limits, and slippage control." },
        { title: "Performance Leaderboard", description: "Public rankings with verified stats — ROI, drawdown, win rate, and trade history." },
        { title: "Risk Management", description: "Per-follower stop-loss, max drawdown limits, and position size controls." },
        { title: "Revenue Sharing", description: "Configurable profit-sharing models between masters, followers, and the broker." },
        { title: "Strategy Marketplace", description: "Curated marketplace where masters can list and promote their strategies." },
      ]}
      benefits={[
        "Attract new clients who want to trade but lack experience",
        "Increase platform trading volume through automated copying",
        "Retain traders by giving them a social community experience",
        "Generate additional revenue through performance fees and commissions",
        "Verified track records build trust and transparency",
        "Configurable risk controls protect followers from excessive losses",
        "Fully integrated into your white-label platform — no third-party branding",
        "Real-time copying with sub-second execution latency",
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
              <div className="bg-zinc-800 rounded-md px-3 py-1 text-xs text-zinc-500 text-center">Copy Trading — Strategy Marketplace</div>
            </div>
          </div>
          <div className="p-5 space-y-3">
            <div className="text-xs text-zinc-500 font-medium">Top Signal Providers</div>
            {[
              { name: "AlphaTrader", roi: "+142%", dd: "8.2%", followers: "1,240", badge: "\u{1F3C6}" },
              { name: "FX_Wizard", roi: "+98%", dd: "12.1%", followers: "890", badge: "\u2B50" },
              { name: "SwingMaster", roi: "+76%", dd: "6.5%", followers: "650", badge: "\u2B50" },
            ].map((master) => (
              <div key={master.name} className="flex items-center justify-between bg-zinc-800/40 rounded-lg px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="text-sm">{master.badge}</span>
                  <div>
                    <div className="text-sm text-white font-medium">{master.name}</div>
                    <div className="text-[10px] text-zinc-500">{master.followers} followers</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-green-400 font-mono font-medium">{master.roi}</div>
                  <div className="text-[9px] text-zinc-500">DD: {master.dd}</div>
                </div>
              </div>
            ))}
            <div className="flex gap-2 pt-1">
              <div className="flex-1 bg-blue-600/20 text-blue-400 text-[10px] text-center py-2 rounded-lg font-medium cursor-pointer hover:bg-blue-600/30 transition-colors">
                Follow & Copy
              </div>
              <div className="flex-1 bg-zinc-800/50 text-zinc-400 text-[10px] text-center py-2 rounded-lg font-medium cursor-pointer hover:bg-zinc-800 transition-colors">
                View Strategy
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}
