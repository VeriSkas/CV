import { LanguageItemInDB, SkillItemInDB, TableCvItem } from './cvs';
import { Department, DepartmentOption } from './departments';
import { PositionOption } from './positions';
import { ProjectItem } from './project';
import { IRadioInputs } from './propsInterfaces';
import { IRole, TableUser } from './user';

export type UsedInTableObjectsType =
  | TableCvItem
  | ProjectItem
  | TableUser
  | Department;

export type FormTypes =
  | NewCvForm
  | NewProjectForm
  | NewEmployeeForm
  | CvDetailForm
  | Inputs
  | IEmployeeForm;

export interface Inputs {
  [key: string]: string;
}

export interface NewProjectForm {
  name: string;
  internal_name: string;
  description: string;
  domain: string;
  start_date: string;
  end_date?: string;
  team_size: number;
  skillsIds: Array<{ value: string, label: string }>;
}

export interface NewCvForm {
  name: string;
  description: string;
  skills: SkillItemInDB[];
  languages: LanguageItemInDB[];
  projectsIds: string[];
}

export interface NewEmployeeForm {
  email: string;
  password: string;
  first_name?: string;
  last_name?: string;
  skills: SkillItemInDB[];
  languages: LanguageItemInDB[];
  cvsIds: string[];
  departmentId?: DepartmentOption;
  positionId?: PositionOption;
  role: IRole;
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
  role: string;
}

export interface CvDetailForm {
  name: string;
  description: string;
  full_name: string;
  positionId: string;
  projectsIds: string[];
  skills: SkillItemInDB[];
  languages: LanguageItemInDB[];
  is_template: boolean;
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

export interface IMySelect {
  label: string;
  labelName: string;
  defaultValue: string;
  disabled: boolean;
  multi: boolean;
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
  createBtnViewForUser: boolean;
  settingsBtnViewForUser: boolean;
  avatar: boolean;
}
