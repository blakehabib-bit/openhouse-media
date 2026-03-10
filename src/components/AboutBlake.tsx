"use client";

interface AboutBlakeStat {
  value: string;
  label: string;
}

interface AboutBlakeProps {
  title: string;
  description: string;
  videoFile?: string;
  youtubeUrl?: string;
  stats: AboutBlakeStat[];
}

function extractYouTubeId(url: string): string | null {
  const patterns = [
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/,
    /youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/,
    /youtu\.be\/([a-zA-Z0-9_-]+)/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

export default function AboutBlake({ title, description, videoFile, youtubeUrl, stats }: AboutBlakeProps) {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
            {description && (
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">{description}</p>
            )}
          </div>

          {/* Video */}
          <div className="flex justify-center mb-16">
            {youtubeUrl && extractYouTubeId(youtubeUrl) ? (
              <div className="aspect-[9/16] max-h-[520px] w-[293px] relative bg-black rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src={`https://www.youtube.com/embed/${extractYouTubeId(youtubeUrl)}?rel=0&modestbranding=1`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="About Blake"
                />
              </div>
            ) : videoFile ? (
              <div className="aspect-[9/16] max-h-[520px] w-[293px] relative bg-black rounded-2xl overflow-hidden shadow-2xl">
                <video
                  src={videoFile}
                  className="w-full h-full object-cover"
                  playsInline
                  loop
                  controls
                  preload="metadata"
                />
              </div>
            ) : (
              <div className="aspect-[9/16] max-h-[520px] w-[293px] bg-gradient-to-br from-indigo-900 via-purple-900 to-purple-800 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center text-white/70 px-6">
                  <svg className="w-16 h-16 mx-auto mb-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                  <p className="text-sm font-medium">Video Coming Soon</p>
                </div>
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
