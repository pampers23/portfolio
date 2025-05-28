export type ExperienceItem = {
  year: string;
  title: string;
  company: string;
  description: string;
  icon: React.ReactNode;
  side: "left" | "right";
  index: number;
}
