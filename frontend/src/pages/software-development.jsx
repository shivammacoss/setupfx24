import PageLayout from "../components/PageLayout";
import { Code2, CheckCircle } from "lucide-react";

export default function SoftwareDevelopmentPage() {
  const features = [
    "Custom software tailored to your business needs",
    "Scalable architecture for growing businesses",
    "Agile development methodology",
    "Full-stack development expertise",
    "API development & third-party integrations",
    "Ongoing maintenance & support",
  ];

  return (
    <PageLayout
      title="Software Development"
      subtitle="Custom software tailored to your business needs. We build robust, scalable applications that drive efficiency and growth."
    >
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
            <Code2 className="w-7 h-7 text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">End-to-End Software Solutions</h2>
          <p className="text-zinc-400 leading-relaxed mb-8">
            From concept to deployment, we deliver custom software solutions that solve real business problems. Our team of experienced developers uses the latest technologies to build applications that are fast, secure, and scalable.
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
          <h3 className="text-xl font-semibold text-white mb-6">Our Tech Stack</h3>
          <div className="grid grid-cols-2 gap-4">
            {["React / Next.js", "Node.js", "Python / Django", "TypeScript", "PostgreSQL", "MongoDB", "AWS / Azure", "Docker"].map((tech) => (
              <div key={tech} className="bg-zinc-800/50 rounded-lg px-4 py-3 text-sm text-zinc-300 border border-zinc-700/50">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
