import PageLayout from "../components/PageLayout";
import { Users, CheckCircle } from "lucide-react";

export default function IBManagementPage() {
  const features = [
    "Multi-tier IB commission structures",
    "Real-time commission tracking & payouts",
    "IB dashboard with client overview",
    "Automated rebate calculations",
    "Sub-IB management & hierarchy",
    "Custom referral link generation",
    "Performance analytics & reports",
    "White-label IB portal option",
  ];

  return (
    <PageLayout
      title="IB Management"
      subtitle="A complete Introducing Broker management system to grow your partner network and automate commissions."
    >
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
            <Users className="w-7 h-7 text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Grow Your Partner Network</h2>
          <p className="text-zinc-400 leading-relaxed mb-8">
            Our IB Management system empowers you to build and manage a multi-tier introducing broker network with ease. Automate commission calculations, track referrals in real time, and give your IBs a branded portal to monitor their performance and earnings.
          </p>
          <ul className="space-y-3">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-zinc-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-white mb-6">IB System Highlights</h3>
          <div className="space-y-4">
            {[
              { title: "Multi-Tier Commissions", desc: "Support unlimited IB levels with flexible commission structures" },
              { title: "Real-Time Tracking", desc: "Live dashboards showing referrals, trades, and earnings" },
              { title: "Automated Payouts", desc: "Schedule automatic commission payments to your IBs" },
              { title: "IB Portal", desc: "Branded self-service portal for your introducing brokers" },
              { title: "Analytics", desc: "Detailed reports on IB performance, conversion rates, and revenue" },
            ].map((item) => (
              <div key={item.title} className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700/50">
                <h4 className="text-white font-medium text-sm">{item.title}</h4>
                <p className="text-zinc-400 text-xs mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
