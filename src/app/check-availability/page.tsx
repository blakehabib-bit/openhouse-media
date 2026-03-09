"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

interface AuditItem {
  title: string;
  description: string;
}

interface CheckAvailabilityData {
  headline: string;
  subtitle: string;
  scarcityWarning: string;
  stats: { value: string; label: string }[];
  bookingTitle: string;
  bookingSubtitle: string;
  auditTitle: string;
  auditIntro: string;
  auditItems: AuditItem[];
  auditFootnote: string;
  footnote: string;
}

function CheckAvailabilityContent() {
  const searchParams = useSearchParams();
  const suburb = searchParams.get("suburb") || "your area";
  const [data, setData] = useState<CheckAvailabilityData | null>(null);

  useEffect(() => {
    fetch("/api/check-availability-data")
      .then((r) => r.json())
      .then(setData)
      .catch(() => {});
  }, []);

  // Defaults while loading or if fetch fails
  const d: CheckAvailabilityData = data || {
    headline: "Good News — {suburb} Is Still Open",
    subtitle: "No other agent has claimed exclusive content rights for this area yet.",
    scarcityWarning: "We're currently speaking with 2-3 agents per week. Once an agent in your area locks in, it's gone for a minimum of 12 months. We cannot guarantee this area will still be available tomorrow.",
    stats: [
      { value: "1", label: "Agent per area" },
      { value: "12 mo", label: "Minimum lock-in" },
      { value: "Free", label: "15-min audit call" },
    ],
    bookingTitle: "Lock In Your Area Now",
    bookingSubtitle: "Book your free 15-minute area audit before another agent claims it.",
    auditTitle: "Your Free Suburb Audit",
    auditIntro: "Before you commit to anything, we show you exactly what's happening in your market, for free.\n\nIn a 15-minute call with Blake, you'll walk away with:",
    auditItems: [
      { title: "Your Competitor Snapshot", description: "We audit the top 5 agents in your suburb and show you exactly what content they're posting (or not posting). Most agents are shocked by how weak their competition actually is online." },
      { title: "Your Visibility Score", description: "We assess your current online presence across Instagram, Facebook, TikTok, and LinkedIn and score it against the local benchmark. You'll see exactly where you rank and where the gaps are." },
      { title: "Your Opportunity Map", description: "Based on your suburb's demographics, property volume, and competitor activity, we'll show you the specific content angles that would give you the fastest path to local dominance." },
    ],
    auditFootnote: "No pitch. No pressure. If your suburb isn't a fit for the exclusivity model, we'll tell you straight up.",
    footnote: "✓ Free 15-min call · ✓ No obligation · ✓ Instant area availability check",
  };

  const headlineText = d.headline.replace("{suburb}", suburb);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-purple-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Logo / Brand */}
          <div className="text-center">
            <a href="/" className="inline-block mb-12 text-2xl font-bold tracking-tight">
              The Digital Door Knock
            </a>
          </div>

          {/* Availability Confirmation */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8 border border-white/20 text-center">
            <div className="inline-flex items-center bg-green-500/20 border border-green-400/40 rounded-full px-4 py-2 mb-6">
              <span className="w-2.5 h-2.5 bg-green-400 rounded-full mr-2 animate-pulse" />
              <span className="text-green-300 font-semibold text-sm">Area Available</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {headlineText.split(suburb).map((part, i, arr) =>
                i < arr.length - 1 ? (
                  <span key={i}>{part}<span className="text-purple-300 capitalize">{suburb}</span></span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </h1>

            <p className="text-xl text-purple-200 mb-6">{d.subtitle}</p>

            <div className="bg-amber-500/15 border border-amber-400/30 rounded-xl p-5 mb-6">
              <div className="flex items-start justify-center">
                <svg className="w-5 h-5 text-amber-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <p className="text-amber-200 text-sm text-left">
                  <strong>{d.scarcityWarning}</strong>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {d.stats.map((stat) => (
                <div key={stat.label} className="bg-white/5 rounded-xl p-4">
                  <div className="text-2xl font-bold text-purple-300">{stat.value}</div>
                  <div className="text-sm text-purple-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Section */}
          <div className="mb-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{d.bookingTitle}</h2>
              <p className="text-purple-200">{d.bookingSubtitle}</p>
            </div>

            {/* Audit Value Props */}
            <div className="bg-white rounded-2xl p-8 md:p-10 mb-8 text-gray-900">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{d.auditTitle}</h3>
              <div className="text-gray-600 mb-8 whitespace-pre-line">{d.auditIntro}</div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {d.auditItems.map((item, i) => (
                  <div key={item.title} className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
                    <h4 className="font-bold text-lg mb-2">
                      <span className="text-purple-600">{i + 1}.</span> {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>

              <p className="text-gray-500 text-sm italic">{d.auditFootnote}</p>
            </div>

            {/* Calendly */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <iframe
                src="https://calendly.com/blakehabib98/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=7c3aed"
                width="100%"
                height="700"
                frameBorder="0"
                title="Book Your Free Area Audit"
              />
            </div>
            <p className="text-sm text-purple-300 mt-4 text-center">{d.footnote}</p>
          </div>

          {/* Back link */}
          <div className="text-center">
            <a href="/" className="text-purple-300 hover:text-white text-sm transition">
              ← Back to The Digital Door Knock
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CheckAvailabilityPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-purple-800 flex items-center justify-center">
        <div className="text-white text-xl">Checking availability...</div>
      </div>
    }>
      <CheckAvailabilityContent />
    </Suspense>
  );
}
