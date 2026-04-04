import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectsPageView() {
  return (
    <div className="overflow-x-hidden pb-space-page">
      <Section
        eyebrow="Projects"
        title="项目列表、技术栈标签与案例入口"
        description="这里优先展示项目卡片、技术栈、摘要说明和详情入口，后续可以继续扩展筛选、排序和内容来源。"
      >
        <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.slug} className="h-full">
              <CardHeader>
                <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                  <span className="eyebrow">{project.year}</span>
                  <span className="token-chip">{project.status}</span>
                </div>
                <CardTitle className="break-words">{project.title}</CardTitle>
                <CardDescription>{project.tagline}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-5">
                <p className="text-sm leading-7 text-muted-foreground">{project.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="token-chip">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link className={cn(buttonVariants(), "w-full sm:w-auto")} href={`/projects/${project.slug}`}>
                    查看详情
                  </Link>
                  {project.githubUrl ? (
                    <Link className={cn(buttonVariants({ variant: "outline" }), "w-full sm:w-auto")} href={project.githubUrl}>
                      GitHub
                    </Link>
                  ) : null}
                  {project.demoUrl ? (
                    <Link className={cn(buttonVariants({ variant: "secondary" }), "w-full sm:w-auto")} href={project.demoUrl}>
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
