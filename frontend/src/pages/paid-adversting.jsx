import PageLayout from "../components/PageLayout";
import { Megaphone, CheckCircle } from "lucide-react";

export default function PaidAdvertisingPage() {
  const features = [
    "Google Ads (Search, Display, Shopping)",
    "Facebook & Instagram Ads",
    "LinkedIn Ads for B2B",
    "Retargeting & remarketing campaigns",
    "A/B testing & conversion optimization",
    "Detailed ROI reporting & analytics",
  ];

  return (
    <PageLayout
      title="Paid Advertising"
      subtitle="Google Ads & social media campaigns that deliver results. We create and manage high-performing ad campaigns that maximize your return on investment."
    >
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
            <Megaphone className="w-7 h-7 text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Performance-Driven Advertising</h2>
          <p className="text-zinc-400 leading-relaxed mb-8">
            We create targeted ad campaigns that reach the right audience at the right time. Our data-driven approach ensures every dollar of your ad spend works harder, delivering measurable results and maximum ROI.
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
          <h3 className="text-xl font-semibold text-white mb-6">Ad Platforms</h3>
          <div className="space-y-4">
            {[
              { title: "Google Ads", desc: "Search, display, and shopping campaigns" },
              { title: "Meta Ads", desc: "Facebook & Instagram advertising" },
              { title: "LinkedIn Ads", desc: "B2B lead generation campaigns" },
              { title: "YouTube Ads", desc: "Video advertising for brand awareness" },
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
