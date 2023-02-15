import React, { FC, useEffect, useState } from 'react';

import {
  OperationVariables,
  useMutation,
  useQuery,
  useReactiveVar,
} from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import { DELETE_USER, GET_USERS } from '../../apollo/queries/users';
import { ACTIVE_USER_ID, MAIN_ROLE } from '../../apollo/state';

import { TablePageContainer } from '../../components/TablePageContainer/TablePageContainer';
import { dropDownOptions, Roles } from '../../constants/constants';
import { MainPagesInfo } from '../../constants/mainPagesInfo';
import { PATH } from '../../constants/paths';
import { TableUser, UserInfo } from '../../types/interfaces/user';
import { LSItems } from '../../constants/variables';

export const Employees: FC<{
  setError: (error: string) => void,
}> = ({ setError }) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<TableUser[] | null>(null);
  const { loading, data, error } = useQuery<
    { users: UserInfo[] },
    OperationVariables
  >(GET_USERS);
  const [deleteUser] = useMutation(DELETE_USER);
  const role = useReactiveVar(MAIN_ROLE);
  const mainPagesInfo =
    role === Roles.admin.id
      ? MainPagesInfo.employeesPage
      : MainPagesInfo.employeesPageUser;

  useEffect(() => {
    if (data?.users) {
      const newUsers = data?.users.map((user) => ({
        id: user.id,
        avatar: user.profile.avatar,
        first_name: user.profile.first_name ?? '',
        last_name: user.profile.last_name ?? '',
        email: user.email,
        department_name: user.department_name ?? null,
        position_name: user.position_name ?? null,
      }));
      setUsers(newUsers);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      setError(error.message);
    }
  }, [error]);

  const dropDownHandler = (label: string, id: string): void => {
    if (label === dropDownOptions.removeUser.label) {
      void deleteUser({
        variables: {
          id,
        },
        update(cache) {
          cache.modify({
            fields: {
              getUsers(users = []) {
                return users.filter(
                  (userItem: { __ref: string }) =>
                    userItem.__ref !== `User: ${id}`
                );
              },
            },
          });
        },
      });
    }

    if (
      label === dropDownOptions.updateUser.label ||
      label === dropDownOptions.userProfile.label
    ) {
      navigate(`${PATH.employees}/${id}`);
      localStorage.setItem(LSItems.activeUser, id);
      ACTIVE_USER_ID(id);
    }
  };

  return (
    <TablePageContainer
      mainPagesInfo={mainPagesInfo}
      tableItems={users}
      loading={loading}
      dropDownHandler={dropDownHandler}
    />
  );
};
