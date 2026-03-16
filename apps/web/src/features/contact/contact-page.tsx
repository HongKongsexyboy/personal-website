import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { links } from "@/data/links";
import { cn } from "@/lib/utils";

export function ContactPageView() {
  return (
    <div className="pb-space-page">
      <Section
        eyebrow="Contact"
        title="联系表单、邮箱、社交链接与简历下载"
        description="表单当前已接好后端占位接口，后续可以继续接邮件服务、风控和转化追踪。"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>发送消息</CardTitle>
              <CardDescription>用统一的 spacing、边框和交互 token 组织表单体验。</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <label className="grid gap-2 text-sm font-medium">
                  <span>姓名</span>
                  <input
                    className="h-12 rounded-2xl border border-input bg-background/75 px-4 text-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/30"
                    name="name"
                    placeholder="你的名字"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium">
                  <span>邮箱</span>
                  <input
                    className="h-12 rounded-2xl border border-input bg-background/75 px-4 text-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/30"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium">
                  <span>消息</span>
                  <textarea
                    className="min-h-40 rounded-2xl border border-input bg-background/75 px-4 py-3 text-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/30"
                    name="message"
                    rows={6}
                    placeholder="说说你想合作的内容"
                  />
                </label>
                <Button type="submit">发送消息</Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>其他联系渠道</CardTitle>
              <CardDescription>邮箱、社交链接和简历下载入口统一收口在这里。</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link className="block text-base font-medium transition hover:text-primary" href={`mailto:${links.email}`}>
                {links.email}
              </Link>
              <div className="grid gap-2">
                {links.social.map((item) => (
                  <Link
                    key={item.href}
                    className="text-sm text-muted-foreground transition hover:text-foreground"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <Link className={cn(buttonVariants({ variant: "secondary" }), "w-fit")} href="/api/resume">
                下载简历
              </Link>
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  );
}
