import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Container } from "./container";

type SectionProps = HTMLAttributes<HTMLElement> & {
  eyebrow?: string;
  title?: string;
  description?: string;
  contentClassName?: string;
  actions?: ReactNode;
  containerSize?: "default" | "narrow" | "wide";
};

export function Section({
  className,
  eyebrow,
  title,
  description,
  actions,
  children,
  contentClassName,
  containerSize = "default",
  ...props
}: SectionProps) {
  return (
    <section className={cn("py-10 sm:py-14 lg:py-space-section", className)} {...props}>
      <Container size={containerSize}>
        <div className={cn("space-y-6 sm:space-y-8", contentClassName)}>
          {(eyebrow || title || description || actions) && (
            <div className="flex flex-col gap-4 sm:gap-5 md:flex-row md:items-end md:justify-between">
              <div className="min-w-0 max-w-3xl space-y-3">
                {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
                {title ? <h2 className="section-title">{title}</h2> : null}
                {description ? <p className="body-copy">{description}</p> : null}
              </div>
              {actions ? <div className="flex flex-wrap gap-3 max-sm:w-full">{actions}</div> : null}
            </div>
          )}
          {children}
        </div>
      </Container>
    </section>
  );
}
