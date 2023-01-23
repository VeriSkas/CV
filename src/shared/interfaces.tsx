import { UseFormRegister } from 'react-hook-form';

export interface ButtonProps {
  type?: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: string;
}

export interface InputProps {
  label: string;
  labelName?: string;
  type: string;
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

export interface Inputs {
  [key: string]: string;
}

export interface IInput {
  type: string;
  label: string;
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

export interface EmployeeTableOption {
  name: string;
  active: boolean;
  ascendingSort?: boolean;
}

export interface DropDownOption {
  label: string;
  to?: string;
  icon?: JSX.Element;
}

export interface DropDownProps {
  options: DropDownOption[];
  onClose: (label: string) => void;
}

export interface UserInfo {
  id: string;
  email: string;
  profile: {
    avatar: string | null,
    firstName: string,
    lastName: string,
    fullName: string | null,
  };
  position: string | null;
  department: string | null;
}

export interface SortType {
  department: string;
  email: string;
  position: string;
  firstName: string;
  lastName: string;
}
