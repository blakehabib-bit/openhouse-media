"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    title: "Property Showcase Videos",
    description:
      "Cinematic walkthrough videos that make every listing look like a premium property — and make you look like the agent who gets results.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
        <line x1="7" y1="2" x2="7" y2="22" />
        <line x1="17" y1="2" x2="17" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="2" y1="7" x2="7" y2="7" />
        <line x1="2" y1="17" x2="7" y2="17" />
        <line x1="17" y1="7" x2="22" y2="7" />
        <line x1="17" y1="17" x2="22" y2="17" />
      </svg>
    ),
  },
  {
    title: "Social Media Content",
    description:
      "Weekly scroll-stopping reels, stories, and posts designed for Instagram, TikTok, and Facebook — so you stay top of mind without lifting a finger.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Personal Brand Strategy",
    description:
      "A tailored content plan that positions you as the authority in your suburb — not just another agent competing on commission.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20l9-5-9-5-9 5 9 5z" />
        <path d="M12 12l9-5-9-5-9 5 9 5z" />
      </svg>
    ),
  },
  {
    title: "Agent Profile Videos",
    description:
      "Authentic, professionally produced introduction videos that build trust with sellers before the first meeting. Let them see who you are.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: "Content Editing & Post-Production",
    description:
      "Raw footage collecting dust on your phone? We transform it into polished, branded content with captions, music, and professional colour grading.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "Results Tracking & Optimisation",
    description:
      "Monthly performance reports showing views, engagement, and enquiry attribution — so you know exactly what your content investment is delivering.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="section-padding bg-white">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-amber">
            What We Do
          </span>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Everything You Need to{" "}
            <span className="text-amber">Dominate Your Market Online</span>
          </h2>
          <p className="mt-4 text-lg text-slate leading-relaxed">
            We handle the entire video content lifecycle — from strategy and
            production to editing and distribution — so you can focus on what you
            do best: selling property.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative rounded-xl border border-navy/5 bg-cloud p-8 hover:border-amber/30 hover:shadow-lg transition-all duration-300"
            >
              {/* 16:9 frame accent */}
              <div className="absolute top-3 right-3 w-16 h-9 border border-navy/5 rounded opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-white group-hover:bg-amber transition-colors">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
              <p className="text-slate text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Value anchor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 rounded-2xl bg-navy p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            All of this would cost you <span className="line-through text-white/40">$5,000+/month</span> hiring separately
          </h3>
          <p className="mt-3 text-white/60 text-lg">
            Our packages start from a fraction of that — and we handle everything.
          </p>
          <a
            href="#cta"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-amber px-6 py-3 font-bold text-white hover:bg-amber-600 transition-colors shadow-lg shadow-amber/20"
          >
            See How It Works
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
