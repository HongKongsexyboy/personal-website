export type PostCategory = "技术文章" | "Unity 学习记录" | "面试总结" | "渲染/架构专题";

export type PostEntry = {
  slug: string;
  title: string;
  summary: string;
  category: PostCategory;
  publishedAt: string;
  readingTime: string;
};

export const posts: PostEntry[] = [
  {
    slug: "unity-render-pipeline-notes",
    title: "Unity Render Pipeline 学习记录",
    summary: "记录渲染流程拆解、调试思路和工程实践。",
    category: "Unity 学习记录",
    publishedAt: "2026-03-10",
    readingTime: "8 min"
  },
  {
    slug: "client-architecture-interview-notes",
    title: "客户端架构面试总结",
    summary: "整理系统设计、性能、协作和交付相关的高频问题。",
    category: "面试总结",
    publishedAt: "2026-03-08",
    readingTime: "6 min"
  },
  {
    slug: "seo-first-personal-site",
    title: "面向 SEO 的个人网站架构",
    summary: "从路由、元信息、内容模型到 RSS 的最小可行方案。",
    category: "技术文章",
    publishedAt: "2026-03-05",
    readingTime: "7 min"
  }
];
