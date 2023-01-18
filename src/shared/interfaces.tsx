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
  to: string;
  label: string;
  icon: JSX.Element;
}
