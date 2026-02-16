"use client";

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

export default function Navbar({ brand, links, ctaText, ctaHref }: NavbarProps) {
  return (
    <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
      <div className="text-2xl font-bold">{brand}</div>
      <div className="hidden md:flex gap-8">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="hover:text-purple-300">
            {link.label}
          </a>
        ))}
      </div>
      <a
        href={ctaHref}
        className="bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-purple-100 transition"
      >
        {ctaText}
      </a>
    </nav>
  );
}
