import { posts } from "@/data/posts";
import { siteConfig } from "@/lib/seo/site";

export async function GET() {
  const items = posts
    .map(
      (post) => `
        <item>
          <title>${post.title}</title>
          <link>${siteConfig.siteUrl}/blog/${post.slug}</link>
          <description>${post.summary}</description>
          <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
        </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>${siteConfig.name}</title>
        <link>${siteConfig.siteUrl}</link>
        <description>${siteConfig.description}</description>
        ${items}
      </channel>
    </rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8"
    }
  });
}
