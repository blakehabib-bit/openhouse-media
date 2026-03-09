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
}

export default function SuburbExclusivity({
  title,
  description,
  steps,
  warningTitle,
  warningText,
  checkerTitle,
  checkerPlaceholder,
  checkerButtonText,
  checkerFootnote,
}: SuburbProps) {
  const [suburb, setSuburb] = useState("");
  return (
    <section id="suburbs" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{description}</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">How Area Exclusivity Works:</h3>
                <div className="space-y-4">
                  {steps.map((step, i) => (
                    <div key={i} className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                        {i + 1}
                      </div>
                      <div>
                        <div className="font-semibold mb-1">{step.title}</div>
                        <div className="text-gray-600">{step.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">{checkerTitle || "Is Your Area Still Available?"}</h3>
                <div className="flex flex-col sm:flex-row gap-3 mb-3">
                  <input
                    type="text"
                    value={suburb}
                    onChange={(e) => setSuburb(e.target.value)}
                    placeholder={checkerPlaceholder || "Enter your area"}
                    className="flex-1 px-4 py-4 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none text-gray-900 text-lg"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && suburb.trim()) {
                        window.open(`/check-availability?suburb=${encodeURIComponent(suburb.trim())}`, "_blank");
                      }
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (suburb.trim()) {
                        window.open(`/check-availability?suburb=${encodeURIComponent(suburb.trim())}`, "_blank");
                      }
                    }}
                    disabled={!suburb.trim()}
                    className={`px-8 py-4 rounded-lg font-semibold text-center text-lg transition whitespace-nowrap ${
                      suburb.trim()
                        ? "bg-purple-600 text-white hover:bg-purple-700 cursor-pointer"
                        : "bg-purple-300 text-white cursor-not-allowed"
                    }`}
                  >
                    {checkerButtonText || "Check Availability"}
                  </button>
                </div>
                <p className="text-sm text-gray-500">
                  {checkerFootnote || "We only work with one agent per area. Check if yours is still open."}
                </p>
              </div>
            </div>
          </div>

          {/* Scarcity Warning */}
          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6">
            <div className="flex">
              <svg className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <div className="font-semibold text-amber-900 mb-1">{warningTitle}</div>
                <div className="text-amber-800">{warningText}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
