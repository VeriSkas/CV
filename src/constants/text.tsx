export const InputTypes = {
  text: 'text',
  email: 'email',
  password: 'password',
  select: 'select',
  radio: 'radio',
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
  skill: 'skill',
  skills: 'skills',
  language: 'language',
  languages: 'languages',
};

export const InputLabelNames = {
  email: 'Email',
  password: 'Password',
  firstName: 'First Name',
  lastName: 'Last Name',
  fullName: 'User Full Name',
  department: 'Department',
  position: 'Position',
  description: 'Description',
  name: 'CV name',
  skill: 'Skill',
  skills: 'Skills',
  language: 'Language',
  languages: 'Languages',
};

export const ErrorMessages = {
  inputRequired: 'You should enter something',
  inputMinLength: (value: number) =>
    `You should enter ${value} symbols or more`,
  inputMaxLength: (value: number) =>
    `You should enter less then ${value} symbols`,
  inputEmail: 'Enter valid email',
  avatarSize: 'Photo size have to be less',
  default: 'Error',
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
  login: 'Login',
  signUp: 'SignUp',
  updateUser: 'Update User',
  departments: 'Departments',
  positions: 'Positions',
  skills: 'Skills',
  languages: 'Languages',
};

export const SubtitleText = {
  authSubtitle: 'Hello again! Sign in to continue.',
  signUpSubtitle: 'Welcome! Sign up to continue.',
};

export const ContentText = {
  noValues: 'No values',
  loading: 'Loading...',
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
