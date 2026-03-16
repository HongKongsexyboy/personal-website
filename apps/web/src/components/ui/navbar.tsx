import Link from "next/link";

import { cn } from "@/lib/utils";

import { Container } from "./container";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog / Notes" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

type NavbarProps = {
  brand?: string;
  className?: string;
};

export function Navbar({ brand = "个人博客", className }: NavbarProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-border/60 bg-background/75 backdrop-blur-xl supports-[backdrop-filter]:bg-background/55",
        className
      )}
    >
      <Container className="flex min-h-18 items-center justify-between gap-6">
        <Link href="/" className="font-display text-2xl tracking-tight text-foreground">
          {brand}
        </Link>
        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-1 rounded-full border border-border/70 bg-card/80 p-1.5 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
