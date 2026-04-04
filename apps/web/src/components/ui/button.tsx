import type { ButtonHTMLAttributes } from "react";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-full text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary px-5 text-primary-foreground shadow-sm hover:bg-primary/90",
        secondary: "bg-secondary px-5 text-secondary-foreground hover:bg-secondary/80",
        outline: "border border-border bg-background/80 px-5 text-foreground hover:bg-secondary/70",
        ghost: "px-4 text-foreground hover:bg-secondary/80",
        link: "rounded-none px-0 text-primary underline-offset-4 hover:underline"
      },
      size: {
        sm: "min-h-10 px-4 text-sm",
        default: "min-h-11 px-5 text-sm sm:text-[0.95rem]",
        lg: "min-h-12 px-6 text-base",
        icon: "size-11"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = "button", ...props }, ref) => {
    return <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} type={type} {...props} />;
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
