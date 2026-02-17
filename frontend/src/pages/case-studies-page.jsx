import PageLayout from "../components/PageLayout";
import { FolderKanban, ArrowUpRight } from "lucide-react";

export default function CaseStudiesPage() {
  const caseStudies = [
    { title: "E-Commerce Platform for Fashion Brand", industry: "Retail", result: "150% increase in online sales", desc: "Built a custom e-commerce platform with AI-powered recommendations, resulting in significant revenue growth.", tech: ["Next.js", "Node.js", "PostgreSQL"] },
    { title: "CRM System for Real Estate Agency", industry: "Real Estate", result: "40% faster deal closures", desc: "Developed a custom CRM that streamlined lead management and automated follow-ups for a growing agency.", tech: ["React", "Python", "MongoDB"] },
    { title: "Mobile App for Fitness Startup", industry: "Health & Fitness", result: "50K+ downloads in 3 months", desc: "Created a cross-platform fitness app with workout tracking, social features, and subscription management.", tech: ["React Native", "Firebase", "Stripe"] },
    { title: "SEO Campaign for SaaS Company", industry: "Technology", result: "300% organic traffic growth", desc: "Implemented a comprehensive SEO strategy that tripled organic traffic and doubled lead generation.", tech: ["SEO", "Content Marketing", "Analytics"] },
    { title: "Admin Dashboard for Logistics Company", industry: "Logistics", result: "60% reduction in manual work", desc: "Built a real-time dashboard for fleet management, route optimization, and automated reporting.", tech: ["React", "Node.js", "AWS"] },
    { title: "Social Media Campaign for Restaurant Chain", industry: "Food & Beverage", result: "200% engagement increase", desc: "Managed social media presence across platforms, creating viral content that drove foot traffic.", tech: ["Social Media", "Paid Ads", "Content"] },
  ];

  return (
    <PageLayout title="Case Studies" subtitle="Real results from real clients. See how we have helped businesses achieve their goals through technology and marketing.">
      <div className="grid md:grid-cols-2 gap-6">
        {caseStudies.map((study) => (
          <div key={study.title} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors group cursor-pointer">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <FolderKanban className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 text-xs font-medium">{study.industry}</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-blue-400 transition-colors" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">{study.title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">{study.desc}</p>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg px-4 py-2 mb-4">
              <span className="text-blue-400 text-sm font-semibold">{study.result}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {study.tech.map((t) => (
                <span key={t} className="bg-zinc-800/50 text-zinc-400 text-xs px-2.5 py-1 rounded-md border border-zinc-700/50">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
