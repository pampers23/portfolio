export type ExperienceItem = {
  year: string;
  title: string;
  company: string;
  description: string;
  icon: React.ReactNode;
  side: "left" | "right";
  index: number;
}

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  stack: string[];
  features: string[];
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
}