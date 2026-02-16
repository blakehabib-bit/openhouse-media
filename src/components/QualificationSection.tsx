interface QualItem {
  title: string;
  description: string;
}

interface QualificationProps {
  title: string;
  subtitle: string;
  dontApply: QualItem[];
  perfectIf: QualItem[];
}

export default function QualificationSection({
  title,
  subtitle,
  dontApply,
  perfectIf,
}: QualificationProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
            <p className="text-xl text-gray-600">{subtitle}</p>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 md:p-12 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-red-900">Don&apos;t Apply If:</h3>
            <div className="space-y-4">
              {dontApply.map((item, i) => (
                <div key={i} className="flex items-start">
                  <svg className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <div className="font-semibold">{item.title}</div>
                    <div className="text-gray-700">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-6 text-green-900">Perfect If You:</h3>
            <div className="space-y-4">
              {perfectIf.map((item, i) => (
                <div key={i} className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <div className="font-semibold">{item.title}</div>
                    <div className="text-gray-700">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
