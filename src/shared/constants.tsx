import React from 'react';

import {
  MdPeopleAlt,
  MdLanguage,
  MdHardware,
  MdHomeRepairService,
  MdHomeWork,
  MdSettings,
  MdLogout,
} from 'react-icons/md';
import { FaAddressCard } from 'react-icons/fa';
import { GrWorkshop } from 'react-icons/gr';
import { CgProfile } from 'react-icons/cg';

import {
  DropDownOption,
  EmployeeTableOption,
  IInput,
  ILink,
} from './interfaces';
import {
  BtnText,
  ErrorMessages,
  InputLabels,
  InputTypes,
  SubtitleText,
  TitleText,
} from './text';

const regExpForEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const inputs: { [key: string]: IInput } = {
  email: {
    type: InputTypes.email,
    label: InputLabels.email,
    validation: {
      required: { value: true, message: ErrorMessages.inputRequired },
      minLength: { value: 5, message: ErrorMessages.inputMinLength(5) },
      maxLength: { value: 100, message: ErrorMessages.inputMaxLength(100) },
      pattern: {
        value: regExpForEmail,
        message: ErrorMessages.inputEmail,
      },
    },
  },
  password: {
    type: InputTypes.password,
    label: InputLabels.password,
    validation: {
      required: { value: true, message: ErrorMessages.inputRequired },
      minLength: { value: 6, message: ErrorMessages.inputMinLength(6) },
      maxLength: { value: 32, message: ErrorMessages.inputMaxLength(32) },
    },
  },
};

export const authFormText = {
  title: TitleText.authTitle,
  subtitle: SubtitleText.authSubtitle,
  submitBtn: BtnText.authSubmitBtn,
  btn: BtnText.authResetPasswordBtn,
};

export const signUpFormText = {
  title: TitleText.signUpTitle,
  subtitle: SubtitleText.signUpSubtitle,
  submitBtn: BtnText.signUpSubmitBtn,
  btn: BtnText.returnBtn,
};

export const paths = {
  main: '/',
  login: '/login',
  signup: '/signup',
};

export const links: { [key: string]: ILink } = {
  employees: {
    to: '/employees',
    label: 'Employees',
    icon: <MdPeopleAlt />,
  },
  projects: {
    to: '/projects',
    label: 'Projects',
    icon: <GrWorkshop />,
  },
  cvs: {
    to: '/cvs',
    label: 'CVs',
    icon: <FaAddressCard />,
  },
  departments: {
    to: '/departments',
    label: 'Departments',
    icon: <MdHomeWork />,
  },
  positions: {
    to: '/positions',
    label: 'Positions',
    icon: <MdHomeRepairService />,
  },
  skills: {
    to: '/skills',
    label: 'Skills',
    icon: <MdHardware />,
  },
  languages: {
    to: '/languages',
    label: 'Languages',
    icon: <MdLanguage />,
  },
  logout: {
    to: '/login',
    label: 'Logout',
    icon: <MdLogout />,
  },
  profile: {
    to: `/employees/${localStorage.getItem('userId') ?? ''}/profile`,
    label: 'Profile',
    icon: <CgProfile />,
  },
  settings: {
    to: '/settings',
    label: 'Settings',
    icon: <MdSettings />,
  },
};

export const employeeTableOptions: { [key: string]: EmployeeTableOption } = {
  firstName: { name: 'First Name', active: false },
  lastName: { name: 'Last Name', active: false },
  email: { name: 'Email', active: false },
  department: { name: 'Department', active: false },
  position: { name: 'Position', active: false },
};

export const employeeDropDownOptions: { [key: string]: DropDownOption } = {
  updateUser: {
    to: '/employees',
    label: 'Update employee',
  },
  removeUser: {
    to: '/employees',
    label: 'Delete employee',
  },
};
