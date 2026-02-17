import PageLayout from "../components/PageLayout";
import { Search, CheckCircle } from "lucide-react";

export default function SEOPage() {
  const features = [
    "Technical SEO audits & optimization",
    "Keyword research & content strategy",
    "On-page & off-page SEO",
    "Local SEO & Google Business Profile",
    "Link building & authority development",
    "Monthly reporting & rank tracking",
  ];

  return (
    <PageLayout
      title="Search Engine Optimization"
      subtitle="Rank higher and drive organic traffic. We implement proven SEO strategies that improve your visibility and bring qualified leads."
    >
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
            <Search className="w-7 h-7 text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Dominate Search Results</h2>
          <p className="text-zinc-400 leading-relaxed mb-8">
            Our SEO experts use white-hat techniques and data-driven approaches to improve your search engine rankings. We focus on sustainable, long-term results that drive consistent organic traffic to your website.
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
          <h3 className="text-xl font-semibold text-white mb-6">SEO Services</h3>
          <div className="space-y-4">
            {[
              { title: "Technical SEO", desc: "Site speed, crawlability, and indexing optimization" },
              { title: "Content SEO", desc: "Keyword-optimized content that ranks and converts" },
              { title: "Local SEO", desc: "Dominate local search results in your area" },
              { title: "Link Building", desc: "High-quality backlinks from authoritative sources" },
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
