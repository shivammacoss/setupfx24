"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Smartphone, Database, Palette } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Software Development",
    description: "Custom software solutions built with modern technologies, tailored to solve your unique business challenges.",
  },
  {
    icon: Globe,
    title: "Web Application Development",
    description: "Scalable, responsive web applications using React, Next.js, and modern frameworks for optimal performance.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps for iOS and Android that deliver seamless user experiences.",
  },
  {
    icon: Database,
    title: "CRM & Business Systems",
    description: "Custom CRM, ERP, and admin panel development to streamline your operations and boost productivity.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    description: "User-centered design that converts visitors into customers with intuitive interfaces and beautiful aesthetics.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function SolutionOverview() {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-blue-400 font-medium">Our Services</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 tracking-tight text-white">
            Software Development Services
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-2xl mx-auto">
            From concept to deployment — we build custom applications that power your business forward.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="group relative rounded-xl border border-zinc-800 bg-zinc-900/50 p-7 hover:border-blue-500/30 hover:bg-zinc-900 transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5 group-hover:bg-blue-500/20 transition-colors">
                <item.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
              <div className="mt-5 text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                Learn more <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
