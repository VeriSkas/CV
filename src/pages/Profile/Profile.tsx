import React, { FC, useEffect } from 'react';

import {
  OperationVariables,
  useMutation,
  useQuery,
  useReactiveVar,
} from '@apollo/client';
import { useTranslation } from 'react-i18next';

import { GET_USER, UPDATE_USER } from 'queries/users';
import { IEmployeeForm } from 'interfaces/interfaces';
import { EmployeeForm } from 'myComponents/EmployeeForm/EmployeeForm';
import { UpdatedUser, UserInfo } from 'interfaces/user';
import { FormContainer } from 'myComponents/FormContainer/FormContainer';
import { TypeForm } from 'constants/variables';
import { USER_ID } from 'apollo/state';
import { openNotification } from 'uiComponents/Notification/Notification';
import 'i18n/i18n';

export const Profile: FC<{}> = () => {
  const { t } = useTranslation();
  const userID = useReactiveVar(USER_ID);
  const { loading, data } = useQuery<{ user: UserInfo }, OperationVariables>(
    GET_USER,
    {
      variables: {
        id: userID,
      },
    }
  );
  const [updateProfile, { error }] = useMutation(UPDATE_USER);

  useEffect(() => {
    if (error) {
      openNotification(error.message);
    }
  }, [error]);

  const updateUser = (
    {
      first_name,
      last_name,
      skills,
      languages,
      departmentId,
      positionId,
    }: IEmployeeForm,
    id?: string
  ): void => {
    const updatedUser: UpdatedUser = {
      profile: {
        first_name,
        last_name,
        skills,
        languages,
      },
      cvsIds: data?.user.cvs?.reduce((cv) => [...cv], []) ?? [],
      departmentId,
      positionId,
    };

    void updateProfile({
      variables: {
        id,
        user: updatedUser,
      },
    });
  };

  return (
    <FormContainer title={t('TitleText.profile')}>
      <>
        {loading && t('ContentText.loading')}
        {data && (
          <EmployeeForm
            user={data.user}
            onSubmitForm={(value, id) => {
              updateUser(value, id);
            }}
            type={TypeForm.profileType}
          />
        )}
      </>
    </FormContainer>
  );
};
