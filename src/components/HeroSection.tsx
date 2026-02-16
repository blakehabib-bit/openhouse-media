interface Stat {
  value: string;
  label: string;
}

interface HeroProps {
  badge: string;
  headlinePart1: string;
  headlineHighlight: string;
  headlinePart2: string;
  subheadline: string;
  description: string;
  stats: Stat[];
  ctaPrimaryText: string;
  ctaSecondaryText: string;
  ctaFootnote: string;
}

export default function HeroSection({
  badge,
  headlinePart1,
  headlineHighlight,
  headlinePart2,
  subheadline,
  description,
  stats,
  ctaPrimaryText,
  ctaSecondaryText,
  ctaFootnote,
}: HeroProps) {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Exclusivity Badge */}
        <div className="inline-flex items-center bg-purple-800/50 border border-purple-400/30 rounded-full px-4 py-2 mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
          <span className="text-sm">{badge}</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          {headlinePart1}
          <span className="gradient-text">{headlineHighlight}</span>
          {headlinePart2}
        </h1>
        <p className="text-2xl mb-4 text-purple-200">{subheadline}</p>
        <p className="text-xl mb-12 text-purple-100 max-w-3xl">{description}</p>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat) => (
            <div key={stat.value}>
              <div className="text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-purple-200">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#cta"
            className="bg-white text-purple-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-100 transition inline-flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {ctaPrimaryText}
          </a>
          <a
            href="#suburbs"
            className="bg-purple-800/50 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-800 transition inline-flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            {ctaSecondaryText}
          </a>
        </div>

        <p className="text-sm text-purple-300 mt-4">{ctaFootnote}</p>
      </div>
    </div>
  );
}
