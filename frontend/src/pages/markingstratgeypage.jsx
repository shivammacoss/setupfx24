import PageLayout from "../components/PageLayout";
import { Target, CheckCircle } from "lucide-react";

export default function MarketingStrategyPage() {
  const features = [
    "Market research & competitor analysis",
    "Target audience identification",
    "Multi-channel marketing plans",
    "KPI setting & performance tracking",
    "Budget optimization & ROI analysis",
    "Quarterly strategy reviews & adjustments",
  ];

  return (
    <PageLayout
      title="Marketing Strategy"
      subtitle="Data-driven strategies for measurable growth. We create comprehensive marketing plans that align with your business goals."
    >
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
            <Target className="w-7 h-7 text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Strategic Growth Planning</h2>
          <p className="text-zinc-400 leading-relaxed mb-8">
            Every successful marketing campaign starts with a solid strategy. We analyze your market, competitors, and audience to create data-driven plans that maximize your marketing ROI and drive sustainable growth.
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
          <h3 className="text-xl font-semibold text-white mb-6">Strategy Components</h3>
          <div className="space-y-4">
            {[
              { title: "Market Analysis", desc: "Deep dive into your industry and competition" },
              { title: "Audience Mapping", desc: "Identify and segment your ideal customers" },
              { title: "Channel Strategy", desc: "Select the right platforms for maximum impact" },
              { title: "Performance Framework", desc: "Set measurable goals and tracking systems" },
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
