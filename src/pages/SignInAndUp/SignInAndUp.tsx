import React, { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { NavLink, Outlet } from 'react-router-dom';

import { Header } from '../../components/UI/Header/Header';
import { PATH } from '../../constants/paths';
import { TitleText } from '../../constants/text';
import classes from './SignInAndUp.module.scss';

export const SignInAndUp: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header>
        <div className={classes.Header}>
          <NavLink
            to={PATH.login}
            className={({ isActive }) => (isActive ? classes.Active : '')}
          >
            <span className={classes.HeaderBtn}>{t(TitleText.login)}</span>
          </NavLink>
          <NavLink
            to={PATH.signUp}
            className={({ isActive }) => (isActive ? classes.Active : '')}
          >
            <span className={classes.HeaderBtn}>{t(TitleText.signUp)}</span>
          </NavLink>
        </div>
      </Header>
      <div className={classes.Content}>
        <Outlet />
      </div>
    </>
  );
};
