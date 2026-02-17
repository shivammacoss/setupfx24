import PageLayout from "../components/PageLayout";
import { BookOpen } from "lucide-react";

export default function BlogPage() {
  const posts = [
    { title: "How Custom Software Can Transform Your Business", date: "Feb 5, 2026", category: "Software Development", excerpt: "Discover how tailored software solutions can streamline operations, reduce costs, and drive growth for businesses of all sizes." },
    { title: "SEO Trends to Watch in 2026", date: "Jan 28, 2026", category: "Digital Marketing", excerpt: "Stay ahead of the curve with the latest SEO strategies and algorithm updates that will shape search rankings this year." },
    { title: "Why Every Business Needs a CRM System", date: "Jan 20, 2026", category: "Business Solutions", excerpt: "Learn how a custom CRM can help you manage customer relationships, automate workflows, and boost sales efficiency." },
    { title: "Mobile App Development: Native vs Cross-Platform", date: "Jan 15, 2026", category: "Mobile Development", excerpt: "A comprehensive comparison to help you choose the right approach for your next mobile application project." },
    { title: "The Power of Data-Driven Marketing", date: "Jan 8, 2026", category: "Digital Marketing", excerpt: "How leveraging data analytics can help you make smarter marketing decisions and achieve better ROI." },
    { title: "Building Scalable Web Applications with Next.js", date: "Jan 2, 2026", category: "Web Development", excerpt: "Best practices for building high-performance, scalable web applications using modern frameworks." },
  ];

  return (
    <PageLayout title="Blog" subtitle="Insights, tips & industry trends. Stay updated with the latest in software development and digital marketing.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.title} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors group cursor-pointer">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-xs font-medium">{post.category}</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-blue-400 transition-colors">{post.title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>
            <span className="text-zinc-500 text-xs">{post.date}</span>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
