export interface Language {
  id: string;
  name: string;
  iso2: string;
  native_name?: string;
}

export interface LanguageOption {
  label: string;
  value: string;
}
