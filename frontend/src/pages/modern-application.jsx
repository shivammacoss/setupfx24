import PageLayout from "../components/PageLayout";
import { Globe, CheckCircle } from "lucide-react";

export default function WebApplicationDevelopmentPage() {
  const features = [
    "Responsive, mobile-first web applications",
    "Progressive Web Apps (PWA)",
    "Single Page Applications (SPA)",
    "E-commerce platforms & marketplaces",
    "Real-time dashboards & analytics",
    "Performance optimization & SEO-ready",
  ];

  return (
    <PageLayout
      title="Web Application Development"
      subtitle="Scalable, responsive web apps built with modern stacks. We create fast, reliable web applications that deliver exceptional user experiences."
    >
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
            <Globe className="w-7 h-7 text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Modern Web Applications</h2>
          <p className="text-zinc-400 leading-relaxed mb-8">
            We build high-performance web applications using cutting-edge frameworks and technologies. From simple landing pages to complex enterprise platforms, our solutions are designed to scale with your business.
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
          <h3 className="text-xl font-semibold text-white mb-6">What We Build</h3>
          <div className="space-y-4">
            {[
              { title: "SaaS Platforms", desc: "Multi-tenant cloud applications with subscription management" },
              { title: "E-Commerce", desc: "Custom online stores with payment integration" },
              { title: "Dashboards", desc: "Real-time data visualization and analytics" },
              { title: "Portals", desc: "Client & admin portals with role-based access" },
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
