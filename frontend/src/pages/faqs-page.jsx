import { useState } from "react";
import PageLayout from "../components/PageLayout";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What services does SetupFX24 offer?", a: "We offer custom software development, web & mobile app development, CRM & business systems, UI/UX design, and comprehensive digital marketing services including SEO, paid advertising, social media marketing, and content marketing." },
  { q: "How long does a typical project take?", a: "Project timelines vary based on complexity. A simple website takes 2-4 weeks, a web application 6-12 weeks, and a mobile app 8-16 weeks. We provide detailed timelines during the discovery phase." },
  { q: "What is your pricing model?", a: "We offer flexible pricing models including fixed-price projects, hourly rates, and dedicated team arrangements. We provide transparent quotes after understanding your requirements." },
  { q: "Do you provide ongoing support after launch?", a: "Yes, we offer ongoing maintenance and support packages to ensure your application stays updated, secure, and performing optimally. We also provide 24/7 emergency support for critical issues." },
  { q: "What technologies do you work with?", a: "We work with modern technologies including React, Next.js, Node.js, Python, React Native, Flutter, PostgreSQL, MongoDB, AWS, Azure, and more. We choose the best stack for each project." },
  { q: "Can you work with our existing team?", a: "Absolutely. We offer team augmentation services where our developers integrate seamlessly with your existing team, following your processes and workflows." },
  { q: "Do you sign NDAs?", a: "Yes, we take confidentiality seriously. We are happy to sign NDAs before discussing any project details to protect your intellectual property." },
  { q: "How do you handle project communication?", a: "We use tools like Slack, Jira, and regular video calls to maintain transparent communication. You will have a dedicated project manager as your single point of contact." },
];

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <PageLayout title="Frequently Asked Questions" subtitle="Answers to common questions about our services, process, and pricing.">
      <div className="max-w-3xl">
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between px-6 py-4 text-left">
                <span className="text-white font-medium text-sm pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-zinc-400 flex-shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4">
                  <p className="text-zinc-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
