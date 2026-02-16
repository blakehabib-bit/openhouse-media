import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpenHouse Media | Video Content for Real Estate Agents",
  description:
    "We help real estate agents produce, edit, and strategise scroll-stopping video content that wins listings and builds personal brands. Based in New Zealand.",
  keywords: [
    "real estate video",
    "property video NZ",
    "real estate social media",
    "agent video content",
    "real estate marketing NZ",
    "property marketing video",
    "OpenHouse Media",
  ],
  openGraph: {
    title: "OpenHouse Media | Video Content for Real Estate Agents",
    description:
      "Scroll-stopping video content that positions you as the go-to agent in your market.",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
