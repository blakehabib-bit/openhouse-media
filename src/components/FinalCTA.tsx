"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section id="cta" className="section-padding bg-cloud">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-navy p-8 md:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative frames */}
          <div className="absolute top-4 left-4 w-32 h-18 border border-white/5 rounded-lg" />
          <div className="absolute bottom-4 right-4 w-40 h-[90px] border border-white/5 rounded-lg" />

          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl max-w-3xl mx-auto">
              Ready to{" "}
              <span className="text-amber">Own Your Suburb?</span>
            </h2>

            <p className="mt-6 text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Book a free 30-minute strategy call. We&apos;ll look at your current
              online presence, identify the biggest opportunities in your suburb,
              and show you exactly how consistent video content can make you the
              agent everyone knows.
            </p>

            {/* What you get */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/50">
              {[
                "Free content audit",
                "Custom suburb strategy",
                "No obligation",
                "30 minutes",
              ].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4952A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>

            {/* CTA button */}
            <div className="mt-10">
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-lg bg-amber px-10 py-5 text-xl font-bold text-white shadow-xl shadow-amber/25 hover:bg-amber-600 hover:shadow-amber/40 transition-all duration-300 hover:-translate-y-1"
              >
                Book Your Free Strategy Call
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <p className="mt-4 text-sm text-white/30">
              Prefer to chat? Email us at{" "}
              <a href="mailto:hello@openhousemedia.co.nz" className="text-amber hover:underline">
                hello@openhousemedia.co.nz
              </a>
            </p>

            {/* Guarantee */}
            <div className="mt-10 flex items-center justify-center gap-3 text-white/40 text-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4952A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
              100% satisfaction guarantee on all content packages
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
