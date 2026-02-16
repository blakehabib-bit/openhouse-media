interface Link {
  label: string;
  href: string;
}

interface FooterProps {
  brand: string;
  tagline: string;
  quickLinks: Link[];
  resources: Link[];
  email: string;
  phone: string;
  location: string;
  copyright: string;
}

export default function Footer({
  brand,
  tagline,
  quickLinks,
  resources,
  email,
  phone,
  location,
  copyright,
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-white text-2xl font-bold mb-4">{brand}</div>
            <p className="text-sm">{tagline}</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              {resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>{email}</li>
              <li>{phone}</li>
              <li>{location}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-sm text-center">
          <p>
            &copy; {currentYear} {copyright}{" "}
            <a href="#" className="hover:text-white">Privacy Policy</a> &middot;{" "}
            <a href="#" className="hover:text-white">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
