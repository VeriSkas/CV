import React, { FC, useEffect } from 'react';

import {
  OperationVariables,
  useMutation,
  useQuery,
  useReactiveVar,
} from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { useOutletContext, useParams } from 'react-router-dom';

import { GET_USER, UPDATE_USER } from 'queries/users';
import { EmployeeForm } from 'myComponents/EmployeeForm/EmployeeForm';
import { IEmployeeForm } from 'interfaces/interfaces';
import { UpdatedUser, UserInfo } from 'interfaces/user';
import { FormContainer } from 'myComponents/FormContainer/FormContainer';
import { TypeForm } from 'constants/variables';
import { ACTIVE_USER_ID, MAIN_ROLE } from 'apollo/state';
import { Roles } from 'constants/constants';
import { openNotification } from 'uiComponents/Notification/Notification';
import { OutletContextType } from 'interfaces/propsInterfaces';
import 'i18n/i18n';

export const UpdateEmployee: FC<{}> = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const setUser = useOutletContext<OutletContextType>();
  const { loading, data, error } = useQuery<
    { user: UserInfo },
    OperationVariables
  >(GET_USER, {
    variables: {
      id,
    },
  });
  const [updateUser, { error: updatedError }] = useMutation(UPDATE_USER);
  const role = useReactiveVar(MAIN_ROLE);

  useEffect(() => {
    if (data) {
      const { first_name, last_name } = data.user.profile;

      setUser(
        first_name || last_name
          ? `${first_name ?? ''} ${last_name ?? ''}`
          : data.user.email
      );
      ACTIVE_USER_ID(id);
    }
  }, [data]);

  useEffect(() => {
    if (updatedError) {
      openNotification(updatedError.message);
    }
  }, [updatedError]);

  useEffect(() => {
    if (error) {
      openNotification(error.message);
    }
  }, [error]);

  const updateEmployee = (
    {
      first_name,
      last_name,
      skills,
      languages,
      departmentId,
      positionId,
      cvsIds,
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
      cvsIds,
      departmentId,
      positionId,
    };

    void updateUser({
      variables: {
        id,
        user: updatedUser,
      },
    });
  };

  return (
    <FormContainer title={t('TitleText.updateUser')}>
      <>
        {loading && t('ContentText.loading')}
        {data && (
          <EmployeeForm
            user={data.user}
            onSubmitForm={(data, id) => {
              updateEmployee(data, id);
            }}
            type={
              role === Roles.admin.value
                ? TypeForm.updateEmployee
                : TypeForm.employeeProfile
            }
          />
        )}
      </>
    </FormContainer>
  );
};
