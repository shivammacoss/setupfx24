import PageLayout from "../components/PageLayout";
import { CheckCircle } from "lucide-react";

export default function PricingPage() {
  const digitalMarketingPlans = [
    {
      name: "Starter", price: "$2,499", period: "starting from",
      desc: "Perfect for startups and small businesses getting started with digital.",
      features: ["Custom website or landing page", "Basic SEO setup", "Mobile responsive design", "Contact form integration", "3 months support", "1 revision round"],
      cta: "Get Started", highlighted: false,
    },
    {
      name: "Growth", price: "$7,999", period: "starting from",
      desc: "For growing businesses that need custom applications and marketing.",
      features: ["Custom web or mobile application", "Full SEO & content strategy", "CRM or admin panel", "Third-party integrations", "6 months support", "Unlimited revisions", "Dedicated project manager"],
      cta: "Get Started", highlighted: true,
    },
    {
      name: "Enterprise", price: "Custom", period: "tailored pricing",
      desc: "For large organizations with complex requirements and scale needs.",
      features: ["Enterprise-grade applications", "Full digital marketing suite", "Custom integrations & APIs", "Multi-platform deployment", "24/7 dedicated support", "SLA guarantee", "Dedicated development team", "Priority feature requests"],
      cta: "Contact Us", highlighted: false,
    },
  ];

  const brokeragePlans = [
    {
      name: "Managed System", price: "\u20B910,00,000", period: "One-Time", subPrice: "\u20B925,000 / Month Maintenance",
      desc: "Perfect for managed growth",
      features: ["IB System", "Prop Trading Module", "Copy Trading", "Bot + Human Support System", "Company Incorporation (UK, USA, Canada Included)", "Mobile & Web Trading Terminals", "Managed System (No Source Code Access)", "Ongoing Updates & Support"],
      cta: "Get Started", highlighted: false,
    },
    {
      name: "Premium Plan", price: "\u20B925,00,000", period: "One-Time Payment", subPrice: "(With Source Code)",
      desc: "Complete control and ownership",
      features: ["IB System", "Prop Trading Module", "Copy Trading", "Bot + Human Support System", "Company Incorporation (UK, USA, Canada Included)", "Mobile & Web Trading Terminals", "Full Source Code Access", "Lifetime Ownership"],
      cta: "Get Started", highlighted: true,
    },
  ];

  return (
    <PageLayout title="Pricing" subtitle="Transparent pricing for every stage of your business. Choose the plan that fits your needs.">
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-white mb-2">Digital Marketing Pricing</h2>
        <p className="text-zinc-400 text-sm mb-8">Comprehensive digital marketing packages for businesses of all sizes.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {digitalMarketingPlans.map((plan) => (
            <div key={plan.name} className={`rounded-2xl p-8 border transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/40 ${plan.highlighted ? "bg-blue-600/10 border-blue-500/30 ring-1 ring-blue-500/20" : "bg-zinc-900/50 border-zinc-800"}`}>
              {plan.highlighted && <div className="text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">Most Popular</div>}
              <h3 className="text-white text-2xl font-bold">{plan.name}</h3>
              <div className="mt-4 mb-2"><span className="text-4xl font-bold text-white">{plan.price}</span></div>
              <p className="text-zinc-500 text-xs mb-6">{plan.period}</p>
              <p className="text-zinc-400 text-sm mb-8">{plan.desc}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="/#contact" className={`block text-center py-3 rounded-lg font-semibold text-sm transition-all ${plan.highlighted ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25" : "border border-zinc-700 hover:border-zinc-500 text-white hover:bg-white/5"}`}>{plan.cta}</a>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-white mb-2">Brokerage Platform Pricing</h2>
        <p className="text-zinc-400 text-sm mb-8">Complete brokerage solutions with trading platforms, IB systems, and more.</p>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {brokeragePlans.map((plan) => (
            <div key={plan.name} className={`rounded-2xl p-8 border transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/40 ${plan.highlighted ? "bg-blue-600/10 border-blue-500/30 ring-1 ring-blue-500/20" : "bg-zinc-900/50 border-zinc-800"}`}>
              <div className="text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">{plan.name}</div>
              <div className="mt-2 mb-1">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-zinc-400 text-sm ml-2">{plan.period}</span>
              </div>
              <p className="text-blue-400/80 text-sm mb-6">{plan.subPrice}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300 text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="/#contact" className="block text-center py-3 rounded-lg font-semibold text-sm transition-all bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25">{plan.cta}</a>
              <p className="text-zinc-500 text-xs text-center mt-3">{plan.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
