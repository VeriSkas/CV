import React, { FC } from 'react';

import { OperationVariables, useMutation, useQuery } from '@apollo/client';

import { GET_USER, UPDATE_USER } from '../../apollo/queries/users';
import classes from './Profile.module.scss';
import { Inputs } from '../../shared/interfaces/interfaces';
import { EmployeeForm } from '../../components/EmployeeForm/EmployeeForm';
import { TypeEmployeeForm } from '../../shared/constants';
import { UpdatedUser, UserInfo } from '../../shared/interfaces/user';

export const Profile: FC<{}> = () => {
  const { loading, data } = useQuery<{ user: UserInfo }, OperationVariables>(
    GET_USER,
    {
      variables: {
        id: localStorage.getItem('userId') ?? '',
      },
    }
  );
  const [updateProfile] = useMutation(UPDATE_USER);

  const updateUser = ({ first_name, last_name }: Inputs, id?: string): void => {
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

    void updateProfile({
      variables: {
        id,
        user: updatedUser,
      },
    });
  };

  return (
    <div className={classes.Profile}>
      {loading ? (
        'Loading...'
      ) : (
        <div className={classes.ProfileContainer}>
          <h2 className={classes.Title}>Profile</h2>
          {data && (
            <EmployeeForm
              user={data.user}
              onSubmitForm={(value, id) => {
                updateUser(value, id);
              }}
              type={TypeEmployeeForm.profileType}
            />
          )}
        </div>
      )}
    </div>
  );
};
