import { AboutPageView } from "@/features/about/about-page";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "About",
  description: "个人简介、经验、技能图谱与时间线。",
  path: "/about"
});

export default function AboutPage() {
  return <AboutPageView />;
}
