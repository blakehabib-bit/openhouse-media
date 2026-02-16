import { promises as fs } from "fs";
import path from "path";
import HomePageClient from "./home-client";

export default async function Home() {
  const filePath = path.join(process.cwd(), "content/pages/home.json");
  const fileContent = await fs.readFile(filePath, "utf-8");
  const pageData = JSON.parse(fileContent);

  return <HomePageClient data={pageData} />;
}
