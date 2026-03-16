import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { getProjectBySlug } from "@/data/projects";
import { createMetadata } from "@/lib/seo/metadata";
import { cn } from "@/lib/utils";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return createMetadata({
      title: "Project Not Found",
      description: "未找到对应项目。",
      path: `/projects/${slug}`
    });
  }

  return createMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pb-space-page">
      <Section
        eyebrow={`Project / ${project.year} / ${project.status}`}
        title={project.title}
        description={project.tagline}
        actions={
          <Link className={cn(buttonVariants({ variant: "ghost" }))} href="/projects">
            返回项目列表
          </Link>
        }
      >
        <p className="body-copy max-w-3xl">{project.summary}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="token-chip">
              {tag}
            </span>
          ))}
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>项目背景</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {project.background.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-7 text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>我的职责</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {project.responsibilities.map((item) => (
                <div key={item} className="rounded-2xl border border-border/70 bg-background/40 p-4 text-sm text-muted-foreground">
                  {item}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>技术栈</CardTitle>
            <CardDescription>用于支撑项目交付的关键框架、语言和工程能力。</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="token-chip">
                {item}
              </span>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>难点与解决方案</CardTitle>
            <CardDescription>把项目中的关键挑战拆成问题和方案，方便后续继续补充复盘。</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {project.challenges.map((challenge) => (
              <div key={challenge.title} className="rounded-2xl border border-border/70 bg-background/40 p-5">
                <h3 className="text-lg font-semibold">{challenge.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  <span className="font-semibold text-foreground">问题：</span>
                  {challenge.problem}
                </p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  <span className="font-semibold text-foreground">解决方案：</span>
                  {challenge.solution}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>截图区域</CardTitle>
            <CardDescription>当前保留为截图占位区，后续可替换为真实项目界面、流程图或性能对比图。</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            {project.screenshots.map((item) => (
              <div
                key={item.title}
                className="flex min-h-56 flex-col justify-end rounded-3xl border border-dashed border-border bg-secondary/40 p-5"
              >
                <p className="font-semibold">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="flex flex-wrap gap-3">
          {project.githubUrl ? (
            <Link className={cn(buttonVariants())} href={project.githubUrl}>
              GitHub
            </Link>
          ) : null}
          {project.demoUrl ? (
            <Link className={cn(buttonVariants({ variant: "secondary" }))} href={project.demoUrl}>
              Demo
            </Link>
          ) : null}
        </div>
      </Section>
    </div>
  );
}
