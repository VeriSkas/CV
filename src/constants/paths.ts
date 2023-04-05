export const PATH = {
  main: '/',
  login: '/login',
  signUp: '/signup',
  employees: '/employees',
  createEmployee: '/employees/createEmployee',
  createEmployeeAbs: 'createEmployee',
  profile: '/profile',
  userProfile: ':id/profile',
  employee: ':id',
  cvs: '/cvs',
  cv: ':cvId',
  createCV: '/cvs/createCV',
  createProject: '/projects/createProject',
  projects: '/projects',
  project: ':projectId',
  departments: '/departments',
  department: ':departmentId',
  createDepartment: '/departments/createDepartment',
  positions: '/positions',
  position: ':positionId',
  createPosition: '/positions/createPosition',
  skills: '/skills',
  skill: ':skillId',
  createSkill: '/skills/createSkill',
  languages: '/languages',
  language: ':languageId',
  createLanguage: '/languages/createLanguage',
  settings: '/settings',
};

export interface IParams {
  [key: string]: string;
}

export const PARAMS: IParams = {
  employees: 'employee',
  cvs: 'cv',
  projects: 'project',
  skills: 'skill',
  languages: 'language',
  positions: 'position',
  departments: 'department',
};
