import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  size?: "default" | "narrow" | "wide";
};

export function Container({ className, size = "default", ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-full px-4 sm:px-5 lg:px-8",
        size === "default" && "max-w-[1120px]",
        size === "narrow" && "max-w-4xl",
        size === "wide" && "max-w-[1280px]",
        className
      )}
      {...props}
    />
  );
}
