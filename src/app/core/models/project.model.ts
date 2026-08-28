export type ProjectCategory = 'industrial' | 'cloud' | 'ai' | 'desktop' | 'all';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: ProjectCategory[];
  companyOrContext: string;
  period: string;
  featured: boolean;
  accentColor: string; // Hex color code for border/badge accent
  summary: string;
  architectureHighlights: string[];
  techStack: string[];
  metricsOrAchievements?: string[];
  links?: {
    demo?: string;
    github?: string;
    docs?: string;
  };
  servicesTable?: {
    name: string;
    role: string;
  }[];
}
