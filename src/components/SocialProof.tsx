interface Testimonial {
  stat: string;
  quote: string;
  name: string;
  agency: string;
  image?: string;
  headshot?: string;
}

interface ListItem {
  text: string;
}

interface FeaturedLogo {
  name: string;
  logo: string;
}

interface SocialProofProps {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
  featuredTitle?: string;
  featuredLogos?: FeaturedLogo[];
  beforeTitle: string;
  beforeItems: ListItem[];
  afterTitle: string;
  afterItems: ListItem[];
}

export default function SocialProof({
  title,
  subtitle,
  testimonials,
  featuredTitle,
  featuredLogos,
  beforeTitle,
  beforeItems,
  afterTitle,
  afterItems,
}: SocialProofProps) {
  return (
    <section id="results" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
            <p className="text-xl text-gray-600">{subtitle}</p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                <div className="text-2xl font-bold text-purple-600 mb-4">{t.stat}</div>
                <blockquote className="text-gray-700 mb-6 leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
                <div className="flex items-center">
                  {(t.headshot || t.image) ? (
                    <img src={t.headshot || t.image} alt={t.name} className="w-12 h-12 rounded-full mr-3 object-cover" />
                  ) : (
                    <div className="w-12 h-12 bg-purple-100 rounded-full mr-3" />
                  )}
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-gray-600">{t.agency}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured On Carousel */}
          {featuredLogos && featuredLogos.length > 0 && (
            <div className="mb-12">
              <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">
                {featuredTitle || "Work Featured On"}
              </p>
              <div className="relative overflow-hidden">
                <div className="flex animate-scroll">
                  {[...featuredLogos, ...featuredLogos].map((item, i) => (
                    <div
                      key={i}
                      className="flex-shrink-0 px-8 flex items-center justify-center"
                    >
                      <img
                        src={item.logo}
                        alt={item.name}
                        className="h-10 md:h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Before/After */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-center mb-8">
              What Happens When You Own Your Area
            </h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="text-red-600 font-bold text-sm mb-2">{beforeTitle}</div>
                <div className="space-y-3">
                  {beforeItems.map((item, i) => (
                    <div key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-green-600 font-bold text-sm mb-2">{afterTitle}</div>
                <div className="space-y-3">
                  {afterItems.map((item, i) => (
                    <div key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
