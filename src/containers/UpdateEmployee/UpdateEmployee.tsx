import React, { FC } from 'react';

import { OperationVariables, useQuery } from '@apollo/client';

import { GET_USER } from '../../apollo/queries/users';
import { EmployeeForm } from '../../components/EmployeeForm/EmployeeForm';
import { UserInfo } from '../../shared/interfaces';
import classes from './UpdateEmployee.module.scss';

export const UpdateEmployee: FC<{}> = () => {
  const { loading, data } = useQuery<{ user: UserInfo }, OperationVariables>(
    GET_USER,
    {
      variables: {
        id: localStorage.getItem('activeUser') ?? '',
      },
    }
  );
  return (
    <div className={classes.UpdateEmployee}>
      {loading ? (
        'Loading...'
      ) : (
        <div className={classes.Container}>
          <h2 className={classes.Title}>Update User</h2>
          {data && <EmployeeForm user={data.user} />}
        </div>
      )}
    </div>
  );
};
