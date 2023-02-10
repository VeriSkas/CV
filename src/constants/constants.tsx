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
  ILink,
} from '../types/interfaces/interfaces';
import { PATH } from './paths';
import { LSItems } from './variables';

export const MAX_photoSize = 500000;

export const links: { [key: string]: ILink } = {
  employees: {
    to: PATH.employees,
    label: 'Employees',
    icon: <MdPeopleAlt />,
  },
  projects: {
    to: PATH.projects,
    label: 'Projects',
    icon: <GrWorkshop />,
  },
  cvs: {
    to: PATH.cvs,
    label: 'CVs',
    icon: <FaAddressCard />,
  },
  departments: {
    to: PATH.departments,
    label: 'Departments',
    icon: <MdHomeWork />,
  },
  positions: {
    to: PATH.positions,
    label: 'Positions',
    icon: <MdHomeRepairService />,
  },
  skills: {
    to: PATH.skills,
    label: 'Skills',
    icon: <MdHardware />,
  },
  languages: {
    to: PATH.languages,
    label: 'Languages',
    icon: <MdLanguage />,
  },
  logout: {
    to: PATH.login,
    label: 'Logout',
    icon: <MdLogout />,
  },
  profile: {
    to: `${PATH.employees}/${localStorage.getItem(LSItems.userId) ?? ''}${
      PATH.profile
    }`,
    label: 'Profile',
    icon: <CgProfile />,
  },
  settings: {
    to: PATH.settings,
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
    label: 'Update employee',
  },
  removeUser: {
    label: 'Delete employee',
  },
  project: {
    label: 'Project',
  },
  removeProject: {
    label: 'Delete project',
  },
  cv: {
    label: 'CV',
  },
  removeCV: {
    label: 'Delete CV',
  },
};
