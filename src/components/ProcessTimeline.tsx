interface Bullet {
  text: string;
}

interface Step {
  week: string;
  title: string;
  bullets: Bullet[];
}

interface ProcessProps {
  title: string;
  subtitle: string;
  steps: Step[];
}

export default function ProcessTimeline({ title, subtitle, steps }: ProcessProps) {
  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
            <p className="text-xl text-gray-600">{subtitle}</p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-purple-200 md:left-8" />

            {steps.map((step, i) => (
              <div key={i} className={`relative ${i < steps.length - 1 ? "mb-16" : ""}`}>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 relative z-10">
                    {i + 1}
                  </div>
                  <div className="ml-8 md:ml-12">
                    <div className="text-sm text-purple-600 font-semibold">{step.week}</div>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                </div>
                <div className="ml-24 md:ml-28 bg-white rounded-lg p-6 shadow-lg">
                  <ul className="space-y-2">
                    {step.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start">
                        <svg className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{bullet.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
