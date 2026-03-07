interface PortfolioItem {
  title: string;
  type: string;
  description: string;
  stat: string;
  image?: string;
}

interface ContentPortfolioProps {
  title: string;
  subtitle: string;
  items: PortfolioItem[];
}

const TYPE_COLORS: Record<string, string> = {
  "Property Tour": "bg-purple-100 text-purple-700",
  "Market Update": "bg-blue-100 text-blue-700",
  "Brand Reel": "bg-pink-100 text-pink-700",
  "Listing Content": "bg-green-100 text-green-700",
  "Educational": "bg-amber-100 text-amber-700",
  "Success Story": "bg-indigo-100 text-indigo-700",
};

const TYPE_GRADIENTS: Record<string, string> = {
  "Property Tour": "from-purple-500 to-indigo-600",
  "Market Update": "from-blue-500 to-cyan-600",
  "Brand Reel": "from-pink-500 to-rose-600",
  "Listing Content": "from-green-500 to-emerald-600",
  "Educational": "from-amber-500 to-orange-600",
  "Success Story": "from-indigo-500 to-violet-600",
};

export default function ContentPortfolio({ title, subtitle, items }: ContentPortfolioProps) {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
            <p className="text-xl text-gray-600">{subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item) => {
              const colorClass = TYPE_COLORS[item.type] || "bg-gray-100 text-gray-700";
              const gradient = TYPE_GRADIENTS[item.type] || "from-gray-500 to-gray-600";

              return (
                <div
                  key={item.title}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Thumbnail placeholder */}
                  <div className={`aspect-video bg-gradient-to-br ${gradient} relative`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        className="w-14 h-14 text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                    {/* Stat badge */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-sm font-bold text-gray-900">{item.stat}</span>
                    </div>
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    )}
                  </div>

                  <div className="p-6">
                    {/* Type badge */}
                    <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${colorClass}`}>
                      {item.type}
                    </span>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
