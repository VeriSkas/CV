import React, { FC } from 'react';

import { SlOptionsVertical } from 'react-icons/sl';

import { UserInfo } from '../../shared/interfaces';
import classes from './TableRow.module.scss';

export const TableRow: FC<{ user: UserInfo }> = ({ user }) => {
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
        <div className={classes.Options}>
          <SlOptionsVertical />
        </div>
      </div>
    </div>
  );
};
