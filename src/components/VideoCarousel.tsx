"use client";

import { useState } from "react";

type ReelItem = { url: string; label?: string };

function toEmbedUrl(url: string) {
  // Normalise: strip trailing slash, then append /embed/
  return url.replace(/\/+$/, "") + "/embed/";
}

export default function VideoCarousel({ items }: { items: ReelItem[] }) {
  const filled = items.filter((r) => r.url?.trim());
  const [current, setCurrent] = useState(0);

  if (filled.length === 0) return null;

  function go(dir: number) {
    setCurrent((c) => (c + dir + filled.length) % filled.length);
  }

  const reel = filled[current];

  return (
    <div className="vc-wrap">
      <div className="vc-stage">
        {filled.length > 1 && (
          <button className="vc-arrow vc-prev" onClick={() => go(-1)} aria-label="Previous">
            &#8592;
          </button>
        )}

        <div className="vc-viewer">
          <iframe
            key={reel.url}
            src={toEmbedUrl(reel.url)}
            allowFullScreen
            scrolling="no"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            title={reel.label || `Reel ${current + 1}`}
          />
          {reel.label && <div className="vc-label">{reel.label}</div>}
        </div>

        {filled.length > 1 && (
          <button className="vc-arrow vc-next" onClick={() => go(1)} aria-label="Next">
            &#8594;
          </button>
        )}
      </div>

      {filled.length > 1 && (
        <div className="vc-dots">
          {filled.map((_, i) => (
            <button
              key={i}
              className={`vc-dot${i === current ? " active" : ""}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to reel ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
