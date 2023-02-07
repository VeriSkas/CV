import React, { FC } from 'react';

import { OperationVariables, useMutation, useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';

import { GET_USER, UPDATE_USER } from '../../apollo/queries/users';
import { EmployeeForm } from '../../components/EmployeeForm/EmployeeForm';
import { Inputs } from '../../interfaces/interfaces';
import { LSItems, TypeForm } from '../../constants/constants';
import { UpdatedUser, UserInfo } from '../../interfaces/user';
import { ContentText, TitleText } from '../../constants/text';
import { FormContainer } from '../../components/FormContainer/FormContainer';

export const UpdateEmployee: FC<{ setError: (message: string) => void }> = ({
  setError,
}) => {
  const { t } = useTranslation();
  const { loading, data } = useQuery<{ user: UserInfo }, OperationVariables>(
    GET_USER,
    {
      variables: {
        id: localStorage.getItem(LSItems.activeUser) ?? '',
      },
    }
  );
  const [updateUser] = useMutation(UPDATE_USER);

  const updateEmployee = (
    { first_name, last_name, departmentId, positionId }: Inputs,
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
    <FormContainer title={t(TitleText.updateUser)}>
      <>
        {loading && t(ContentText.loading)}
        {data && (
          <EmployeeForm
            user={data.user}
            onSubmitForm={(data, id) => {
              updateEmployee(data, id);
            }}
            setError={(message: string) => {
              setError(message);
            }}
            type={TypeForm.updateEmployee}
          />
        )}
      </>
    </FormContainer>
  );
};
