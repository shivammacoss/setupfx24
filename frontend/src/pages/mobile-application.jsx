import PageLayout from "../components/PageLayout";
import { Smartphone, CheckCircle } from "lucide-react";

export default function MobileAppDevelopmentPage() {
  const features = [
    "Native iOS & Android development",
    "Cross-platform with React Native & Flutter",
    "UI/UX optimized for mobile experiences",
    "Push notifications & real-time features",
    "App Store & Play Store deployment",
    "Ongoing updates & maintenance",
  ];

  return (
    <PageLayout
      title="Mobile App Development"
      subtitle="Native & cross-platform mobile solutions. We build beautiful, high-performance mobile apps that users love."
    >
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
            <Smartphone className="w-7 h-7 text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Mobile-First Solutions</h2>
          <p className="text-zinc-400 leading-relaxed mb-8">
            We create mobile applications that deliver seamless experiences across all devices. Whether you need a native iOS app, an Android app, or a cross-platform solution, our team has the expertise to bring your vision to life.
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
          <h3 className="text-xl font-semibold text-white mb-6">Platforms We Support</h3>
          <div className="space-y-4">
            {[
              { title: "iOS (Swift)", desc: "Native iPhone & iPad applications" },
              { title: "Android (Kotlin)", desc: "Native Android phone & tablet apps" },
              { title: "React Native", desc: "Cross-platform apps from a single codebase" },
              { title: "Flutter", desc: "Beautiful, natively compiled applications" },
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
