import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { posts } from "@/data/posts";
import { createMetadata } from "@/lib/seo/metadata";
import { formatDate } from "@/lib/utils/format";
import { cn } from "@/lib/utils";

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return createMetadata({
      title: "Post Not Found",
      description: "未找到对应文章。",
      path: `/blog/${slug}`
    });
  }

  return createMetadata({
    title: post.title,
    description: post.summary,
    path: `/blog/${post.slug}`
  });
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="overflow-x-hidden pb-space-page">
      <Section
        eyebrow={`${post.category} / ${formatDate(post.publishedAt)} / ${post.readingTime}`}
        title={post.title}
        description={post.summary}
        containerSize="narrow"
      >
        <Link className={cn(buttonVariants({ variant: "ghost" }), "w-full sm:w-fit")} href="/blog">
          返回文章列表
        </Link>
        <Card>
          <CardContent className="pt-5 sm:pt-7">
            <p className="body-copy">
              这里预留给后续 Markdown 或 MDX 内容渲染。当前先把信息架构、SEO、Design System 和动态路由打通。
            </p>
          </CardContent>
        </Card>
      </Section>
    </article>
  );
}
