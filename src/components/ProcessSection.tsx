"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Strategy Call",
    description:
      "We learn your market, your strengths, and your goals. Together we build a content plan tailored to your suburb and target sellers.",
    detail: "30 minutes — free, no obligation",
  },
  {
    number: "02",
    title: "Production Day",
    description:
      "Our team comes to you. We film property showcases, agent profiles, and social content in one efficient session — minimal disruption to your day.",
    detail: "Half-day shoot, fully managed",
  },
  {
    number: "03",
    title: "Edit & Optimise",
    description:
      "We handle all post-production: colour grading, captions, music, and platform-specific formatting. Every piece is optimised for maximum reach.",
    detail: "48-hour turnaround on edits",
  },
  {
    number: "04",
    title: "Publish & Grow",
    description:
      "Content is delivered ready to post, with a scheduling calendar and caption copy. We track performance and refine the strategy monthly.",
    detail: "Ongoing support & reporting",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="section-padding bg-cloud">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-amber">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            From Zero Content to{" "}
            <span className="text-amber">Market Leader in 4 Steps</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-[39px] top-0 bottom-0 w-px bg-navy/10 hidden md:block" />

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="flex gap-6 md:gap-10 items-start"
              >
                {/* Step number */}
                <div className="relative z-10 flex-shrink-0 w-20 h-20 rounded-2xl bg-navy flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-heading font-bold text-amber">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 rounded-xl bg-white p-6 md:p-8 shadow-sm border border-navy/5">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-slate leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-amber">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {step.detail}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Guarantee badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 flex flex-col items-center text-center"
        >
          <div className="h-20 w-20 rounded-full bg-amber/10 flex items-center justify-center mb-4">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#D4952A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <polyline points="9 12 11 14 15 10" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">
            100% Satisfaction Guarantee
          </h3>
          <p className="text-slate max-w-md">
            If you&apos;re not completely satisfied with your first content package,
            we&apos;ll redo it at no extra cost. No questions asked.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
