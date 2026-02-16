"use client";

import { motion } from "framer-motion";

const guarantees = [
  {
    title: "Suburb Exclusivity Guarantee",
    description:
      "We will only ever work with one agent per suburb. Your content strategy, your market insights, and your positioning are never shared with a competitor. Ever.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4952A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Consistency Guarantee",
    description:
      "We deliver content every single week. No gaps, no excuses. Consistency is what builds recognition, and we treat it as non-negotiable.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4952A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <polyline points="9 14 11 16 15 12" />
      </svg>
    ),
  },
  {
    title: "Satisfaction Guarantee",
    description:
      "If you're not happy with your first content package, we'll redo it at no extra cost. No questions asked.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4952A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

export default function GuaranteesSection() {
  return (
    <section id="guarantees" className="section-padding bg-cloud">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-amber">
            Our Commitment
          </span>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Our Commitment{" "}
            <span className="text-amber">to You</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {guarantees.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-xl bg-white border border-navy/5 p-8 text-center shadow-sm"
            >
              <div className="mx-auto mb-5 h-16 w-16 rounded-full bg-amber/10 flex items-center justify-center">
                {g.icon}
              </div>
              <h3 className="text-lg font-bold mb-3">{g.title}</h3>
              <p className="text-slate text-sm leading-relaxed">
                {g.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
