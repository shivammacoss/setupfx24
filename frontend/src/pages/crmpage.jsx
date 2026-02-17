import PageLayout from "../components/PageLayout";
import { Database, CheckCircle } from "lucide-react";

export default function CRMBusinessSystemsPage() {
  const features = [
    "Custom CRM development & implementation",
    "ERP systems for business management",
    "Admin panels & back-office tools",
    "Client & partner portals",
    "Workflow automation & reporting",
    "Third-party integrations (payment, email, etc.)",
  ];

  return (
    <PageLayout
      title="CRM & Business Systems"
      subtitle="Custom CRM, ERP & admin panel development. We build centralized systems that streamline your operations and boost productivity."
    >
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
            <Database className="w-7 h-7 text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Centralized Business Management</h2>
          <p className="text-zinc-400 leading-relaxed mb-8">
            We design and develop custom CRM and business management systems that centralize your data, automate workflows, and provide actionable insights. Our solutions are tailored to fit your unique business processes.
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
          <h3 className="text-xl font-semibold text-white mb-6">System Features</h3>
          <div className="space-y-4">
            {[
              { title: "Contact Management", desc: "Organize and track all client interactions" },
              { title: "Sales Pipeline", desc: "Visual deal tracking and forecasting" },
              { title: "Task Automation", desc: "Automate repetitive business processes" },
              { title: "Analytics & Reports", desc: "Real-time dashboards and custom reports" },
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
