"use client";

import { motion } from "framer-motion";

const valueProps = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4952A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "NZ-Based & NZ-Focused",
    description:
      "We're based in New Plymouth and work with agents across New Zealand. We understand the local market and what Kiwi sellers respond to.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4952A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "100% Real Estate Focused",
    description:
      "We don't spread ourselves across industries. Every piece of content we create is designed for the property market.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4952A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: "One Agent Per Suburb — Guaranteed",
    description:
      "Your content strategy stays yours alone. We never work with competing agents in the same suburb.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-navy relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-10 right-10 w-[300px] h-[169px] border border-white/5 rounded-lg" />
      <div className="absolute bottom-10 left-10 w-[250px] h-[141px] border border-white/5 rounded-lg" />

      <div className="container-narrow mx-auto relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left column — Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-amber">
              About OpenHouse Media
            </span>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              We&apos;re Not a Video Agency.{" "}
              <span className="text-amber">
                We&apos;re Your Content Department.
              </span>
            </h2>
            <div className="mt-6 space-y-4 text-white/70 leading-relaxed">
              <p>
                OpenHouse Media was built for one purpose: helping real estate
                agents become the most recognised name in their suburb through
                consistent short-form video content.
              </p>
              <p>
                We understand the pressure of winning appraisals, the importance
                of personal brand, and the reality that most agents don&apos;t have
                time to create content — let alone do it consistently.
              </p>
              <p>
                We combine real estate marketing knowledge with professional
                video production. Every piece of content we create is designed
                with one goal:{" "}
                <span className="text-white font-semibold">
                  making you the agent sellers already know and trust before you
                  walk through the door.
                </span>
              </p>
              <p>
                We&apos;re based in New Plymouth and work with agents across
                New Zealand.
              </p>
            </div>
          </motion.div>

          {/* Right column — Value props */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {valueProps.map((prop, i) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-amber/10 flex items-center justify-center">
                    {prop.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{prop.title}</h4>
                    <p className="text-sm text-white/50 mt-1">
                      {prop.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
