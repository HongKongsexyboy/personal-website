import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";

import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { createPersonSchema } from "@/lib/schema/person";
import { siteConfig } from "@/lib/seo/site";
import { cn } from "@/lib/utils";

import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: siteConfig.name,
  description: siteConfig.description
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const personSchema = createPersonSchema();

  return (
    <html lang="zh-CN" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
