import PageLayout from "../components/PageLayout";
import { FileText, CheckCircle } from "lucide-react";

export default function ContentMarketingPage() {
  const features = [
    "Content strategy & editorial planning",
    "Blog writing & article creation",
    "Video content production",
    "Email marketing campaigns",
    "Infographics & visual content",
    "Content performance analytics",
  ];

  return (
    <PageLayout
      title="Content Marketing"
      subtitle="Engaging content that drives engagement and conversions. We create valuable content that attracts, educates, and converts your target audience."
    >
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
            <FileText className="w-7 h-7 text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Content That Converts</h2>
          <p className="text-zinc-400 leading-relaxed mb-8">
            Great content is the foundation of digital marketing success. We create compelling, SEO-optimized content that positions your brand as an industry authority and drives organic traffic and conversions.
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
          <h3 className="text-xl font-semibold text-white mb-6">Content Types</h3>
          <div className="space-y-4">
            {[
              { title: "Blog Posts", desc: "SEO-optimized articles that drive organic traffic" },
              { title: "Case Studies", desc: "Showcase your success stories and results" },
              { title: "Email Campaigns", desc: "Nurture leads with targeted email sequences" },
              { title: "Video Content", desc: "Engaging videos for social and web platforms" },
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
