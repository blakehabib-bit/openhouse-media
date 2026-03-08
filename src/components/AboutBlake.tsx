"use client";

import { useRef, useState } from "react";

interface AboutBlakeStat {
  value: string;
  label: string;
}

interface AboutBlakeProps {
  title: string;
  description: string;
  videoFile?: string;
  stats: AboutBlakeStat[];
}

function VideoPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className="aspect-[9/16] max-h-[520px] relative bg-black rounded-2xl overflow-hidden cursor-pointer shadow-2xl"
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        playsInline
        loop
        preload="metadata"
        onEnded={() => setIsPlaying(false)}
      />
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-7 h-7 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AboutBlake({ title, description, videoFile, stats }: AboutBlakeProps) {
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
            {videoFile ? (
              <VideoPlayer src={videoFile} />
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
