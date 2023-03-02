import { MAX_photoSize, PhotoTypes } from './constants';

export const InputTypes = {
  text: 'text',
  email: 'email',
  password: 'password',
  select: 'select',
  radio: 'radio',
  number: 'number',
  date: 'date',
};

export const InputLabels = {
  email: 'email',
  password: 'password',
  firstName: 'first_name',
  lastName: 'last_name',
  fullName: 'full_name',
  department: 'departmentId',
  position: 'positionId',
  description: 'description',
  name: 'name',
  internalName: 'internal_name',
  domain: 'domain',
  skill: 'skill',
  skills: 'skills',
  skillsIds: 'skillsIds',
  projectsIds: 'projectsIds',
  language: 'language',
  languages: 'languages',
  nativeName: 'native_name',
  iso2: 'iso2',
  role: 'role',
  teamSize: 'team_size',
  startDate: 'start_date',
  endDate: 'end_date',
};

export const InputLabelNames = {
  email: 'Email',
  password: 'Password',
  firstName: 'First Name',
  lastName: 'Last Name',
  fullName: 'User Full Name',
  department: 'Department',
  position: 'Position',
  projects: 'Projects',
  description: 'Description',
  name: 'Name',
  internalName: 'Internal name',
  skill: 'Skill',
  skills: 'Skills',
  language: 'Language',
  languages: 'Languages',
  nativeName: 'Native name',
  iso2: 'Iso2 code',
  role: 'Role',
  domain: 'Domain',
  teamSize: 'Team size',
  startDate: 'Start date',
  endDate: 'End date',
};

export const ErrorMessages = {
  inputRequired: 'You should enter something',
  inputMinNumber: (value: number) => `Value can't be less than ${value}`,
  inputMaxNumber: (value: number) => `Value can't be more than ${value}`,
  inputMinLength: (value: number) =>
    `You should enter ${value} symbols or more`,
  inputMaxLength: (value: number) =>
    `You should enter less then ${value} symbols`,
  inputEmail: 'Enter valid email',
  avatarSize: `Photo size have to be less ${MAX_photoSize} bites`,
  avatarType: `You can add photo with only ${Object.keys(PhotoTypes).join(
    ' '
  )} types.`,
  default: 'Error',
  toggleTemplateError: 'You can`t update not your own CV',
};

export const BAErrorMessages = {
  unauthorized: 'Unauthorized',
};

export const TitleText = {
  authTitle: 'Welcome Back',
  signUpTitle: 'Register Now',
  createEmployee: 'Create Employee',
  cvDetails: 'CV Details',
  cvs: 'CVs',
  createCV: 'Create new CV',
  employees: 'Employees',
  profile: 'Profile',
  projects: 'Projects',
  projectDetails: 'Project details',
  createProject: 'Create project',
  login: 'Login',
  signUp: 'SignUp',
  updateUser: 'Update User',
  departments: 'Departments',
  createDepartment: 'Create department',
  updateDepartment: 'Update department',
  positions: 'Positions',
  createPosition: 'Create position',
  updatePosition: 'Update position',
  skills: 'Skills',
  createSkill: 'Create skill',
  updateSkill: 'Update skill',
  languages: 'Languages',
  createLanguage: 'Create language',
  updateLanguage: 'Update language',
};

export const SubtitleText = {
  authSubtitle: 'Hello again! Sign in to continue.',
  signUpSubtitle: 'Welcome! Sign up to continue.',
};

export const ContentText = {
  noValues: 'No values',
  loading: 'Loading...',
  noEndDate: 'Till now',
};

export const BtnText = {
  authSubmitBtn: 'Sign in',
  authResetPasswordBtn: 'Reset password',
  signUpSubmitBtn: 'Sign up',
  saveChanges: 'Save changes',
  return: 'Return',
  returnBtn: 'I already have an account',
  createEmployee: 'Create employee',
  createCV: 'Create new CV',
  createProject: 'Create project',
  createDepartment: 'Create department',
  createPosition: 'Create position',
  createSkill: 'Create skill',
  createLanguage: 'Create language',
};

export const TooltipText = {
  deleteAvatar: 'Delete avatar',
  addAvatar: 'Add new avatar',
};

export const PlaceholderText = {
  search: 'Search',
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
