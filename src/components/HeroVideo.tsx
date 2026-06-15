"use client";

import { useEffect, useRef } from "react";

export default function HeroVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      className="hero-bg-video"
      src={src}
      autoPlay
      muted
      loop
      playsInline
    />
  );
}
