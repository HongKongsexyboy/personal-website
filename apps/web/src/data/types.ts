export type ExperienceItem = {
  company: string;
  title: string;
  period: string;
  summary: string;
};

export type Profile = {
  name: string;
  role: string;
  location: string;
  summary: string;
  tagline: string;
  bio: string[];
  strengths: string[];
  experience: ExperienceItem[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type SocialLink = {
  label: string;
  href: string;
};

export type ContactLinks = {
  email: string;
  github: string;
  rss: string;
  social: SocialLink[];
};

export type ProjectChallenge = {
  title: string;
  problem: string;
  solution: string;
};

export type ProjectScreenshot = {
  title: string;
  description: string;
};

export type ProjectEntry = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  featured?: boolean;
  status: "Live" | "In Progress" | "Internal";
  year: string;
  tags: string[];
  stack: string[];
  background: string[];
  responsibilities: string[];
  challenges: ProjectChallenge[];
  screenshots: ProjectScreenshot[];
  githubUrl?: string;
  demoUrl?: string;
};
