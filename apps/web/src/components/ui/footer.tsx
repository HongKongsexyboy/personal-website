import Link from "next/link";

import { links } from "@/data/links";

import { Card, CardContent } from "./card";
import { Container } from "./container";

export function Footer() {
  return (
    <footer className="pb-space-page pt-8 sm:pt-10">
      <Container>
        <Card className="overflow-hidden">
          <CardContent className="grid gap-8 pt-6 sm:pt-7 md:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-3">
              <p className="eyebrow">Footer</p>
              <h2 className="font-display text-xl tracking-tight sm:text-2xl md:text-3xl">
                让项目、文章和个人品牌保持同一套表达系统。
              </h2>
              <p className="body-copy max-w-2xl text-sm sm:text-base">
                这套 UI Design System 基于 Tailwind 和 shadcn/ui，支持深色模式、统一 token，以及后续持续扩展。
              </p>
            </div>
            <div className="grid gap-3 text-sm text-muted-foreground sm:justify-start md:justify-self-end">
              <Link className="block break-all transition hover:text-foreground" href={`mailto:${links.email}`}>
                {links.email}
              </Link>
              <Link className="block transition hover:text-foreground" href={links.github}>
                GitHub
              </Link>
              <Link className="block transition hover:text-foreground" href={links.rss}>
                RSS
              </Link>
            </div>
          </CardContent>
        </Card>
      </Container>
    </footer>
  );
}
