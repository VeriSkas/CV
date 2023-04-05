import { ReactElement, ReactNode } from 'react';

import {
  Control,
  FieldErrorsImpl,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';

import { CvItemDetails } from './cvs';
import { Department } from './departments';
import {
  CvDetailForm,
  DropDownOption,
  FormTypes,
  IEmployeeForm,
  IFieldArray,
  IInput,
  ILanguageForm,
  IMainPagesInfo,
  IMySelect,
  NewCvForm,
  NewEmployeeForm,
  NewProjectForm,
  TableOption,
  UsedInTableObjectsType,
} from './interfaces';
import { Language } from './languages';
import { Position } from './positions';
import { ProjectItem } from './project';
import { Skill } from './skills';
import { UserInfo } from './user';

export type OutletContextType = (id: string) => void;

export interface ButtonProps {
  type?: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: string;
}

export interface InputProps {
  label: string;
  labelName?: string;
  defaultValue?: string;
  type: string;
  readonly?: boolean;
  validation: {
    [key: string]:
      | { value: number | boolean | RegExp, message: string }
      | ((value: string) => boolean | string),
  };
  register: UseFormRegister<any>;
  error: string | undefined;
  placeholder?: string;
}

export interface MySelectProps {
  label: string;
  multi: boolean;
  disabled: boolean;
  labelName: string;
  control: Control<any, any>;
  setFormValue: UseFormSetValue<any>;
  controlName?: string;
  required?: boolean;
}

export interface FieldArrayProps {
  register: UseFormRegister<any>;
  control: Control<any, any>;
  label: string;
  labelName?: string;
  radioInputs: IRadioInputs;
  disabled?: boolean;
  setValue: UseFormSetValue<any>;
  required?: boolean;
}

export interface IRadioInputs {
  name: string;
  inputValueName: string;
  options: Array<{
    value: string,
    label: string,
  }>;
}

export interface InputSearchProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export interface LoginSignUpFormProps {
  text: { [key: string]: string };
  path: string;
  onSubmit: (data: { email: string, password: string }) => void;
}

export interface DropDownProps {
  options: DropDownOption[];
  onClick: (label: string) => void;
}

export interface AvatarProps {
  user?: UserInfo;
  disabled: boolean;
}

export interface ContentHeaderProps {
  setOpenSidebar: (isOpen: boolean) => void;
}

export interface CreateEmployeeFormProps {
  onSubmitForm: (data: NewEmployeeForm) => void;
}

export interface CvCreateFormProps {
  onSubmitForm: (data: NewCvForm) => void;
}

export interface FormContainerProps {
  title: string;
  children: ReactElement;
}

export interface FormWithOnlyNameProps {
  onSubmitForm: (data: { name: string }, id?: string) => void;
  item?: Department | Position | Skill;
  returnPath: string;
  type: string;
}

export interface LanguageFormProps {
  onSubmitForm: (data: ILanguageForm, id?: string) => void;
  item?: Language;
  type: string;
}

export interface BackdropProps {
  onClick: () => void;
}

export interface BreadcrumbsProps {
  paramName?: string;
}

export interface FieldsArrayFromArrayProps {
  fieldsArray: IFieldArray[];
  register: UseFormRegister<FormTypes>;
  control: Control<FormTypes, any>;
  disabled?: boolean;
  setValue: UseFormSetValue<any>;
}

export interface SideBarProps {
  onClose: () => void;
  isOpen: boolean;
}

export interface SelectsFromArrayProps {
  selectsArray: IMySelect[];
  control: Control<FormTypes, any>;
  setValue: UseFormSetValue<FormTypes>;
}

export interface InputsFromArrayProps {
  register: UseFormRegister<FormTypes>;
  inputsArray: IInput[];
  errors: Partial<FieldErrorsImpl<FormTypes>>;
}

export interface ProjectFormProps {
  onSubmitForm: (data: NewProjectForm) => void;
  project?: ProjectItem;
  type: string;
}

export interface EmployeeFormProps {
  user?: UserInfo;
  submitBtnText?: string;
  onSubmitForm: (data: IEmployeeForm, id?: string) => void;
  type: string;
}

export interface CvFormProps {
  cv?: CvItemDetails;
  submitBtnText?: string;
  onSubmitForm: (data: CvDetailForm, id?: string) => void;
  type: string;
}

export interface TableProps {
  tableType: string;
  items: UsedInTableObjectsType[] | null;
  loading: boolean;
  headerOptions: { [key: string]: TableOption };
  dropDownOptions: DropDownOption[];
  dropDownHandler: (label: string, id: string) => void;
  toggleTemplateCv?: (id: string, error?: string) => void;
  searchValue?: SearchValue;
  settingsBtnViewForUser: boolean;
  avatar: boolean;
}

export interface SearchValue {
  value: string;
  searchKey: string[];
}

export interface TableItemProps {
  item: UsedInTableObjectsType;
  dropDownOptions: DropDownOption[];
  dropDownHandler: (label: string, id: string) => void;
  toggleTemplateCv?: (id: string) => void;
  settingsView: boolean;
  avatar: boolean;
}

export interface LayoutProps {
  children: ReactNode;
}

export interface SelectProps {
  onChangeHandler: (id: string, value: string, key: string) => void;
  label: string;
  defaultValue: string | '';
  labelName: string | '';
  register: UseFormRegister<any>;
  disabled?: boolean;
}

export interface OptionsType {
  value: string;
  label: string;
}

export interface SearchBarProps {
  linkTo: string;
  btnText: string;
  title: string;
  placeholder?: string;
  onChangeSearch: (value: string) => void;
  createBtnViewForUser: boolean;
  children: ReactElement;
}

export interface TablePageContainerProps {
  mainPagesInfo: IMainPagesInfo;
  tableItems: UsedInTableObjectsType[] | null;
  loading: boolean;
  dropDownHandler: (label: string, id: string) => void;
  toggleTemplateCv?: (id: string, error?: string) => void;
}
