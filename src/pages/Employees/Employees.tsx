import React, { FC, useEffect, useState } from 'react';

import { useMutation, useQuery, useReactiveVar } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import { DELETE_USER, GET_USERS } from 'queries/users';
import { ACTIVE_USER_ID, MAIN_ROLE, USER_ID } from 'apollo/state';
import { TablePageContainer } from 'myComponents/TablePageContainer/TablePageContainer';
import { dropDownOptions, Roles } from 'constants/constants';
import { MainPagesInfo } from 'constants/mainPagesInfo';
import { PATH } from 'constants/paths';
import { TableUser, UserInfo } from 'interfaces/user';
import { LSItems } from 'constants/variables';
import { openNotification } from 'uiComponents/Notification/Notification';

export const Employees: FC<{}> = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<TableUser[] | null>(null);
  const { loading, data, error } = useQuery<{ users: UserInfo[] }>(GET_USERS);
  const [deleteUser, { error: deleteError }] = useMutation(DELETE_USER);
  const role = useReactiveVar(MAIN_ROLE);
  const userId = useReactiveVar(USER_ID);
  const mainPagesInfo =
    role === Roles.admin.value
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
      openNotification(error.message);
    }
  }, [error]);

  useEffect(() => {
    if (deleteError) {
      openNotification(deleteError.message);
    }
  }, [deleteError]);

  const dropDownHandler = async (label: string, id: string): Promise<void> => {
    if (label === dropDownOptions.removeUser.label) {
      await deleteUser({
        variables: {
          id,
        },
        update(cache) {
          const usersData = cache
            .readQuery<{ users: UserInfo[] }>({
              query: GET_USERS,
            })
            ?.users.filter((user) => user.id !== id);

          if (usersData) {
            cache.writeQuery({
              query: GET_USERS,
              data: {
                users: [...usersData],
              },
            });
          }
        },
      });
    }

    if (label === dropDownOptions.userProfile.label && userId === id) {
      navigate(`${PATH.employees}/${id}${PATH.profile}`);
      localStorage.setItem(LSItems.activeUser, id);
      ACTIVE_USER_ID(id);

      return;
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
