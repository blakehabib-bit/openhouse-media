"use client";

import { motion } from "framer-motion";

const painPoints = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: "Invisible online",
    description:
      "Your competitors are building personal brands on Instagram and TikTok. You're relying on referrals and hoping the phone rings.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "No time to create content",
    description:
      "Between open homes, appraisals, and paperwork — who has time to plan, film, and edit videos every week?",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "DIY content looks amateur",
    description:
      "Shaky phone videos and poorly lit walkthroughs scream 'I don't invest in my brand' — and sellers notice.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Spending without strategy",
    description:
      "You've tried boosting posts or hiring a one-off videographer, but without a content strategy, it's money down the drain.",
  },
];

export default function PainSection() {
  return (
    <section id="problem" className="section-padding bg-cloud">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-amber">
            The Problem
          </span>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            The Market Has Changed.{" "}
            <span className="text-amber">Has Your Strategy?</span>
          </h2>
          <p className="mt-4 text-lg text-slate leading-relaxed">
            87% of home sellers say they want an agent with a strong online
            presence. If you&apos;re not showing up on video, you&apos;re not showing up
            at all.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {painPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group rounded-xl border border-navy/5 bg-white p-8 shadow-sm hover:shadow-md hover:border-amber/30 transition-all duration-300"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy/5 text-navy group-hover:bg-amber/10 group-hover:text-amber transition-colors">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{point.title}</h3>
              <p className="text-slate leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Transition statement */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 text-center text-xl font-semibold text-navy max-w-xl mx-auto"
        >
          You don&apos;t need another marketing gimmick.{" "}
          <span className="text-amber">
            You need a content partner who understands real estate.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
