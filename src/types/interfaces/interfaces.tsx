import { LanguageItemInDB, SkillItemInDB, TableCvItem } from './cvs';
import { Department } from './departments';
import { ProjectItem } from './project';
import { IRadioInputs } from './propsInterfaces';
import { TableUser } from './user';

export type UsedInTableObjectsType =
  | TableCvItem
  | ProjectItem
  | TableUser
  | Department;

export interface Inputs {
  [key: string]: string;
}

export interface NewCvForm {
  name: string;
  description: string;
  skills: SkillItemInDB[];
  languages: LanguageItemInDB[];
}

export interface NewEmployeeForm {
  email: string;
  password: string;
  first_name?: string;
  last_name?: string;
  skills: SkillItemInDB[];
  languages: LanguageItemInDB[];
  cvsIds: string[];
  departmentId?: string;
  positionId?: string;
  role: string;
}

export interface IEmployeeForm {
  first_name: string;
  last_name: string;
  skills: SkillItemInDB[];
  email: string;
  languages: LanguageItemInDB[];
  cvsIds: string[];
  departmentId: string;
  positionId: string;
}

export interface CvDetailForm {
  name: string;
  description: string;
  full_name: string;
  positionId: string;
  skills: SkillItemInDB[];
  languages: LanguageItemInDB[];
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
  disabled: boolean;
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

export interface IFieldArray {
  label: string;
  labelName: string;
  radioInputs: IRadioInputs;
}

export interface IMainPagesInfo {
  linkTo: string;
  btnText: string;
  title: string;
  placeholder: string;
  headerOptions: { [key: string]: TableOption };
  dropDownOptions: DropDownOption[];
  searchKey: string[];
}
