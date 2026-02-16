"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What does \"suburb exclusivity\" mean?",
    answer:
      "It means we only work with one agent per suburb. If you sign up for Fitzroy, no other agent in Fitzroy can use our service. Your content strategy stays yours alone.",
  },
  {
    question: "How much time do I need to commit?",
    answer:
      "Very little. We handle strategy, filming, editing, and delivery. You'll need to be available for filming sessions (typically a half-day per month) and post the content we deliver — or we can help with that too.",
  },
  {
    question: "What kind of videos do you create?",
    answer:
      "Short-form content optimised for Instagram Reels, TikTok, and Facebook — including property walkthroughs, talking-head market updates, suburb highlights, and agent brand content.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Social media is a long game — recognition builds over time. Most agents start noticing increased engagement and recognition within the first 4–8 weeks of consistent posting. The real compounding happens at 3–6 months.",
  },
  {
    question: "What if I already have a videographer?",
    answer:
      "A one-off videographer shoots your listings. We build your brand. We create the consistent, strategic content that makes sellers choose you before they even need to list — that's a completely different service.",
  },
  {
    question: "Do you only work in New Plymouth?",
    answer:
      "We're based in New Plymouth but work with agents across New Zealand. Production days can be arranged in your area.",
  },
  {
    question: "What if I want to cancel?",
    answer:
      "We don't lock you into long-term contracts. We believe in earning your business every month through results and service quality.",
  },
];

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="border-b border-navy/10 last:border-b-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left gap-4"
      >
        <span className="text-lg font-semibold text-navy">{question}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`flex-shrink-0 text-amber transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-slate leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-amber">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Common{" "}
            <span className="text-amber">Questions</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
