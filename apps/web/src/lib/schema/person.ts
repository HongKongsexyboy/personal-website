import { profile } from "@/data/profile";
import { siteConfig } from "@/lib/seo/site";

export function createPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    description: profile.summary,
    url: siteConfig.siteUrl
  };
}
