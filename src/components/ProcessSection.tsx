"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Strategy Call",
    description:
      "We learn about your suburb, your strengths, and your goals. Together we build a content plan designed to make you the go-to agent in your area.",
    detail: "30 minutes — free, no obligation",
  },
  {
    number: "02",
    title: "Production Day",
    description:
      "We come to you and film everything — property showcases, talking-head content, suburb tours, and agent profiles — in one efficient session.",
    detail: "Minimal disruption to your day",
  },
  {
    number: "03",
    title: "Edit & Deliver",
    description:
      "Our editing team handles post-production: colour grading, captions, music, and platform-specific formatting. Content is delivered ready to post.",
    detail: "Professional quality, every time",
  },
  {
    number: "04",
    title: "Publish & Grow",
    description:
      "You receive a content calendar with ready-to-post videos and captions. We keep the content flowing weekly so you build momentum and recognition.",
    detail: "Consistent weekly content",
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
            <span className="text-amber">Suburb Domination in 4 Steps</span>
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
      </div>
    </section>
  );
}
