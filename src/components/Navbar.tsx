"use client";

import LeadCapturePopup from "./LeadCapturePopup";

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  brand: string;
  links: NavLink[];
  ctaText: string;
  ctaHref: string;
}

export default function Navbar({ links, ctaText }: NavbarProps) {
  return (
    <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
      <span
        style={{
          background: "linear-gradient(to right, #818cf8, #7c3aed)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
        className="text-4xl font-black tracking-tight"
      >
        DD.
      </span>
      <div className="hidden md:flex gap-8">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="hover:text-purple-300">
            {link.label}
          </a>
        ))}
      </div>
      <LeadCapturePopup
        buttonClassName="bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-purple-100 transition cursor-pointer"
        buttonContent={ctaText}
      />
    </nav>
  );
}
