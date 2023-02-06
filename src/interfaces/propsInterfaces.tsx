import { ReactNode } from 'react';

import { UseFormRegister } from 'react-hook-form';

import { CvItemDetails, LanguageItemInDB, SkillItemInDB } from './cvs';
import {
  DropDownOption,
  Inputs,
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
  register: UseFormRegister<Inputs>;
  error: string | undefined;
  placeholder?: string;
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
  onClose: (label: string) => void;
}

export interface EmployeeFormProps {
  user?: UserInfo;
  submitBtnText?: string;
  onSubmitForm: (data: Inputs, id?: string) => void;
  setError?: (message: string) => void;
  type: string;
}

export interface CvFormProps {
  cv?: CvItemDetails;
  submitBtnText?: string;
  onSubmitForm: (
    data: Inputs,
    skills: SkillItemInDB[],
    languages: LanguageItemInDB[],
    id?: string
  ) => void;
  type: string;
}

export interface TableProps {
  items: UsedInTableObjectsType[] | null;
  loading: boolean;
  headerOptions: { [key: string]: TableOption };
  dropDownOptions: DropDownOption[];
  dropDownHandler: (label: string, id: string) => void;
  searchValue?: SearchValue;
}

export interface SearchValue {
  value: string;
  searchKey: string[];
}

export interface TableItemProps {
  item: UsedInTableObjectsType;
  dropDownOptions: DropDownOption[];
  dropDownHandler: (label: string, id: string) => void;
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
  options: OptionsType[] | [];
  labelName: string | '';
  register: UseFormRegister<Inputs>;
}

export interface OptionsType {
  value: string;
  id: string;
}
