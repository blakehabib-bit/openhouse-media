"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Since working with OpenHouse Media, my listing presentations have transformed. Sellers see my video content and they're already sold on me before I walk through the door.",
    name: "Sarah Mitchell",
    role: "Senior Sales Consultant",
    company: "Harcourts, Auckland",
    metric: "42% increase in appraisal win rate",
  },
  {
    quote:
      "I was spending hours trying to film my own content and it looked terrible. OpenHouse took that off my plate completely — and the results speak for themselves.",
    name: "James Thornton",
    role: "Licensed Agent",
    company: "Ray White, Wellington",
    metric: "15K+ followers gained in 6 months",
  },
  {
    quote:
      "The ROI is undeniable. One video they produced generated three listing enquiries in the first week. That's more than I'd get from a month of letterbox drops.",
    name: "Aroha Williams",
    role: "Principal",
    company: "Williams Realty, Tauranga",
    metric: "$2.1M in listings from social content",
  },
  {
    quote:
      "What sets OpenHouse apart is they actually understand real estate. They know what sellers want to see and how to position agents as trusted advisors, not just salespeople.",
    name: "Daniel Kim",
    role: "Sales Manager",
    company: "Barfoot & Thompson, Auckland",
    metric: "3x team content output",
  },
];

const logos = [
  "Harcourts",
  "Ray White",
  "Barfoot & Thompson",
  "Bayleys",
  "LJ Hooker",
  "Century 21",
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-amber">
            Results That Speak
          </span>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Trusted by{" "}
            <span className="text-amber">150+ NZ Agents</span>
          </h2>
          <p className="mt-4 text-lg text-slate leading-relaxed">
            Don&apos;t take our word for it. Here&apos;s what agents across New Zealand
            are saying about working with us.
          </p>
        </motion.div>

        {/* Testimonial grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-xl border border-navy/5 bg-cloud p-8 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, si) => (
                  <svg key={si} width="18" height="18" viewBox="0 0 24 24" fill="#D4952A" stroke="#D4952A" strokeWidth="1">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-navy leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Metric badge */}
              <div className="mt-4 inline-flex self-start items-center gap-1.5 rounded-full bg-amber/10 px-3 py-1 text-sm font-semibold text-amber">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
                {t.metric}
              </div>

              {/* Author */}
              <div className="mt-5 flex items-center gap-3 border-t border-navy/5 pt-5">
                <div className="h-11 w-11 rounded-full bg-navy flex items-center justify-center text-white font-bold text-sm">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="font-bold text-navy text-sm">{t.name}</p>
                  <p className="text-slate text-xs">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logo bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 border-t border-navy/5 pt-12"
        >
          <p className="text-center text-sm text-slate/60 uppercase tracking-widest mb-8">
            Agents from leading agencies trust us
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {logos.map((logo) => (
              <span
                key={logo}
                className="text-lg font-heading font-bold text-navy/20 hover:text-navy/40 transition-colors"
              >
                {logo}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
