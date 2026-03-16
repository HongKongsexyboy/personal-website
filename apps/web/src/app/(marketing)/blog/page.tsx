import { BlogPageView } from "@/features/blog/blog-page";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "Blog / Notes",
  description: "技术文章、Unity 学习记录、面试总结和渲染/架构专题。",
  path: "/blog"
});

export default function BlogPage() {
  return <BlogPageView />;
}
