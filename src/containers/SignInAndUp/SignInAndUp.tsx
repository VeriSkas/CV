import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { Header } from '../../components/UI/Header/Header';
import classes from './SignInAndUp.module.scss';

export const SignInAndUp = () => {
  return (
    <>
      <Header>
        <div className={classes.Header}>
          <NavLink
            to={'/login'}
            className={({ isActive }) => (isActive ? classes.Active : '')}
          >
            <span className={classes.HeaderBtn}>Login</span>
          </NavLink>
          <NavLink
            to={'/signup'}
            className={({ isActive }) => (isActive ? classes.Active : '')}
          >
            <span className={classes.HeaderBtn}>SignUp</span>
          </NavLink>
        </div>
      </Header>
      <div className={classes.Content}>
        <Outlet />
      </div>
    </>
  );
};
