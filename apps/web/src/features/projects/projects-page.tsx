import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectsPageView() {
  return (
    <div className="pb-space-page">
      <Section
        eyebrow="Projects"
        title="项目列表、技术栈标签与案例入口"
        description="这里优先展示项目卡片、技术栈、摘要说明和详情入口，后续可以继续扩展筛选、排序和内容来源。"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.slug} className="h-full">
              <CardHeader>
                <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                  <span className="eyebrow">{project.year}</span>
                  <span className="token-chip">{project.status}</span>
                </div>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.tagline}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <p className="text-sm leading-7 text-muted-foreground">{project.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="token-chip">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link className={cn(buttonVariants())} href={`/projects/${project.slug}`}>
                    查看详情
                  </Link>
                  {project.githubUrl ? (
                    <Link className={cn(buttonVariants({ variant: "outline" }))} href={project.githubUrl}>
                      GitHub
                    </Link>
                  ) : null}
                  {project.demoUrl ? (
                    <Link className={cn(buttonVariants({ variant: "secondary" }))} href={project.demoUrl}>
                      Demo
                    </Link>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
