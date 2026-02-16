interface ListItem {
  text: string;
}

interface GuaranteeProps {
  badge: string;
  title: string;
  subtitle: string;
  promiseIntro: string;
  promiseSteps: ListItem[];
  attributionTitle: string;
  attributionText: string;
  attributionNote: string;
  whyTitle: string;
  whyText: string;
}

export default function GuaranteeSection({
  badge,
  title,
  subtitle,
  promiseIntro,
  promiseSteps,
  attributionTitle,
  attributionText,
  attributionNote,
  whyTitle,
  whyText,
}: GuaranteeProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-block bg-purple-100 rounded-full px-6 py-2 mb-4">
                <span className="text-purple-800 font-bold">{badge}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
              <p className="text-xl text-gray-600">{subtitle}</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-8 mb-8">
              <div className="flex items-start mb-6">
                <svg className="w-12 h-12 text-green-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Here&apos;s What We Promise:</h3>
                  <p className="text-lg text-gray-700 mb-4">{promiseIntro}</p>
                  <ol className="space-y-3">
                    {promiseSteps.map((step, i) => (
                      <li key={i} className="flex items-start">
                        <span className="font-bold text-green-600 mr-2">{i + 1}.</span>
                        <span>{step.text}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h4 className="font-bold mb-3">{attributionTitle}</h4>
              <p className="text-gray-700 mb-3">{attributionText}</p>
              <p className="text-sm text-gray-600 italic">{attributionNote}</p>
            </div>

            <div className="text-center">
              <p className="text-lg font-semibold mb-2">{whyTitle}</p>
              <p className="text-gray-600">{whyText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
