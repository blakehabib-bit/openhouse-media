"use client";

import { useRef, useState } from "react";

type ReelItem = { videoFile: string; label?: string };

export default function VideoCarousel({ items }: { items: ReelItem[] }) {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  function go(dir: number) {
    const next = (current + dir + items.length) % items.length;
    setCurrent(next);
    // Reset playback on the incoming video
    setTimeout(() => videoRef.current?.play(), 50);
  }

  const reel = items[current];

  return (
    <div className="vc-wrap">
      <div className="vc-stage">
        <button className="vc-arrow vc-prev" onClick={() => go(-1)} aria-label="Previous">
          &#8592;
        </button>

        <div className="vc-viewer">
          <video
            ref={videoRef}
            key={reel.videoFile}
            src={reel.videoFile}
            autoPlay
            muted
            loop
            playsInline
            className="vc-video"
          />
          {reel.label && <div className="vc-label">{reel.label}</div>}
        </div>

        <button className="vc-arrow vc-next" onClick={() => go(1)} aria-label="Next">
          &#8594;
        </button>
      </div>

      <div className="vc-dots">
        {items.map((_, i) => (
          <button
            key={i}
            className={`vc-dot${i === current ? " active" : ""}`}
            onClick={() => { setCurrent(i); setTimeout(() => videoRef.current?.play(), 50); }}
            aria-label={`Go to reel ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
