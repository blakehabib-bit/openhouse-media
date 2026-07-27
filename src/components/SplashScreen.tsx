"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

/**
 * Full-screen entry gate shown at the site root (/).
 * A high-quality looping video plays behind a centered brand title and two
 * destination options: the agent "System" experience and "Videography".
 *
 * Video asset: drop an MP4 at `public/splash-bg.mp4` (optional poster at
 * `public/splash-poster.jpg`). Until then the dark background shows through.
 */
export default function SplashScreen() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    // React doesn't reliably apply the `muted` IDL property from JSX after
    // hydration, which can silently block autoplay — set it imperatively.
    v.muted = true;
    v.play().catch(() => {});
  }, []);

  return (
    <div className="splash-root">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* Background video */}
      <video
        ref={videoRef}
        className="splash-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/splash-poster.jpg"
        src="/splash-bg.mp4"
      />

      {/* Legibility overlay */}
      <div className="splash-overlay" aria-hidden="true" />

      {/* Centered brand title */}
      <div className="splash-center">
        <h1 className="splash-title">The Digital Door Knock</h1>
      </div>

      {/* Destination options */}
      <nav className="splash-options" aria-label="Enter site">
        <Link href="/system" className="splash-btn splash-btn-primary">
          Branding & Marketing
        </Link>
        <Link href="/video" className="splash-btn splash-btn-ghost">
          Videography
        </Link>
      </nav>
    </div>
  );
}

const css = `
  .splash-root {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #0a0a0a;
    color: #fff;
    font-family: Inter, system-ui, -apple-system, sans-serif;
  }

  .splash-video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }

  .splash-overlay {
    position: absolute;
    inset: 0;
    z-index: 1;
    background:
      linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.65) 100%);
  }

  .splash-center {
    position: absolute;
    inset: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    text-align: center;
  }

  .splash-title {
    margin: 0;
    font-weight: 300;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    font-size: clamp(1.6rem, 5vw, 3.4rem);
    line-height: 1.2;
    color: #fff;
    text-shadow: 0 2px 24px rgba(0,0,0,0.45);
    animation: splash-fade 1.2s ease-out both;
  }

  .splash-options {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 12%;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
    padding: 0 24px;
    flex-wrap: wrap;
    animation: splash-fade 1.6s ease-out 0.3s both;
  }

  .splash-btn {
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: clamp(0.72rem, 1.3vw, 0.85rem);
    font-weight: 600;
    white-space: nowrap;
    padding: 16px 28px;
    border-radius: 8px;
    transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .splash-btn-primary {
    background: #fff;
    color: #0a0a0a;
    border: 1.5px solid #fff;
    box-shadow: 0 8px 30px -8px rgba(0,0,0,.5);
  }

  .splash-btn-primary:hover {
    transform: translateY(-1px);
    box-shadow: 0 12px 36px -8px rgba(0,0,0,.6);
  }

  .splash-btn-ghost {
    background: rgba(255,255,255,0.08);
    color: #fff;
    border: 1.5px solid rgba(255,255,255,0.6);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }

  .splash-btn-ghost:hover {
    background: rgba(255,255,255,0.16);
    border-color: #fff;
    transform: translateY(-1px);
  }

  @keyframes splash-fade {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 640px) {
    .splash-options {
      flex-direction: column;
      gap: 14px;
      bottom: 9%;
    }
    .splash-btn {
      width: 100%;
      max-width: 320px;
      text-align: center;
    }
  }
`;
