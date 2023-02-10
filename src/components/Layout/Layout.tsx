import React, { FC, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IconContext } from 'react-icons';
import { useQuery } from '@apollo/client';

import { Header } from '../UI/Header/Header';
import { SideBar } from '../SideBar/SideBar';
import { DropDown } from '../UI/DropDown/DropDown';
import { links } from '../../constants/constants';
import classes from './Layout.module.scss';
import { GET_USER_LOGO_INFO } from '../../apollo/queries/users';
import { LayoutProps } from '../../types/interfaces/propsInterfaces';
import { UserInfoShort } from '../../types/interfaces/user';
import { Notification } from '../UI/Notification/Notification';
import { PATH } from '../../constants/paths';
import { LSItems } from '../../constants/variables';

export const Layout: FC<LayoutProps> = (props) => {
  const userId = localStorage.getItem(LSItems.userId) ?? '';
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const [isOpenNotification, setIsOpenNotification] = useState<boolean>(true);
  const { data: UserInfo } = useQuery<{ user: UserInfoShort }>(
    GET_USER_LOGO_INFO,
    {
      variables: { id: userId },
    }
  );
  const navigate = useNavigate();
  const { profile, settings, logout } = links;
  const dropdownOptions = [profile, settings, logout];

  useEffect(() => {
    if (props.errorMessage) {
      setIsOpenNotification(true);
    }
  }, [props.errorMessage]);

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
    if (label === links.profile.label) {
      navigate(`${PATH.employees}/${userId}${PATH.profile}`);
    }
    if (label === links.logout.label) {
      localStorage.clear();
      props.auth(false);
    }
  };

  const onCloseNotification = (status: boolean): void => {
    setIsOpenNotification(false);
    props.setErrorMessage('');
  };

  return (
    <>
      {props.login ? (
        <div className={classes.Layout}>
          <SideBar onClose={onClose} isOpen={isOpenSidebar} />
          <Header>
            <div className={classes.Header}>
              <div className={classes.MenuIcon} onClick={onOpen}>
                <IconContext.Provider value={{ className: classes.Icon }}>
                  <GiHamburgerMenu />
                </IconContext.Provider>
              </div>
              <div className={classes.UserInfo}>
                <span className={classes.UserEmail}>
                  {UserInfo?.user.email ?? ''}
                </span>
                <div className={classes.UserLogo} onClick={toggleDropDown}>
                  <div className={classes.Avatar}>
                    {UserInfo?.user.profile.avatar ? (
                      <img src={UserInfo?.user.profile.avatar} />
                    ) : (
                      <span className={classes.UserLetter}>
                        {UserInfo?.user.email[0] ?? ''}
                      </span>
                    )}
                  </div>
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
          <div className={classes.Container}>{props.children}</div>
        </div>
      ) : (
        <div>{props.children}</div>
      )}
      {props.errorMessage && isOpenNotification && (
        <Notification
          message={props.errorMessage}
          onCloseHandler={(status: boolean) => {
            onCloseNotification(status);
          }}
        />
      )}
    </>
  );
};
