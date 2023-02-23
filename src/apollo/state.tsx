import { makeVar } from '@apollo/client';

import { LSItems } from '../constants/variables';

export const MAIN_ROLE = makeVar(localStorage.getItem(LSItems.role) ?? '');

export const USER_TOKEN = makeVar(localStorage.getItem(LSItems.token) ?? '');

export const USER_ID = makeVar(localStorage.getItem(LSItems.userId) ?? '');

export const ACTIVE_USER_ID = makeVar(
  localStorage.getItem(LSItems.activeUser) ?? ''
);

export const ACTIVE_PROJECT_ID = makeVar(
  localStorage.getItem(LSItems.activeProject) ?? ''
);

export const ACTIVE_CV_ID = makeVar(
  localStorage.getItem(LSItems.activeCV) ?? ''
);

export const ACTIVE_DEPARTMENT_ID = makeVar(
  localStorage.getItem(LSItems.activeDepartment) ?? ''
);

export const ACTIVE_POSITION_ID = makeVar(
  localStorage.getItem(LSItems.activePosition) ?? ''
);
