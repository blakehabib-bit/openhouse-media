import type { Metadata } from "next";
import { promises as fs } from "fs";
import path from "path";
import VideoPage from "@/components/VideoPage";

export const metadata: Metadata = {
  title: "Video Production Brisbane | The Digital Door Knock",
  description:
    "Brisbane video production by the team behind 3,000+ videos. One-off shoots and monthly retainer content for brands, businesses and real estate agents. Shot, edited, delivered.",
  openGraph: {
    title: "DD. Video | Brisbane Video Production",
    description:
      "One-off shoots and monthly content retainers by the team behind 3,000+ videos.",
    locale: "en_AU",
    type: "website",
  },
};

// Content editable via the Tina "video" collection (content/video/index.json).
export default async function VideoRoute() {
  const filePath = path.join(process.cwd(), "content/video/index.json");
  const data = JSON.parse(await fs.readFile(filePath, "utf-8"));
  return <VideoPage data={data} />;
}
