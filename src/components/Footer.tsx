"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy border-t border-white/5">
      <div className="container-narrow mx-auto px-5 py-12 md:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-amber flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
              <span className="text-lg font-heading font-bold text-white tracking-tight">
                OpenHouse<span className="text-amber"> Media</span>
              </span>
            </div>
            <p className="text-sm text-white/40 max-w-xs leading-relaxed">
              Short-form video content for New Zealand&apos;s most ambitious
              real estate agents.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Services", href: "#benefits" },
                { label: "Process", href: "#process" },
                { label: "About", href: "#about" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/40 hover:text-amber transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-2 text-sm text-white/40">
              <li>
                <a
                  href="mailto:hello@openhousemedia.co.nz"
                  className="hover:text-amber transition-colors"
                >
                  hello@openhousemedia.co.nz
                </a>
              </li>
              <li>New Plymouth, New Zealand</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {currentYear} OpenHouse Media. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Service"].map((text) => (
              <a
                key={text}
                href="#"
                className="text-xs text-white/30 hover:text-white/50 transition-colors"
              >
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
