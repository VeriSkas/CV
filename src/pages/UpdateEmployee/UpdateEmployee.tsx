import React, { FC } from 'react';

import {
  OperationVariables,
  useMutation,
  useQuery,
  useReactiveVar,
} from '@apollo/client';
import { useTranslation } from 'react-i18next';

import { GET_USER, UPDATE_USER } from '../../apollo/queries/users';
import { EmployeeForm } from '../../components/EmployeeForm/EmployeeForm';
import { IEmployeeForm } from '../../types/interfaces/interfaces';
import { UpdatedUser, UserInfo } from '../../types/interfaces/user';
import { ContentText, TitleText } from '../../constants/text';
import { FormContainer } from '../../components/FormContainer/FormContainer';
import { TypeForm } from '../../constants/variables';
import { ACTIVE_USER_ID, MAIN_ROLE } from '../../apollo/state';
import { Roles } from '../../constants/constants';

export const UpdateEmployee: FC<{ setError: (message: string) => void }> = ({
  setError,
}) => {
  const { t } = useTranslation();
  const activeUserID = useReactiveVar(ACTIVE_USER_ID);
  const { loading, data } = useQuery<{ user: UserInfo }, OperationVariables>(
    GET_USER,
    {
      variables: {
        id: activeUserID,
      },
    }
  );
  const [updateUser] = useMutation(UPDATE_USER);
  const role = useReactiveVar(MAIN_ROLE);

  const updateEmployee = (
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
            type={
              role === Roles.admin.id
                ? TypeForm.updateEmployee
                : TypeForm.employeeProfile
            }
          />
        )}
      </>
    </FormContainer>
  );
};
