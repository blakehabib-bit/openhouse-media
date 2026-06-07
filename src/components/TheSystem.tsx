interface Pillar {
  name: string;
  deliverables: string[];
  goal: string;
}

interface TheSystemProps {
  title: string;
  subtitle: string;
  pillars: Pillar[];
}

export default function TheSystem({ title, subtitle, pillars }: TheSystemProps) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
            {subtitle && (
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => (
              <div
                key={pillar.name}
                className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-100"
              >
                <div className="text-sm font-semibold text-purple-600 mb-3">
                  0{idx + 1}
                </div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  {pillar.name}
                </h3>

                <ul className="space-y-2 mb-8">
                  {pillar.deliverables.map((d) => (
                    <li key={d} className="flex items-start text-gray-700">
                      <svg
                        className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-purple-200 pt-4">
                  <div className="text-xs font-semibold text-purple-600 uppercase tracking-wider mb-1">
                    Goal
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{pillar.goal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
