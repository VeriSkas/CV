import React from 'react';

import {
  MdPeopleAlt,
  MdLanguage,
  MdHardware,
  MdHomeRepairService,
  MdHomeWork,
  MdSettings,
  MdLogout,
  MdOutlineHouse,
  MdPersonOutline,
  MdCardTravel,
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
import {
  ACTIVE_CV_ID,
  ACTIVE_PROJECT_ID,
  ACTIVE_USER_ID,
  USER_ID,
} from '../apollo/state';
import { IRole } from '../types/interfaces/user';

export const Sizes = {
  MAX_photoSize: 500000,
  MAX_inputLength: 100,
  MIN_inputLength: 2,
  MAX_inputValue: 100,
  MIN_inputValue: 1,
  MAX_passwordLength: 32,
  MIN_passwordLength: 5,
  MIN_emailLength: 5,
};

export const PhotoTypes = {
  png: 'image/png',
  jpg: 'image/jpg',
  jpeg: 'image/jpeg',
  gif: 'image/gif',
};

export const SupportedLanguages = {
  en: 'en',
  ru: 'ru',
};

export const Roles: { [key: string]: IRole } = {
  admin: {
    label: 'Admin',
    value: 'admin',
  },
  employee: {
    label: 'Employee',
    value: 'employee',
  },
};

export const links: { [key: string]: ILink } = {
  home: {
    to: PATH.main,
    label: 'Links.home',
    icon: <MdOutlineHouse />,
  },
  employees: {
    to: PATH.employees,
    label: 'Links.employees',
    icon: <MdPeopleAlt />,
  },
  employee: {
    to: `${PATH.employees}/${ACTIVE_USER_ID()}`,
    label: 'Links.person',
    icon: <MdPersonOutline />,
  },
  projects: {
    to: PATH.projects,
    label: 'Links.projects',
    icon: <GrWorkshop />,
  },
  project: {
    to: `${PATH.projects}/${ACTIVE_PROJECT_ID()}`,
    label: 'Links.project',
    icon: <MdCardTravel />,
  },
  cvs: {
    to: PATH.cvs,
    label: 'Links.cvs',
    icon: <FaAddressCard />,
  },
  cv: {
    to: `${PATH.cvs}/${ACTIVE_CV_ID()}`,
    label: 'Links.cv',
    icon: <FaAddressCard />,
  },
  departments: {
    to: PATH.departments,
    label: 'Links.departments',
    icon: <MdHomeWork />,
  },
  department: {
    to: `${PATH.departments}/${PATH.department}`,
    label: 'Links.department',
    icon: <MdHomeWork />,
  },
  positions: {
    to: PATH.positions,
    label: 'Links.positions',
    icon: <MdHomeRepairService />,
  },
  position: {
    to: `${PATH.positions}/${PATH.position}`,
    label: 'Links.position',
    icon: <MdHomeRepairService />,
  },
  skills: {
    to: PATH.skills,
    label: 'Links.skills',
    icon: <MdHardware />,
  },
  skill: {
    to: `${PATH.skills}/${PATH.skill}`,
    label: 'Links.skill',
    icon: <MdHardware />,
  },
  languages: {
    to: PATH.languages,
    label: 'Links.languages',
    icon: <MdLanguage />,
  },
  language: {
    to: `${PATH.languages}/${PATH.language}`,
    label: 'Links.language',
    icon: <MdLanguage />,
  },
  logout: {
    to: PATH.login,
    label: 'Links.logout',
    icon: <MdLogout />,
  },
  profile: {
    to: `${PATH.employees}/${USER_ID()}${PATH.profile}`,
    label: 'Links.profile',
    icon: <CgProfile />,
  },
  settings: {
    to: PATH.settings,
    label: 'Links.settings',
    icon: <MdSettings />,
  },
};

export const employeeTableOptions: { [key: string]: TableOption } = {
  first_name: {
    name: 'HeaderOptionsNames.firstName',
    active: false,
    disabled: false,
  },
  last_name: {
    name: 'HeaderOptionsNames.lastName',
    active: false,
    disabled: false,
  },
  email: { name: 'HeaderOptionsNames.email', active: false, disabled: false },
  department_name: {
    name: 'HeaderOptionsNames.department',
    active: false,
    disabled: false,
  },
  position_name: {
    name: 'HeaderOptionsNames.position',
    active: false,
    disabled: false,
  },
};

export const projectsTableOptions: { [key: string]: TableOption } = {
  name: { name: 'HeaderOptionsNames.name', active: false, disabled: false },
  internal_name: {
    name: 'HeaderOptionsNames.internalName',
    active: false,
    disabled: false,
  },
  domain: { name: 'HeaderOptionsNames.domain', active: false, disabled: false },
  start_date: {
    name: 'HeaderOptionsNames.startDate',
    active: false,
    disabled: false,
  },
  end_date: {
    name: 'HeaderOptionsNames.endDate',
    active: false,
    disabled: false,
  },
  team_size: {
    name: 'HeaderOptionsNames.teamSize',
    active: false,
    disabled: true,
  },
};

export const cvsTableOptions: { [key: string]: TableOption } = {
  is_template: {
    name: 'HeaderOptionsNames.template',
    active: false,
    disabled: true,
  },
  name: { name: 'HeaderOptionsNames.name', active: false, disabled: false },
  description: {
    name: 'HeaderOptionsNames.description',
    active: false,
    disabled: true,
  },
  email: {
    name: 'HeaderOptionsNames.employee',
    active: false,
    disabled: false,
  },
};

export const departmentsTableOptions: { [key: string]: TableOption } = {
  name: {
    name: 'HeaderOptionsNames.departmentName',
    active: false,
    disabled: false,
  },
};

export const positionsTableOptions: { [key: string]: TableOption } = {
  name: {
    name: 'HeaderOptionsNames.positionName',
    active: false,
    disabled: false,
  },
};

export const skillsTableOptions: { [key: string]: TableOption } = {
  name: {
    name: 'HeaderOptionsNames.skillName',
    active: false,
    disabled: false,
  },
};

export const languagesTableOptions: { [key: string]: TableOption } = {
  iso2: { name: 'HeaderOptionsNames.iso2', active: false, disabled: true },
  name: { name: 'HeaderOptionsNames.language', active: false, disabled: false },
};

export const dropDownOptions: { [key: string]: DropDownOption } = {
  updateUser: {
    to: `${PATH.employees}/${ACTIVE_USER_ID()}`,
    label: 'OptionLabelName.updateEmployee',
  },
  userProfile: {
    to: `${PATH.employees}/${ACTIVE_USER_ID()}`,
    label: 'OptionLabelName.profile',
  },
  removeUser: {
    to: PATH.employees,
    label: 'OptionLabelName.deleteEmployee',
  },
  project: {
    to: `${PATH.projects}/${ACTIVE_PROJECT_ID()}`,
    label: 'OptionLabelName.project',
  },
  removeProject: {
    to: PATH.projects,
    label: 'OptionLabelName.deleteProject',
  },
  cv: {
    to: `${PATH.cvs}/${ACTIVE_CV_ID()}`,
    label: 'OptionLabelName.cv',
  },
  removeCV: {
    to: PATH.cvs,
    label: 'OptionLabelName.deleteCv',
  },
  removeDepartment: {
    to: PATH.departments,
    label: 'OptionLabelName.deleteDepartment',
  },
  department: {
    to: PATH.department,
    label: 'OptionLabelName.updateDepartment',
  },
  removePosition: {
    to: PATH.positions,
    label: 'OptionLabelName.deletePosition',
  },
  position: {
    to: PATH.position,
    label: 'OptionLabelName.updatePosition',
  },
  removeSkill: {
    to: PATH.skills,
    label: 'OptionLabelName.deleteSkill',
  },
  skill: {
    to: PATH.skill,
    label: 'OptionLabelName.updateSkill',
  },
  removeLanguage: {
    to: PATH.languages,
    label: 'OptionLabelName.deleteLanguage',
  },
  language: {
    to: PATH.language,
    label: 'OptionLabelName.updateLanguage',
  },
};

export const tableTypes: { [key: string]: string } = {
  employeesTable: 'employeesTable',
  projectsTable: 'projectsTable',
  cvsTable: 'cvsTable',
  departmentsTable: 'departmentsTable',
  positionsTable: 'positionsTable',
  skillsTable: 'skillsTable',
  languagesTable: 'languagesTable',
};

export const languagesOptions = {
  english: {
    iso: 'en',
    label: 'LanguagesOptions.english',
  },
  russian: {
    iso: 'ru',
    label: 'LanguagesOptions.russian',
  },
};
