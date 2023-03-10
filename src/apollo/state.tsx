import { makeVar } from '@apollo/client';

import { LSItems } from '../constants/variables';
import { INotification } from '../types/interfaces/notification';
import { makeStateVar } from '../utils/apollo';

export const MAIN_ROLE = makeStateVar(LSItems.role);

export const USER_TOKEN = makeStateVar(LSItems.token);

export const USER_ID = makeStateVar(LSItems.userId);

export const ACTIVE_USER_ID = makeStateVar(LSItems.activeUser);

export const ACTIVE_PROJECT_ID = makeStateVar(LSItems.activeProject);

export const ACTIVE_CV_ID = makeStateVar(LSItems.activeCV);

export const ACTIVE_DEPARTMENT_ID = makeStateVar(LSItems.activeDepartment);

export const ACTIVE_POSITION_ID = makeStateVar(LSItems.activePosition);

export const ACTIVE_SKILL_ID = makeStateVar(LSItems.activeSkill);

export const ACTIVE_LANGUAGE_ID = makeStateVar(LSItems.activeLanguage);

export const NOTIFICATION = makeVar<INotification>({
  isVisible: false,
  message: '',
});
