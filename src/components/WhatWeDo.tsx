interface WhatWeDoItem {
  title: string;
  description: string;
}

interface WhatWeDoProps {
  title: string;
  subtitle: string;
  items: WhatWeDoItem[];
}

export default function WhatWeDo({ title, subtitle, items }: WhatWeDoProps) {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
            {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {items.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
