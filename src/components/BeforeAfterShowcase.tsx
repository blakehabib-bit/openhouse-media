interface TransformationStat {
  label: string;
  before: string;
  after: string;
}

interface BeforeAfterShowcaseProps {
  title: string;
  subtitle: string;
  agentName: string;
  agentSuburb: string;
  stats: TransformationStat[];
  quote: string;
}

export default function BeforeAfterShowcase({
  title,
  subtitle,
  agentName,
  agentSuburb,
  stats,
  quote,
}: BeforeAfterShowcaseProps) {
  return (
    <section id="showcase" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
            <p className="text-xl text-gray-600">{subtitle}</p>
          </div>

          {/* Before / After Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Before Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-red-100">
              <div className="bg-red-50 px-6 py-4 border-b border-red-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="font-bold text-red-700 text-sm uppercase tracking-wide">Before</span>
                </div>
              </div>
              <div className="p-6">
                {/* Mock profile header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{agentName}</div>
                    <div className="text-sm text-gray-500">{agentSuburb}</div>
                  </div>
                </div>
                {/* Mock stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                  <div>
                    <div className="text-lg font-bold text-gray-400">247</div>
                    <div className="text-xs text-gray-400">followers</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-400">12</div>
                    <div className="text-xs text-gray-400">posts</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-400">0.2%</div>
                    <div className="text-xs text-gray-400">engagement</div>
                  </div>
                </div>
                {/* Mock content grid */}
                <div className="grid grid-cols-3 gap-1.5">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="aspect-square rounded bg-gray-100" />
                  ))}
                </div>
                <p className="text-center text-sm text-gray-400 mt-4">Inconsistent, no strategy</p>
              </div>
            </div>

            {/* After Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-green-100">
              <div className="bg-green-50 px-6 py-4 border-b border-green-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="font-bold text-green-700 text-sm uppercase tracking-wide">After 90 Days</span>
                </div>
              </div>
              <div className="p-6">
                {/* Mock profile header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{agentName}</div>
                    <div className="text-sm text-gray-500">{agentSuburb}</div>
                  </div>
                </div>
                {/* Mock stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                  <div>
                    <div className="text-lg font-bold text-purple-600">2,480</div>
                    <div className="text-xs text-gray-500">followers</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-purple-600">120+</div>
                    <div className="text-xs text-gray-500">posts</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-purple-600">4.8%</div>
                    <div className="text-xs text-gray-500">engagement</div>
                  </div>
                </div>
                {/* Mock content grid with gradients */}
                <div className="grid grid-cols-3 gap-1.5">
                  {["from-purple-400 to-indigo-500", "from-blue-400 to-cyan-500", "from-pink-400 to-rose-500", "from-indigo-400 to-violet-500", "from-green-400 to-emerald-500", "from-amber-400 to-orange-500"].map((gradient, i) => (
                    <div key={i} className={`aspect-square rounded bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                      <svg className="w-5 h-5 text-white/70" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  ))}
                </div>
                <p className="text-center text-sm text-green-600 font-medium mt-4">Consistent, branded, converting</p>
              </div>
            </div>
          </div>

          {/* Transformation Stats */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                    {stat.label}
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <div>
                      <div className="text-lg font-bold text-red-400 line-through">{stat.before}</div>
                    </div>
                    <svg className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <div>
                      <div className="text-lg font-bold text-green-600">{stat.after}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div className="text-center">
            <blockquote className="text-xl text-gray-700 italic max-w-3xl mx-auto">
              &ldquo;{quote}&rdquo;
            </blockquote>
            <div className="mt-4 text-sm text-gray-500">
              {agentName} &middot; {agentSuburb}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
