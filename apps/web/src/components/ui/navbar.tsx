"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "./button";
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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/65",
        className
      )}
    >
      <Container className="relative">
        <div className="flex min-h-16 items-center justify-between gap-3 py-3 sm:min-h-18">
          <Link
            href="/"
            className="min-w-0 max-w-[calc(100%-7rem)] truncate font-display text-xl tracking-tight text-foreground sm:max-w-none sm:text-2xl"
          >
            {brand}
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <nav className="hidden items-center gap-1 rounded-full border border-border/70 bg-card/80 p-1.5 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-secondary hover:text-foreground lg:px-4"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <ThemeToggle />
            <Button
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="md:hidden"
              size="icon"
              variant="outline"
              onClick={() => setOpen((prev) => !prev)}
            >
              {open ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {open ? (
          <div className="absolute inset-x-0 top-full mt-2 md:hidden">
            <div className="rounded-3xl border border-border/70 bg-card/95 p-3 shadow-[0_24px_60px_-30px_rgba(20,16,11,0.45)] backdrop-blur">
              <nav className="grid gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
