"use client";

import { motion } from "framer-motion";

const expectations = [
  {
    text: "Professional short-form video content delivered every week",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
  },
  {
    text: "A suburb-exclusive content strategy nobody else in your area gets",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    text: "A growing social media presence that positions you as the local expert",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    text: "More recognition from your community — online and offline",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    text: "Sellers reaching out to you because they've been watching your content",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72" />
      </svg>
    ),
  },
];

const valueProps = [
  {
    title: "Suburb Exclusivity",
    description:
      "We only work with one agent per suburb — your content strategy is never shared with a competitor.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Consistent Output",
    description:
      "We deliver content weekly so your audience sees you regularly, not just when you have a listing.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    title: "Real Estate Focused",
    description:
      "We don't do weddings, cafes, or corporate videos. 100% of our focus is real estate.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-narrow mx-auto">
        {/* What to Expect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-amber">
            What to Expect
          </span>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Built for{" "}
            <span className="text-amber">New Zealand Real Estate</span>
          </h2>
          <p className="mt-4 text-lg text-slate leading-relaxed">
            OpenHouse Media was designed from the ground up for NZ real estate
            agents. Our system is built on proven short-form video strategies
            adapted specifically for the local property market.
          </p>
        </motion.div>

        {/* Expectations list */}
        <div className="max-w-2xl mx-auto mb-20">
          {expectations.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex items-start gap-4 py-4 border-b border-navy/5 last:border-b-0"
            >
              <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-amber/10 text-amber flex items-center justify-center">
                {item.icon}
              </div>
              <p className="text-navy font-medium leading-relaxed pt-1.5">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Why Agents Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-extrabold sm:text-3xl">
            Why Agents Choose{" "}
            <span className="text-amber">OpenHouse Media</span>
          </h3>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {valueProps.map((prop, i) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-xl border border-navy/5 bg-cloud p-8 text-center"
            >
              <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-navy flex items-center justify-center text-amber">
                {prop.icon}
              </div>
              <h4 className="text-lg font-bold mb-2">{prop.title}</h4>
              <p className="text-slate text-sm leading-relaxed">
                {prop.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
