"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function CheckAvailabilityContent() {
  const searchParams = useSearchParams();
  const suburb = searchParams.get("suburb") || "your area";

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-purple-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto text-center">
          {/* Logo / Brand */}
          <a href="/" className="inline-block mb-12 text-2xl font-bold tracking-tight">
            The Digital Door Knock
          </a>

          {/* Availability Confirmation */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8 border border-white/20">
            <div className="inline-flex items-center bg-green-500/20 border border-green-400/40 rounded-full px-4 py-2 mb-6">
              <span className="w-2.5 h-2.5 bg-green-400 rounded-full mr-2 animate-pulse" />
              <span className="text-green-300 font-semibold text-sm">Area Available</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Good News — <span className="text-purple-300 capitalize">{suburb}</span> Is Still Open
            </h1>

            <p className="text-xl text-purple-200 mb-6">
              No other agent has claimed exclusive content rights for this area yet.
            </p>

            <div className="bg-amber-500/15 border border-amber-400/30 rounded-xl p-5 mb-6">
              <div className="flex items-start justify-center">
                <svg className="w-5 h-5 text-amber-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <p className="text-amber-200 text-sm text-left">
                  <strong>We&apos;re currently speaking with 2-3 agents per week.</strong> Once an agent in your area locks in,
                  it&apos;s gone for a minimum of 12 months. We cannot guarantee this area will still be available tomorrow.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-2">
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-2xl font-bold text-purple-300">1</div>
                <div className="text-sm text-purple-200">Agent per area</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-2xl font-bold text-purple-300">12 mo</div>
                <div className="text-sm text-purple-200">Minimum lock-in</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-2xl font-bold text-purple-300">Free</div>
                <div className="text-sm text-purple-200">15-min audit call</div>
              </div>
            </div>
          </div>

          {/* Calendly Booking */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Lock In Your Area Now</h2>
            <p className="text-purple-200 mb-6">
              Book your free 15-minute area audit before another agent claims it.
            </p>

            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <iframe
                src="https://calendly.com/blakehabib98/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=7c3aed"
                width="100%"
                height="700"
                frameBorder="0"
                title="Book Your Free Area Audit"
              />
            </div>
            <p className="text-sm text-purple-300 mt-4">
              ✓ Free 15-min call · ✓ No obligation · ✓ Instant area availability check
            </p>
          </div>

          {/* Back link */}
          <a href="/" className="text-purple-300 hover:text-white text-sm transition">
            ← Back to The Digital Door Knock
          </a>
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
