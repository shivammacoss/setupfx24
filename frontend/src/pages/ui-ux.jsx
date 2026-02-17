import PageLayout from "../components/PageLayout";
import { Palette, CheckCircle } from "lucide-react";

export default function UIUXDesignPage() {
  const features = [
    "User research & persona development",
    "Wireframing & prototyping",
    "Visual design & branding",
    "Responsive & accessible design",
    "Design systems & component libraries",
    "Usability testing & iteration",
  ];

  return (
    <PageLayout
      title="UI / UX Design"
      subtitle="User-centered design that converts & delights. We create intuitive, beautiful interfaces that drive engagement and business results."
    >
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
            <Palette className="w-7 h-7 text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Design That Converts</h2>
          <p className="text-zinc-400 leading-relaxed mb-8">
            Great design is more than aesthetics — it is about creating experiences that guide users toward their goals. Our design team combines creativity with data-driven insights to deliver interfaces that are both beautiful and functional.
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
          <h3 className="text-xl font-semibold text-white mb-6">Our Design Process</h3>
          <div className="space-y-4">
            {[
              { title: "Discovery", desc: "Understand users, goals, and business requirements" },
              { title: "Wireframes", desc: "Low-fidelity layouts to map user flows" },
              { title: "Visual Design", desc: "High-fidelity mockups with brand consistency" },
              { title: "Prototyping", desc: "Interactive prototypes for testing & validation" },
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
