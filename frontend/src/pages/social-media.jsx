import PageLayout from "../components/PageLayout";
import { Share2, CheckCircle } from "lucide-react";

export default function SocialMediaMarketingPage() {
  const features = [
    "Social media strategy & planning",
    "Content creation & scheduling",
    "Community management & engagement",
    "Influencer marketing partnerships",
    "Social media analytics & reporting",
    "Brand reputation management",
  ];

  return (
    <PageLayout
      title="Social Media Marketing"
      subtitle="Build brand presence across platforms. We create engaging social media strategies that grow your audience and drive meaningful engagement."
    >
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
            <Share2 className="w-7 h-7 text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Social Media Excellence</h2>
          <p className="text-zinc-400 leading-relaxed mb-8">
            We help brands build authentic connections with their audience through strategic social media management. From content creation to community engagement, we handle every aspect of your social presence.
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
          <h3 className="text-xl font-semibold text-white mb-6">Platforms We Manage</h3>
          <div className="space-y-4">
            {[
              { title: "Instagram", desc: "Visual storytelling and brand building" },
              { title: "LinkedIn", desc: "Professional networking and B2B engagement" },
              { title: "Facebook", desc: "Community building and audience growth" },
              { title: "Twitter / X", desc: "Real-time engagement and thought leadership" },
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
