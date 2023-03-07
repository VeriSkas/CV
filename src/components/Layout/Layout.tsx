import React, { FC, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IconContext } from 'react-icons';
import { useQuery, useReactiveVar } from '@apollo/client';

import { Header } from '../UI/Header/Header';
import { SideBar } from '../SideBar/SideBar';
import { DropDown } from '../UI/DropDown/DropDown';
import { links } from '../../constants/constants';
import { GET_USER_LOGO_INFO } from '../../apollo/queries/users';
import { LayoutProps } from '../../types/interfaces/propsInterfaces';
import { UserInfoShort } from '../../types/interfaces/user';
import { Notification } from '../UI/Notification/Notification';
import { PATH } from '../../constants/paths';
import { USER_ID, USER_TOKEN } from '../../apollo/state';
import { LanguageIcon } from '../LanguageIcon/LanguageIcon';
import classes from './Layout.module.scss';

export const Layout: FC<LayoutProps> = ({
  auth,
  login,
  errorMessage,
  setErrorMessage,
  children,
}) => {
  const userId = useReactiveVar(USER_ID);
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
    if (errorMessage) {
      setIsOpenNotification(true);
    }
  }, [errorMessage]);

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
      USER_TOKEN('');
      auth(false);
    }
  };

  const onCloseNotification = (status: boolean): void => {
    setIsOpenNotification(false);
    setErrorMessage('');
  };

  return (
    <>
      {login ? (
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
                      onClick={(label: string) => {
                        onCloseDropDown(label);
                      }}
                      onCloseHandler={() => {
                        setIsOpenDropDown(false);
                      }}
                    />
                  )}
                </div>
                <LanguageIcon />
              </div>
            </div>
          </Header>
          <div className={classes.Container}>{children}</div>
        </div>
      ) : (
        <div>{children}</div>
      )}
      {errorMessage && isOpenNotification && (
        <Notification
          message={errorMessage}
          onCloseHandler={(status: boolean) => {
            onCloseNotification(status);
          }}
        />
      )}
    </>
  );
};
