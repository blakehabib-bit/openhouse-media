"use client";

import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set deadline to end of current month
    const now = new Date();
    const deadline = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);

    const tick = () => {
      const diff = deadline.getTime() - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const blocks = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Mins" },
    { value: timeLeft.seconds, label: "Secs" },
  ];

  return (
    <div className="flex gap-3">
      {blocks.map((block) => (
        <div
          key={block.label}
          className="flex flex-col items-center rounded-lg bg-white/10 px-3 py-2 min-w-[60px] backdrop-blur-sm"
        >
          <span className="text-2xl font-heading font-bold text-white tabular-nums">
            {String(block.value).padStart(2, "0")}
          </span>
          <span className="text-xs text-white/60 uppercase tracking-wider">
            {block.label}
          </span>
        </div>
      ))}
    </div>
  );
}
