import React, { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { GiHamburgerMenu } from 'react-icons/gi';
import { IconContext } from 'react-icons';

import { Header } from '../../components/UI/Header/Header';
import { SideBar } from '../../components/SideBar/SideBar';
import { DropDown } from '../../components/UI/DropDown/DropDown';
import { links } from '../../shared/constants';
import classes from './MainPage.module.scss';

export const MainPage: FC<{ auth: (isAuth: boolean) => void }> = (props) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const { profile, settings, logout } = links;
  const dropdownOptions = [profile, settings, logout];
  const email = localStorage.getItem('email') ?? '';

  const onClose = (): void => {
    setIsOpenSidebar(false);
  };

  const onOpen = (): void => {
    setIsOpenSidebar(true);
  };

  const toggleDropDown = (): void => {
    setIsOpenDropDown((prev) => !prev);
  };

  const onCloseDropDown = (label: string): void => {
    if (label === 'Logout') {
      localStorage.clear();

      props.auth(false);
    }
  };

  return (
    <div className={classes.MainPage}>
      <SideBar onClose={onClose} isOpen={isOpenSidebar} />
      <Header>
        <div className={classes.Header}>
          <div className={classes.MenuIcon} onClick={onOpen}>
            <IconContext.Provider value={{ className: classes.Icon }}>
              <GiHamburgerMenu />
            </IconContext.Provider>
          </div>
          <div className={classes.UserInfo}>
            <span className={classes.UserEmail}>{email}</span>
            <div className={classes.UserLogo} onClick={toggleDropDown}>
              <span className={classes.UserLetter}>{email[0]}</span>
              {isOpenDropDown && (
                <DropDown
                  options={dropdownOptions}
                  onClose={(label: string) => {
                    onCloseDropDown(label);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </Header>
      <div className={classes.Container}>
        <Outlet />
      </div>
    </div>
  );
};
