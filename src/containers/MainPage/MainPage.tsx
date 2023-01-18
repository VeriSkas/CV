import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { GiHamburgerMenu } from 'react-icons/gi';
import { IconContext } from 'react-icons';

import { Header } from '../../components/UI/Header/Header';
import classes from './MainPage.module.scss';
import { SideBar } from '../../components/SideBar/SideBar';
import { DropDown } from '../../components/UI/DropDown/DropDown';
import { links } from '../../shared/constants';

export const MainPage = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const { profile, settings, logout } = links;
  const dropdownOptions = [profile, settings, logout];

  const onClose = () => {
    setIsOpenSidebar(false);
  };

  const onOpen = () => {
    setIsOpenSidebar(true);
  };

  const toggleDropDown = () => {
    setIsOpenDropDown((prev) => !prev);
  };

  const onCloseDropDown = (label: string) => {
    if (label === 'Logout') {
      localStorage.removeItem('email');
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
            <span className={classes.UserEmail}>sveta@mail.ru</span>
            <div className={classes.UserLogo} onClick={toggleDropDown}>
              <span className={classes.UserLetter}>s</span>
              {isOpenDropDown && (
                <DropDown
                  options={dropdownOptions}
                  onClose={(label: string) => onCloseDropDown(label)}
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
