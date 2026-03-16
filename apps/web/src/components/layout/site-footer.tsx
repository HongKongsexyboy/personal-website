import Link from "next/link";

import { links } from "@/data/links";

export function SiteFooter() {
  return (
    <footer className="site-footer shell">
      <div className="card">
        <div className="link-row">
          <Link href={`mailto:${links.email}`}>{links.email}</Link>
          <Link href={links.github}>GitHub</Link>
          <Link href={links.rss}>RSS</Link>
        </div>
        <div>Built for portfolio, content, SEO, analytics and platform readiness.</div>
      </div>
    </footer>
  );
}
