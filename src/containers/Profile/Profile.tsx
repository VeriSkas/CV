import React, { FC } from 'react';

import { OperationVariables, useQuery } from '@apollo/client';

import { GET_USER } from '../../apollo/queries/users';
import classes from './Profile.module.scss';
import { UserInfo } from '../../shared/interfaces';
import { EmployeeForm } from '../../components/EmployeeForm/EmployeeForm';

export const Profile: FC<{}> = () => {
  const { loading, data } = useQuery<{ user: UserInfo }, OperationVariables>(
    GET_USER,
    {
      variables: {
        id: localStorage.getItem('userId') ?? '',
      },
    }
  );

  return (
    <div className={classes.Profile}>
      {loading ? (
        'Loading...'
      ) : (
        <div className={classes.ProfileContainer}>
          <h2 className={classes.Title}>Profile</h2>
          {data && <EmployeeForm user={data.user} />}
        </div>
      )}
    </div>
  );
};
