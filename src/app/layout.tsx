import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Digital Door Knock | Own Your Suburb's Video Real Estate Market",
  description:
    "Suburb-exclusive video content for New Zealand's top real estate agents. We guarantee only 1 agent per suburb. Book your free suburb audit today.",
  keywords: [
    "real estate video",
    "suburb exclusivity",
    "real estate social media NZ",
    "agent video content",
    "real estate marketing NZ",
    "The Digital Door Knock",
    "suburb domination",
  ],
  openGraph: {
    title: "The Digital Door Knock | Own Your Suburb's Video Real Estate Market",
    description:
      "Become the only agent sellers can find in your suburb. Suburb-exclusive video content for NZ real estate agents.",
    type: "website",
    locale: "en_NZ",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-50 antialiased">{children}</body>
    </html>
  );
}
