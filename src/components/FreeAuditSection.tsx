interface AuditItem {
  title: string;
  description: string;
}

interface FreeAuditSectionProps {
  title: string;
  intro: string;
  items: AuditItem[];
  footnote: string;
  ctaText: string;
  ctaHref: string;
  trustBadges?: string[];
}

export default function FreeAuditSection({
  title,
  intro,
  items,
  footnote,
  ctaText,
  ctaHref,
  trustBadges,
}: FreeAuditSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <div className="text-gray-600 mb-8 whitespace-pre-line text-lg">{intro}</div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {items.map((item, i) => (
                <div key={item.title} className="bg-white rounded-xl p-6 border border-indigo-100 shadow-sm">
                  <h3 className="font-bold text-lg mb-2">
                    <span className="text-purple-600">{i + 1}.</span> {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-500 text-sm italic mb-8">{footnote}</p>

            <div className="text-center">
              <a
                href={ctaHref}
                className="inline-block bg-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-700 transition"
              >
                {ctaText}
              </a>
              {trustBadges && trustBadges.length > 0 && (
                <p className="text-sm text-gray-500 mt-4">
                  {trustBadges.join(" · ")}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
