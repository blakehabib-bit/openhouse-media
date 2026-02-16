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
  trustBadges: TrustBadge[];
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

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-left">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">{formTitle}</h3>

            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Primary Suburb *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Ponsonby, Auckland"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">How many deals did you close last year? *</label>
                <select
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                >
                  <option value="">Select...</option>
                  <option value="0-5">0-5 deals</option>
                  <option value="6-10">6-10 deals</option>
                  <option value="11-20">11-20 deals</option>
                  <option value="20+">20+ deals</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Current Agency</label>
                <input
                  type="text"
                  placeholder="e.g., Harcourts, Ray White, Independent"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white px-8 py-5 rounded-lg font-bold text-lg hover:bg-purple-700 transition shadow-lg"
              >
                {submitText}
              </button>

              <p className="text-sm text-gray-600 text-center">{footnote}</p>
            </form>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-purple-200">
            {trustBadges.map((badge) => (
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
