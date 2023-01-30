import { ReactNode } from 'react';
import { UseFormRegister } from 'react-hook-form';
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
  type: string;
}

export interface TableProps {
  items: UsedInTableObjectsType[] | null;
  loading: boolean;
  headerOptions: { [key: string]: TableOption };
  dropDownOptions: DropDownOption[];
  dropDownHandler: (label: string, id: string) => void;
  searchValue?: string;
}

export interface TableItemProps {
  item: UsedInTableObjectsType;
  dropDownOptions: DropDownOption[];
  dropDownHandler: (label: string, id: string) => void;
}

export interface LayoutProps {
  auth: (isAuth: boolean) => void;
  login: boolean;
  children: ReactNode;
}
