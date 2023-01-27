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
  defaultValue?: string;
  type: string;
  readonly?: boolean,
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
  labelName?: string;
  defaultValue?: string;
  readonly?: boolean;
  validation: {
    [key: string]:
      | { value: number | boolean | RegExp, message: string }
      | ((value: string) => boolean | string),
  };
}

export interface LoginSignUpFormProps {
  text: { [key: string]: string };
  path: string;
  onSubmit: (data: { email: string, password: string }) => void;
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

export interface DropDownProps {
  options: DropDownOption[];
  onClose: (label: string) => void;
}

export interface UserInfo {
  id: string;
  email: string;
  profile: {
    id: string;
    avatar: string | null,
    first_name: string,
    last_name: string,
    full_name: string | null,
    skills?: Array<{
      skill_name: string,
      mastery: string,
    }>,
    languages?: Array<{
      language_name: string,
      proficiency: string,
    }>,
  };
  cvs?: Array<{
    id: string,
  }>;
  department_name?: string | null;
  position_name?: string | null;
  position: { name: string, id: string } | null;
  department: { name: string, id: string } | null;
}

export interface TableUser {
  id: string;
  email: string;
  avatar: string | null,
  first_name: string,
  last_name: string,
  department_name: string | null;
  position_name: string | null;
}

export interface UpdatedUser {
  profile: {
    first_name: string;
    last_name: string;
    skills: Array<{
      skill_name: string,
      mastery: string,
    }>,
    languages: Array<{
      language_name: string,
      proficiency: string,
    }>,
  }
  cvsIds: string[];
  departmentId: string;
  positionId: string;
}

export interface EmployeeFormProps {
  user?: UserInfo,
  submitBtnText?: string,
  onSubmitForm: (data: Inputs, id?: string) => void,
  type: string,
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

export interface Avatar {
  base64: string;
  size: number;
  type: string;
}

export interface UserInfoShort {
  email: string;
  profile: {
    avatar: null | string;
    first_name: string;
    last_name: string;
  }
}
