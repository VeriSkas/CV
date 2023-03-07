import React, { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { NavLink, Outlet } from 'react-router-dom';

import { LanguageIcon } from '../../components/LanguageIcon/LanguageIcon';
import { Header } from '../../components/UI/Header/Header';
import { PATH } from '../../constants/paths';
import classes from './SignInAndUp.module.scss';
import '../../i18n/i18n';

const SignInAndUp: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header>
        <div className={classes.Header}>
          <NavLink
            to={PATH.login}
            className={({ isActive }) => (isActive ? classes.Active : '')}
          >
            <span className={classes.HeaderBtn}>{t('TitleText.login')}</span>
          </NavLink>
          <NavLink
            to={PATH.signUp}
            className={({ isActive }) => (isActive ? classes.Active : '')}
          >
            <span className={classes.HeaderBtn}>{t('TitleText.signUp')}</span>
          </NavLink>
        </div>
        <LanguageIcon />
      </Header>
      <div className={classes.Content}>
        <Outlet />
      </div>
    </>
  );
};

export default SignInAndUp;
