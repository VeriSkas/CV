import React, { FC } from 'react';

import { OperationVariables, useMutation, useQuery } from '@apollo/client';

import { GET_USER, UPDATE_USER } from '../../apollo/queries/users';
import { EmployeeForm } from '../../components/EmployeeForm/EmployeeForm';
import { Inputs } from '../../shared/interfaces/interfaces';
import classes from './UpdateEmployee.module.scss';
import { TypeEmployeeForm } from '../../shared/constants';
import { UpdatedUser, UserInfo } from '../../shared/interfaces/user';

export const UpdateEmployee: FC<{}> = () => {
  const { loading, data } = useQuery<{ user: UserInfo }, OperationVariables>(
    GET_USER,
    {
      variables: {
        id: localStorage.getItem('activeUser') ?? '',
      },
    }
  );
  const [updateUser] = useMutation(UPDATE_USER);

  const updateEmployee = (
    { first_name, last_name }: Inputs,
    id?: string
  ): void => {
    const updatedUser: UpdatedUser = {
      profile: {
        first_name,
        last_name,
        skills: data?.user.profile.skills ?? [],
        languages: data?.user.profile.languages ?? [],
      },
      cvsIds: data?.user.cvs?.reduce((sv) => [...sv], []) ?? [],
      departmentId: data?.user.department?.id ?? '',
      positionId: data?.user.position?.id ?? '',
    };

    void updateUser({
      variables: {
        id,
        user: updatedUser,
      },
    });
  };

  return (
    <div className={classes.UpdateEmployee}>
      {loading ? (
        'Loading...'
      ) : (
        <div className={classes.Container}>
          <h2 className={classes.Title}>Update User</h2>
          {data && (
            <EmployeeForm
              user={data.user}
              onSubmitForm={(data, id) => {
                updateEmployee(data, id);
              }}
              type={TypeEmployeeForm.updateEmployee}
            />
          )}
        </div>
      )}
    </div>
  );
};
