"use client";

import { ReactNode, useState } from "react";

interface LeadCapturePopupProps {
  buttonClassName?: string;
  buttonContent: ReactNode;
  popupTitle?: string;
  popupSubtitle?: string;
  popupNamePlaceholder?: string;
  popupEmailPlaceholder?: string;
  popupSuburbPlaceholder?: string;
  popupButtonText?: string;
  popupFootnote?: string;
}

export default function LeadCapturePopup({
  buttonClassName,
  buttonContent,
  popupTitle,
  popupSubtitle,
  popupNamePlaceholder,
  popupEmailPlaceholder,
  popupSuburbPlaceholder,
  popupButtonText,
  popupFootnote,
}: LeadCapturePopupProps) {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [suburb, setSuburb] = useState("");
  const [submitting, setSubmitting] = useState(false);

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
      // fire and forget — don't block the user
    }
    const qs = suburb.trim() ? `?suburb=${encodeURIComponent(suburb.trim())}` : "";
    window.location.href = `/check-availability${qs}`;
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className={buttonClassName}
      >
        {buttonContent}
      </button>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center bg-black/60 backdrop-blur-sm px-4 py-8 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md relative my-auto">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl leading-none"
              aria-label="Close"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {popupTitle || "Check your suburb availability"}
            </h2>
            <p className="text-gray-500 mb-6 text-sm">
              {popupSubtitle ||
                "Enter your details and we'll show you what's happening in your area."}
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
              <input
                type="text"
                required
                placeholder={popupSuburbPlaceholder || "Your suburb"}
                value={suburb}
                onChange={(e) => setSuburb(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none text-gray-900"
              />
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-purple-700 transition disabled:opacity-60"
              >
                {submitting
                  ? "One moment..."
                  : popupButtonText || "Check My Suburb →"}
              </button>
            </form>

            <p className="text-xs text-gray-400 mt-4 text-center">
              {popupFootnote ||
                "No spam. We'll only reach out if your suburb is a fit."}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
