import React, { FC } from 'react';

import { OperationVariables, useQuery } from '@apollo/client';

import { GET_USER } from '../../apollo/queries/users';
import classes from './Profile.module.scss';
import { UserInfo } from '../../shared/interfaces';

export const Profile: FC<{}> = () => {
  const { loading } = useQuery<{ user: UserInfo }, OperationVariables>(
    GET_USER,
    {
      variables: {
        id: localStorage.getItem('userId') ?? '',
      },
    }
  );

  return (
    <div className={classes.Profile}>{loading ? 'Loading...' : 'Profile'}</div>
  );
};
