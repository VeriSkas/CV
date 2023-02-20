export interface ProjectItem {
  id: string;
  name: string;
  internal_name: string;
  description?: string;
  domain: string;
  start_date: string;
  end_date: string | null;
  team_size: number;
}
