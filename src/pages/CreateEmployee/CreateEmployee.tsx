import React, { FC, useEffect } from 'react';

import { useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';

import { CREATE_USER, GET_USERS } from '../../apollo/queries/users';
import { CreateEmployeeForm } from '../../components/CreateEmployeeForm/CreateEmployeeForm';
import { FormContainer } from '../../components/FormContainer/FormContainer';
import { Roles } from '../../constants/constants';
import { TitleText } from '../../constants/text';
import { NewEmployeeForm } from '../../types/interfaces/interfaces';
import { UserInfo } from '../../types/interfaces/user';

export const CreateEmployee: FC<{ setError: (error: string) => void }> = ({
  setError,
}) => {
  const { t } = useTranslation();
  const [createUser, { error }] = useMutation(CREATE_USER);

  useEffect(() => {
    if (error) {
      setError(error.message);
    }
  }, [error]);

  const createEmployee = async (data: NewEmployeeForm): Promise<void> => {
    const {
      departmentId,
      email,
      first_name,
      languages,
      last_name,
      password,
      positionId,
      role,
      skills,
    } = data;
    const employee = {
      auth: { email, password },
      profile: { first_name, last_name, skills, languages },
      cvsIds: [],
      departmentId: departmentId?.value ?? '',
      positionId: positionId?.value ?? '',
      role: role.value ?? Roles.employee.value,
    };

    await createUser({
      variables: {
        user: employee,
      },
      update(cache, { data: newUser }) {
        const usersData = cache.readQuery<{ users: UserInfo[] }>({
          query: GET_USERS,
        });

        if (usersData) {
          cache.writeQuery({
            query: GET_USERS,
            data: {
              users: [newUser.createUser, ...usersData.users],
            },
          });
        }
      },
    });
  };

  return (
    <FormContainer title={t(TitleText.createEmployee)}>
      <CreateEmployeeForm onSubmitForm={createEmployee} />
    </FormContainer>
  );
};
