"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-600 to-navy-700" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Video frame decorative element */}
      <div className="absolute top-20 right-0 w-[500px] h-[280px] border border-amber/20 rounded-lg opacity-20 hidden lg:block" />
      <div className="absolute bottom-32 left-0 w-[400px] h-[225px] border border-amber/10 rounded-lg opacity-10 hidden lg:block" />

      <div className="container-narrow relative z-10 mx-auto px-5 pt-28 pb-20 md:px-8">
        <div className="max-w-3xl">
          {/* Exclusivity badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-amber/15 px-4 py-1.5 text-sm font-medium text-amber border border-amber/30">
              <span className="h-2 w-2 rounded-full bg-amber animate-pulse" />
              Exclusive to one agent per suburb
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Become the Most Recognised Agent{" "}
            <span className="text-amber">in Your Suburb</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl max-w-2xl"
          >
            We produce consistent short-form video content that makes you the
            agent everyone knows — so when sellers are ready to list, you&apos;re
            the only name they think of. Exclusive to one agent per suburb.
          </motion.p>

          {/* Value props row */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-8"
          >
            {[
              { label: "Suburb Exclusivity", desc: "You're the only agent we work with in your area" },
              { label: "Done-For-You Content", desc: "We handle everything from filming to posting" },
              { label: "Consistent Weekly Output", desc: "Show up on social every single week" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <svg className="mt-0.5 flex-shrink-0 text-amber" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <div>
                  <span className="block text-sm font-semibold text-white">
                    {item.label}
                  </span>
                  <span className="block text-xs text-white/50">
                    {item.desc}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center"
          >
            <a
              href="#cta"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber px-8 py-4 text-lg font-bold text-white shadow-xl shadow-amber/25 hover:bg-amber-600 hover:shadow-amber/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              Book Your Free Strategy Call
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <span className="text-sm text-white/40">
              Free 30-min call &middot; No obligation
            </span>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cloud to-transparent" />
    </section>
  );
}
