"use client";

import { useState } from "react";

interface Step {
  title: string;
  description: string;
}

interface SuburbProps {
  title: string;
  description: string;
  steps: Step[];
  warningTitle: string;
  warningText: string;
  checkerTitle?: string;
  checkerPlaceholder?: string;
  checkerButtonText?: string;
  checkerFootnote?: string;
  popupTitle?: string;
  popupSubtitle?: string;
  popupNamePlaceholder?: string;
  popupEmailPlaceholder?: string;
  popupButtonText?: string;
  popupFootnote?: string;
}

export default function SuburbExclusivity({
  title,
  description,
  checkerPlaceholder,
  checkerButtonText,
  checkerFootnote,
  popupTitle,
  popupSubtitle,
  popupNamePlaceholder,
  popupEmailPlaceholder,
  popupButtonText,
  popupFootnote,
}: SuburbProps) {
  const [suburb, setSuburb] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function openModal() {
    if (suburb.trim()) setShowModal(true);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("/api/capture-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, suburb: suburb.trim() }),
      });
    } catch {
      // fire and forget
    }
    setShowModal(false);
    window.location.href = `/check-availability?suburb=${encodeURIComponent(suburb.trim())}`;
  }

  return (
    <section id="suburbs" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{title}</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">{description}</p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="text"
              value={suburb}
              onChange={(e) => setSuburb(e.target.value)}
              placeholder={checkerPlaceholder || "Enter your suburb"}
              className="flex-1 px-5 py-4 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none text-gray-900 text-base"
              onKeyDown={(e) => {
                if (e.key === "Enter") openModal();
              }}
            />
            <button
              type="button"
              onClick={openModal}
              disabled={!suburb.trim()}
              className={`px-8 py-4 rounded-lg font-semibold text-base transition whitespace-nowrap ${
                suburb.trim()
                  ? "bg-purple-600 text-white hover:bg-purple-700 cursor-pointer"
                  : "bg-purple-300 text-white cursor-not-allowed"
              }`}
            >
              {checkerButtonText || "Check Availability"}
            </button>
          </div>
          {checkerFootnote && (
            <p className="text-sm text-gray-500 mt-4">{checkerFootnote}</p>
          )}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl leading-none"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {popupTitle || "Check your suburb"}
            </h2>
            <p className="text-gray-500 mb-6 text-sm">
              {(popupSubtitle || "Enter your details and we'll confirm if {suburb} is available.").replace("{suburb}", suburb)}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                required
                placeholder={popupNamePlaceholder || "Your name"}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none text-gray-900"
              />
              <input
                type="email"
                required
                placeholder={popupEmailPlaceholder || "Your email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none text-gray-900"
              />
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-purple-700 transition disabled:opacity-60"
              >
                {submitting ? "One moment..." : popupButtonText || "Check My Suburb →"}
              </button>
            </form>

            <p className="text-xs text-gray-400 mt-4 text-center">
              {popupFootnote || "No spam. We'll only reach out if your suburb is available."}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
