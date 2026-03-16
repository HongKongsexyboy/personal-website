import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <Section
      className="flex min-h-[70vh] items-center"
      eyebrow="404"
      title="页面不存在"
      description="可以返回首页，或者直接去浏览项目与文章。"
      containerSize="narrow"
      actions={
        <>
          <Link className={cn(buttonVariants())} href="/">
            返回首页
          </Link>
          <Link className={cn(buttonVariants({ variant: "outline" }))} href="/projects">
            浏览项目
          </Link>
        </>
      }
    />
  );
}
