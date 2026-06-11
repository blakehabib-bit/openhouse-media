import { promises as fs } from "fs";
import path from "path";
import HomePageV2 from "@/components/HomePageV2";

// Homepage content is editable via the Tina "home" collection (content/home/index.json).
export default async function Home() {
  const filePath = path.join(process.cwd(), "content/home/index.json");
  const data = JSON.parse(await fs.readFile(filePath, "utf-8"));
  return <HomePageV2 data={data} />;
}
