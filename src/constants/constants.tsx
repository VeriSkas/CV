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
  TableOption,
  IInput,
  ILink,
} from '../interfaces/interfaces';
import {
  BtnText,
  ErrorMessages,
  InputLabelNames,
  InputLabels,
  InputTypes,
  SubtitleText,
  TitleText,
} from './text';

export const LSItems = {
  token: 'token',
  userId: 'userId',
  activeUser: 'activeUser',
  activeProject: 'activeProject',
  activeCV: 'activeCV',
};

export const MAX_photoSize = 500000;

const regExpForEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const inputs: { [key: string]: IInput } = {
  email: {
    type: InputTypes.email,
    label: InputLabels.email,
    defaultValue: '',
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
    defaultValue: '',
    validation: {
      required: { value: true, message: ErrorMessages.inputRequired },
      minLength: { value: 6, message: ErrorMessages.inputMinLength(6) },
      maxLength: { value: 32, message: ErrorMessages.inputMaxLength(32) },
    },
  },
  first_name: {
    type: InputTypes.text,
    label: InputLabels.firstName,
    labelName: InputLabelNames.firstName,
    defaultValue: '',
    validation: {
      required: { value: true, message: ErrorMessages.inputRequired },
      minLength: { value: 2, message: ErrorMessages.inputMinLength(2) },
      maxLength: { value: 100, message: ErrorMessages.inputMaxLength(100) },
    },
  },
  last_name: {
    type: InputTypes.text,
    label: InputLabels.lastName,
    labelName: InputLabelNames.lastName,
    defaultValue: '',
    validation: {
      required: { value: true, message: ErrorMessages.inputRequired },
      minLength: { value: 2, message: ErrorMessages.inputMinLength(2) },
      maxLength: { value: 100, message: ErrorMessages.inputMaxLength(100) },
    },
  },
  full_name: {
    type: InputTypes.text,
    label: InputLabels.fullName,
    labelName: InputLabelNames.fullName,
    defaultValue: '',
    validation: {},
  },
  email2: {
    type: InputTypes.email,
    label: InputLabels.email,
    labelName: InputLabelNames.email,
    defaultValue: '',
    readonly: true,
    validation: {},
  },
  department: {
    type: InputTypes.text,
    label: InputLabels.department,
    labelName: InputLabelNames.department,
    defaultValue: '',
    validation: {},
  },
  position: {
    type: InputTypes.text,
    label: InputLabels.position,
    labelName: InputLabelNames.position,
    defaultValue: '',
    validation: {},
  },
  name: {
    type: InputTypes.text,
    label: InputLabels.name,
    labelName: InputLabelNames.name,
    defaultValue: '',
    validation: {},
  },
  name2: {
    type: InputTypes.text,
    label: InputLabels.name,
    labelName: InputLabelNames.name,
    defaultValue: '',
    validation: {
      required: { value: true, message: ErrorMessages.inputRequired },
      minLength: { value: 3, message: ErrorMessages.inputMinLength(3) },
      maxLength: { value: 32, message: ErrorMessages.inputMaxLength(32) },
    },
  },
  description: {
    type: InputTypes.text,
    label: InputLabels.description,
    labelName: InputLabelNames.description,
    defaultValue: '',
    validation: {},
  },
  description2: {
    type: InputTypes.text,
    label: InputLabels.description,
    labelName: InputLabelNames.description,
    defaultValue: '',
    validation: {
      required: { value: true, message: ErrorMessages.inputRequired },
      minLength: { value: 3, message: ErrorMessages.inputMinLength(3) },
      maxLength: { value: 100, message: ErrorMessages.inputMaxLength(100) },
    },
  },
  skill: {
    type: InputTypes.text,
    label: InputLabels.skill,
    labelName: InputLabelNames.skill,
    defaultValue: '',
    validation: {},
  },
  language: {
    type: InputTypes.text,
    label: InputLabels.language,
    labelName: InputLabelNames.language,
    defaultValue: '',
    validation: {},
  },
};

export const TypeForm = {
  profileType: 'profile',
  updateEmployee: 'updateEmployee',
  createEmployee: 'createEmployee',
  cvUser: 'cvUser',
  cvDetails: 'cvDetails',
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
    to: `/employees/${localStorage.getItem(LSItems.userId) ?? ''}/profile`,
    label: 'Profile',
    icon: <CgProfile />,
  },
  settings: {
    to: '/settings',
    label: 'Settings',
    icon: <MdSettings />,
  },
};

export const employeeTableOptions: { [key: string]: TableOption } = {
  first_name: { name: 'First Name', active: false, disabled: false },
  last_name: { name: 'Last Name', active: false, disabled: false },
  email: { name: 'Email', active: false, disabled: false },
  department_name: { name: 'Department', active: false, disabled: false },
  position_name: { name: 'Position', active: false, disabled: false },
};

export const projectsTableOptions: { [key: string]: TableOption } = {
  name: { name: 'Name', active: false, disabled: false },
  internal_name: { name: 'Internal Name', active: false, disabled: false },
  domain: { name: 'Domain', active: false, disabled: false },
  start_date: { name: 'Start Date', active: false, disabled: false },
  end_date: { name: 'End Date', active: false, disabled: false },
  team_size: { name: 'Team Size', active: false, disabled: true },
};

export const cvsTableOptions: { [key: string]: TableOption } = {
  is_template: { name: 'Template', active: false, disabled: true },
  name: { name: 'Name', active: false, disabled: false },
  description: { name: 'Description', active: false, disabled: true },
  email: { name: 'Employee', active: false, disabled: false },
};

export const dropDownOptions: { [key: string]: DropDownOption } = {
  updateUser: {
    to: `/employees/${localStorage.getItem(LSItems.activeUser)}`,
    label: 'Update employee',
  },
  removeUser: {
    to: '/employees',
    label: 'Delete employee',
  },
  project: {
    to: `/projects/${localStorage.getItem(LSItems.activeProject)}`,
    label: 'Project',
  },
  removeProject: {
    to: '/projects',
    label: 'Delete project',
  },
  cv: {
    to: `/cvs/${localStorage.getItem(LSItems.activeCV)}`,
    label: 'CV',
  },
  removeCV: {
    to: '/cvs',
    label: 'Delete CV',
  },
};
