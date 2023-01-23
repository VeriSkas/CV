import React, { FC, useState } from 'react';

import { useMutation } from '@apollo/client';
import { SlOptionsVertical } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';

import { DELETE_USER } from '../../apollo/queries/users';
import { employeeDropDownOptions } from '../../shared/constants';
import { UserInfo } from '../../shared/interfaces';
import { DropDown } from '../UI/DropDown/DropDown';
import classes from './TableRow.module.scss';

export const TableRow: FC<{ user: UserInfo }> = ({ user }) => {
  const { updateUser, removeUser } = employeeDropDownOptions;
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const navigate = useNavigate();
  const [deleteUser] = useMutation(DELETE_USER, {
    update(cache) {
      cache.modify({
        fields: {
          getUsers(users = []) {
            return users.filter(
              (userItem: { __ref: string }) =>
                userItem.__ref !== `User: ${user.id}`
            );
          },
        },
      });
    },
  });

  const toggleDropDown = (): void => {
    setIsOpenDropDown((prev) => !prev);
  };

  const onCloseDropDown = (label: string): void => {
    if (label === 'Delete employee') {
      void deleteUser({
        variables: {
          id: user.id,
        },
      });
    }

    if (label === 'Update employee') {
      navigate(`/employees/${user.id}`);
      localStorage.setItem('activeUser', user.id);
    }
  };

  return (
    <div className={classes.TableRow}>
      <div className={classes.Item}>
        {user.profile.avatar ? (
          <img src={user.profile.avatar} className={classes.UserAvatar} />
        ) : (
          <div className={classes.UserLogo}>{user.email[0] || ' '}</div>
        )}
      </div>
      <div className={classes.Item}>{user.profile.firstName}</div>
      <div className={classes.Item}>{user.profile.lastName}</div>
      <div className={classes.Item}>{user.email}</div>
      <div className={classes.Item}>{user.department}</div>
      <div className={classes.Item}>{user.position}</div>
      <div className={classes.Item}>
        <div className={classes.Options} onClick={toggleDropDown}>
          <SlOptionsVertical />
          {isOpenDropDown && (
            <DropDown
              options={[updateUser, removeUser]}
              onClose={(label: string) => {
                onCloseDropDown(label);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
