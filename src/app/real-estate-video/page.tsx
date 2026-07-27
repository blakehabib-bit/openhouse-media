import type { Metadata } from "next";
import { promises as fs } from "fs";
import path from "path";
import RealEstateVideoPage from "@/components/RealEstateVideoPage";

export const metadata: Metadata = {
  title: "Real Estate & Brand Videography | The Digital Door Knock",
  description:
    "Property walkthroughs, agent profiles and brand films. Shot, edited and delivered fast by The Digital Door Knock.",
  openGraph: {
    title: "DD. | Real Estate & Brand Videography",
    description: "Property walkthroughs, agent profiles and brand films. Shot, edited and delivered fast.",
    type: "website",
  },
};

// Content editable via the Tina "realEstateVideo" collection (content/real-estate-video/index.json).
export default async function RealEstateVideoRoute() {
  const filePath = path.join(process.cwd(), "content/real-estate-video/index.json");
  const data = JSON.parse(await fs.readFile(filePath, "utf-8"));
  return <RealEstateVideoPage data={data} />;
}
