export interface CvItem {
  id: string;
  is_template: boolean;
  name: string
  description: string;
  user: { email: string; } | null;
}

export interface TableCvItem {
  id: string;
  is_template: boolean;
  name: string;
  description: string;
  email: string | null;
}
