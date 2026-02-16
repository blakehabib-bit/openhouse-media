"use client";

import { motion } from "framer-motion";
import CountdownTimer from "./CountdownTimer";

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
          {/* Urgency badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-amber/15 px-4 py-1.5 text-sm font-medium text-amber border border-amber/30">
              <span className="h-2 w-2 rounded-full bg-amber animate-pulse" />
              Limited spots available this month
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
            Stop Losing Listings to Agents{" "}
            <span className="text-amber">Who Show Up on Video</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl max-w-2xl"
          >
            We produce scroll-stopping property videos and social content that
            position you as the go-to agent in your market — so sellers choose you
            before they even pick up the phone.
          </motion.p>

          {/* Stats row */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-wrap gap-8"
          >
            {[
              { value: "3.2x", label: "More listing enquiries" },
              { value: "150+", label: "Agents partnered" },
              { value: "10M+", label: "Views generated" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl font-heading font-bold text-amber">
                  {stat.value}
                </span>
                <span className="text-sm text-white/50">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA + Countdown */}
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

          {/* Countdown */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-10"
          >
            <p className="mb-3 text-sm font-medium text-white/50 uppercase tracking-wider">
              Offer ends in
            </p>
            <CountdownTimer />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cloud to-transparent" />
    </section>
  );
}
