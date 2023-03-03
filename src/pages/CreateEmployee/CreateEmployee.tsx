import React, { FC, useEffect } from 'react';

import { useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { CREATE_USER, GET_USERS } from '../../apollo/queries/users';
import { CreateEmployeeForm } from '../../components/CreateEmployeeForm/CreateEmployeeForm';
import { FormContainer } from '../../components/FormContainer/FormContainer';
import { Roles } from '../../constants/constants';
import { TitleText } from '../../constants/text';
import { NewEmployeeForm } from '../../types/interfaces/interfaces';
import { UserInfo } from '../../types/interfaces/user';
import { PATH } from '../../constants/paths';
import { LSItems } from '../../constants/variables';
import { ACTIVE_USER_ID } from '../../apollo/state';

export const CreateEmployee: FC<{ setError: (error: string) => void }> = ({
  setError,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [createUser, { error, data }] = useMutation(CREATE_USER);

  useEffect(() => {
    if (error) {
      setError(error.message);
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      const { id } = data.createUser;

      localStorage.setItem(LSItems.activeUser, id);
      ACTIVE_USER_ID(id);
      navigate(PATH.employee);
    }
  }, [data]);

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
      cvsIds,
      role,
      skills,
    } = data;
    const employee = {
      auth: { email, password },
      profile: { first_name, last_name, skills, languages },
      cvsIds: cvsIds ?? [],
      departmentId: departmentId ?? '',
      positionId: positionId ?? '',
      role: role ?? Roles.employee.value,
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
              users: [...usersData.users, newUser.createUser],
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
