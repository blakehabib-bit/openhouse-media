"use client";

import { useEffect, useState } from "react";

interface StickyCTAProps {
  text: string;
  buttonText: string;
  buttonHref: string;
}

export default function StickyCTA({ text, buttonText, buttonHref }: StickyCTAProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 800);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-purple-900 text-white py-4 shadow-2xl z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center">
          <span className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse" />
          <span className="font-semibold">{text}</span>
        </div>
        <a
          href={buttonHref}
          className="bg-white text-purple-900 px-6 py-3 rounded-lg font-bold hover:bg-purple-100 transition whitespace-nowrap"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}
