import { TableCvItem } from './cvs';
import { ProjectItem } from './project';
import { TableUser } from './user';

export type UsedInTableObjectsType = TableCvItem | ProjectItem | TableUser;

export interface Inputs {
  [key: string]: string;
}

export interface IInput {
  type: string;
  label: string;
  labelName?: string;
  defaultValue?: string;
  readonly?: boolean;
  validation: {
    [key: string]:
      | { value: number | boolean | RegExp, message: string }
      | ((value: string) => boolean | string),
  };
}

export interface ILink {
  label: string;
  to: string;
  icon: JSX.Element;
}

export interface TableOption {
  name: string;
  active: boolean;
  ascendingSort?: boolean;
}

export interface DropDownOption {
  label: string;
  to?: string;
  icon?: JSX.Element;
}

export interface SortType {
  department_name: string;
  email: string;
  position_name: string;
  first_name: string;
  last_name: string;
  name: string;
  internal_name: string;
  domain: string;
  start_date: string;
  end_date: string;
  team_size: number;
}
