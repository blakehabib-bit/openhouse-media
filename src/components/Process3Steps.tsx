interface Step {
  number: string;
  title: string;
  description: string;
}

interface Process3StepsProps {
  title: string;
  subtitle: string;
  steps: Step[];
}

export default function Process3Steps({ title, subtitle, steps }: Process3StepsProps) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
            {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="text-6xl font-bold text-purple-100 mb-2 leading-none">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
