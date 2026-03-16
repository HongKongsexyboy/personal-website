import type { MetadataRoute } from "next";

import { posts } from "@/data/posts";
import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/seo/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/projects", "/blog", "/contact"].map((path) => ({
    url: `${siteConfig.siteUrl}${path}`,
    lastModified: new Date()
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${siteConfig.siteUrl}/projects/${project.slug}`,
    lastModified: new Date()
  }));

  const postRoutes = posts.map((post) => ({
    url: `${siteConfig.siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt)
  }));

  return [...staticRoutes, ...projectRoutes, ...postRoutes];
}
