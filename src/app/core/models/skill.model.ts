export interface SkillItem {
  name: string;
  level?: string;
  icon?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  accentColor: string; // e.g. '#3EB0F9', '#FFA61E', '#FF5500', '#00AA47', '#9D4EDD'
  iconName: string;
  skills: SkillItem[];
}
