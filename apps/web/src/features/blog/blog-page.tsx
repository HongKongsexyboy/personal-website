import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { posts } from "@/data/posts";
import { formatDate } from "@/lib/utils/format";
import { cn } from "@/lib/utils";

export function BlogPageView() {
  return (
    <div className="overflow-x-hidden pb-space-page">
      <Section
        eyebrow="Blog / Notes"
        title="技术文章、Unity 学习记录与专题沉淀"
        description="这里会承接技术文章、Unity 学习记录、面试总结和渲染/架构专题内容。"
      >
        <div className="grid gap-4 sm:gap-5">
          {posts.map((post) => (
            <Card key={post.slug}>
              <CardHeader>
                <p className="eyebrow break-words">
                  {post.category} / {formatDate(post.publishedAt)} / {post.readingTime}
                </p>
                <CardTitle className="break-words">{post.title}</CardTitle>
                <CardDescription>{post.summary}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link className={cn(buttonVariants({ variant: "outline" }), "w-full sm:w-fit")} href={`/blog/${post.slug}`}>
                  阅读文章
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
