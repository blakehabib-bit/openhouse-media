"use client";

import { motion } from "framer-motion";

const credentials = [
  {
    value: "150+",
    label: "Agents partnered",
  },
  {
    value: "4+",
    label: "Years in real estate video",
  },
  {
    value: "2,000+",
    label: "Videos produced",
  },
  {
    value: "10M+",
    label: "Total views generated",
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
                OpenHouse Media was built from the ground up for one industry:
                real estate. We understand the pressure of winning appraisals,
                the importance of personal brand in a referral-driven business,
                and the reality that most agents simply don&apos;t have time to create
                content.
              </p>
              <p>
                Our team combines real estate marketing expertise with
                professional video production. We&apos;ve worked with agents from
                independent operators to franchise teams across New Zealand,
                helping them build the kind of online presence that turns
                followers into sellers.
              </p>
              <p>
                Every piece of content we create is designed with one goal:{" "}
                <span className="text-white font-semibold">
                  generating listing enquiries.
                </span>{" "}
                Not vanity metrics. Not viral moments. Real business results.
              </p>
            </div>
          </motion.div>

          {/* Right column — Credentials */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {credentials.map((cred, i) => (
                <motion.div
                  key={cred.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl bg-white/5 border border-white/10 p-6 text-center backdrop-blur-sm"
                >
                  <span className="block text-3xl font-heading font-bold text-amber">
                    {cred.value}
                  </span>
                  <span className="mt-1 block text-sm text-white/50">
                    {cred.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Trust elements */}
            <div className="mt-8 rounded-xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-amber/10 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4952A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white">
                    NZ-Based, NZ-Focused
                  </h4>
                  <p className="text-sm text-white/50 mt-1">
                    We&apos;re based right here in New Zealand. We understand the
                    local market, the agencies, and what Kiwi buyers and sellers
                    respond to.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
