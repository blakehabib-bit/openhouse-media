interface TrustBadge {
  text: string;
}

interface FinalCTAProps {
  headline: string;
  subheadline: string;
  description: string;
  formTitle: string;
  submitText: string;
  footnote: string;
  trustBadges?: TrustBadge[];
}

export default function FinalCTA({
  headline,
  subheadline,
  description,
  formTitle,
  submitText,
  footnote,
  trustBadges,
}: FinalCTAProps) {
  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">{headline}</h2>
          <p className="text-2xl mb-4 text-purple-200">{subheadline}</p>
          <p className="text-xl mb-12 text-purple-100">{description}</p>

          {/* Calendly Embed */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <iframe
              src="https://calendly.com/blakehabib98/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=7c3aed"
              width="100%"
              height="700"
              frameBorder="0"
              title="Book Your Free Area Audit"
            />
          </div>
          <p className="text-sm text-purple-300 mt-4">{footnote}</p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-purple-200">
            {(trustBadges || []).map((badge) => (
              <div key={badge.text} className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
