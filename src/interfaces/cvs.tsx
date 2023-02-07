export interface CvItem {
  id: string;
  is_template: boolean;
  name: string
  description: string;
  user: { email: string; } | null;
}

export interface CvItemDetails {
  id: string;
  is_template: boolean;
  name: string
  description: string;
  user: {
    id: string;
    email: string;
    profile: { full_name: string };
    position: { name: string } } | null;
  skills: SkillItem[];
  languages: LanguageItem[];
}

export interface NewCV {
  name: string;
  description: string;
  userId?: string;
  projectsIds: string[];
  skills: SkillItemInDB[];
  languages: LanguageItemInDB[];
  is_template: boolean;
}

export interface SkillItem {
  name: string;
}

export interface SkillItemInDB {
  skill_name: string;
  mastery: string;
}

export interface LanguageItem {
  name: string;
}
export interface LanguageItemInDB {
  language_name: string;
  proficiency: string;
}

export interface TableCvItem {
  id: string;
  is_template: boolean;
  name: string;
  description: string;
  email: string | null;
}
