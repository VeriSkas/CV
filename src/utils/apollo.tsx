import { makeVar, ReactiveVar } from '@apollo/client';

export const makeStateVar = (type: string): ReactiveVar<string> =>
  makeVar(localStorage.getItem(type) ?? '');
