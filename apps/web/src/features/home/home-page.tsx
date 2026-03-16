import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { posts } from "@/data/posts";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function HomePageView() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="pb-space-page pt-6">
      <Section className="pt-10">
        <Container>
          <div className="hero-grid">
            <div className="space-y-7">
              <div className="space-y-4">
                <p className="eyebrow">Home</p>
                <h1 className="display-title">{profile.role}</h1>
                <p className="body-copy max-w-3xl">{profile.summary}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link className={buttonVariants()} href="/projects">
                  查看项目
                </Link>
                <Link className={buttonVariants({ variant: "outline" })} href="/api/resume">
                  下载简历
                </Link>
                <Link className={buttonVariants({ variant: "secondary" })} href="/contact">
                  联系我
                </Link>
              </div>
            </div>
            <Card className="bg-card/85">
              <CardHeader>
                <p className="eyebrow">Core Value</p>
                <CardTitle>复杂项目拆解与稳定交付</CardTitle>
                <CardDescription>
                  聚焦渲染、架构和工具链，把高复杂度问题变成可维护、可迭代的产品能力。
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 text-sm text-muted-foreground">
                <div className="grid gap-1">
                  <span className="font-semibold text-foreground">渲染 / 架构 / 工具链</span>
                  <span>技术深度与表达能力兼备，适合长期建设个人品牌与内容资产。</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="token-chip">Unity</span>
                  <span className="token-chip">Next.js</span>
                  <span className="token-chip">SEO</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      <Section eyebrow="Strengths" title="核心优势">
        <div className="grid gap-5 md:grid-cols-3">
          {profile.strengths.map((strength) => (
            <Card key={strength}>
              <CardContent className="pt-7">
                <p className="body-copy text-base text-foreground">{strength}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Projects"
        title="精选项目"
        description="从个人站点架构到渲染工具链案例，统一展示技术栈、难点复盘和项目价值。"
        actions={
          <Link className={buttonVariants({ variant: "ghost" })} href="/projects">
            查看全部
          </Link>
        }
      >
        <div className="grid gap-5 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <Card key={project.slug}>
              <CardHeader>
                <p className="eyebrow">{project.tags.join(" / ")}</p>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.summary}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="token-chip">
                      {item}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className={cn(buttonVariants({ variant: "outline" }), "w-fit")}
                >
                  查看详情
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Latest Posts" title="最新内容">
        <div className="grid gap-4">
          {posts.slice(0, 3).map((post) => (
            <Card key={post.slug}>
              <CardContent className="flex flex-col gap-3 pt-7 md:flex-row md:items-center md:justify-between">
                <div className="space-y-2">
                  <p className="eyebrow">{post.category}</p>
                  <h3 className="font-display text-2xl tracking-tight">{post.title}</h3>
                  <p className="body-copy text-base">{post.summary}</p>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className={cn(buttonVariants({ variant: "secondary" }), "w-fit")}
                >
                  继续阅读
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
