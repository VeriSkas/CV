import { ReactElement, ReactNode } from 'react';

import {
  Control,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';

import { CvItemDetails } from './cvs';
import {
  CvDetailForm,
  DropDownOption,
  IEmployeeForm,
  IMainPagesInfo,
  TableOption,
  UsedInTableObjectsType,
} from './interfaces';
import { UserInfo } from './user';

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
  defaultValue?: string | string[];
  disabled: boolean;
  labelName: string;
  control: Control<any, any>;
  setFormValue: UseFormSetValue<any>;
  getValues?: UseFormGetValues<any>;
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

export interface EmployeeFormProps {
  user?: UserInfo;
  submitBtnText?: string;
  onSubmitForm: (data: IEmployeeForm, id?: string) => void;
  setError?: (message: string) => void;
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
  auth: (isAuth: boolean) => void;
  login: boolean;
  errorMessage: string;
  setErrorMessage: (message: string) => void;
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
