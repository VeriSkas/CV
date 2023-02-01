import React, { FC, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { OperationVariables, useMutation, useQuery } from '@apollo/client';

import { DELETE_USER, GET_USERS } from '../../apollo/queries/users';
import {
  dropDownOptions,
  employeeTableOptions,
} from '../../constants/constants';
import { Table } from '../Table/Table';
import { TableUser, UserInfo } from '../../interfaces/user';
import { SearchValue } from '../../interfaces/propsInterfaces';

export const EmployeesTable: FC<{ searchValue: SearchValue }> = ({
  searchValue,
}) => {
  const { updateUser, removeUser } = dropDownOptions;
  const navigate = useNavigate();
  const [users, setUsers] = useState<TableUser[] | null>(null);
  const { loading, data } = useQuery<{ users: UserInfo[] }, OperationVariables>(
    GET_USERS
  );
  const [deleteUser] = useMutation(DELETE_USER);

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

    if (label === dropDownOptions.updateUser.label) {
      navigate(`/employees/${id}`);
      localStorage.setItem('activeUser', id);
    }
  };

  return (
    <Table
      items={users}
      loading={loading}
      headerOptions={employeeTableOptions}
      dropDownOptions={[updateUser, removeUser]}
      dropDownHandler={(label: string, id: string) => {
        dropDownHandler(label, id);
      }}
      searchValue={searchValue}
    />
  );
};
