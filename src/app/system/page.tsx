import type { Metadata } from "next";
import { promises as fs } from "fs";
import path from "path";
import HomePageV2 from "@/components/HomePageV2";

// The agent "System" homepage. Reached from the entry splash at "/".
// Content editable via the Tina "home" collection (content/home/index.json).
export const metadata: Metadata = {
  title:
    "The Digital Door Knock | Suburb-Exclusive Video Marketing for NZ & AU Real Estate Agents",
  description:
    "Suburb-exclusive video content for real estate agents across Australia and New Zealand. One agent per suburb, locked in. Check if your suburb is still free.",
};

export default async function SystemPage() {
  const filePath = path.join(process.cwd(), "content/home/index.json");
  const data = JSON.parse(await fs.readFile(filePath, "utf-8"));
  return <HomePageV2 data={data} />;
}
