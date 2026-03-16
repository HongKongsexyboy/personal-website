import { HomePageView } from "@/features/home/home-page";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "Home",
  description: "展示个人定位、核心优势、精选项目与关键 CTA。",
  path: "/"
});

export default function HomePage() {
  return <HomePageView />;
}
