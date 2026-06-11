import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "The Digital Door Knock | Suburb-Exclusive Video Marketing for NZ & AU Real Estate Agents",
  description:
    "Suburb-exclusive video content for real estate agents across Australia and New Zealand. One agent per suburb, locked in. Check if your suburb is still free.",
  keywords: [
    "real estate video",
    "suburb exclusivity",
    "real estate social media NZ",
    "real estate social media AU",
    "agent video content",
    "real estate marketing NZ",
    "real estate marketing Australia",
    "The Digital Door Knock",
    "suburb domination",
    "area exclusivity",
  ],
  openGraph: {
    title: "The Digital Door Knock | One Agent Per Suburb. Locked In.",
    description:
      "Sellers list with the agent they see most. Suburb-exclusive video, social and ads for NZ & AU agents. Check if your suburb is free.",
    type: "website",
    locale: "en_NZ",
    alternateLocale: ["en_AU"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Digital Door Knock | One Agent Per Suburb. Locked In.",
    description:
      "Sellers list with the agent they see most. Suburb-exclusive video, social and ads for NZ & AU agents. Check if your suburb is free.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-50 antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DZZHJCVLTV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DZZHJCVLTV');
          `}
        </Script>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
