import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";

export function AboutPageView() {
  return (
    <div className="overflow-x-hidden pb-space-page">
      <Section eyebrow="About" title="关于我、经验、技能图谱与时间线">
        <div className="max-w-3xl space-y-4">
          {profile.bio.map((paragraph) => (
            <p key={paragraph} className="body-copy">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>经验</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {profile.experience.map((item) => (
                <div key={item.title} className="rounded-2xl border border-border/70 bg-background/40 p-4 sm:p-5">
                  <div className="space-y-1">
                    <h3 className="break-words text-base font-semibold sm:text-lg">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.company}</p>
                    <p className="eyebrow">{item.period}</p>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.summary}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>技能图谱</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {skills.map((group) => (
                <div key={group.category} className="space-y-3 rounded-2xl border border-border/70 bg-background/40 p-4 sm:p-5">
                  <h3 className="break-words text-base font-semibold sm:text-lg">{group.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="token-chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  );
}
