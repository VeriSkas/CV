import React, { FC, useState } from 'react';

import { useQuery, useReactiveVar } from '@apollo/client';
import { IconContext } from 'react-icons';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';

import { GET_USER_LOGO_INFO } from 'queries/users';
import { USER_ID, USER_TOKEN } from 'apollo/state';
import { links } from 'constants/constants';
import { PATH } from 'constants/paths';
import { UserInfoShort } from 'interfaces/user';
import { LanguageIcon } from '../LanguageIcon/LanguageIcon';
import { DropDown } from 'uiComponents/DropDown/DropDown';
import { Header } from 'uiComponents/Header/Header';
import { ContentHeaderProps } from 'interfaces/propsInterfaces';
import classes from './ContentHeader.module.scss';

export const ContentHeader: FC<ContentHeaderProps> = ({
  setOpenSidebar,
  setAuth,
}) => {
  const userId = useReactiveVar(USER_ID);
  const navigate = useNavigate();
  const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false);
  const { data: UserInfo } = useQuery<{ user: UserInfoShort }>(
    GET_USER_LOGO_INFO,
    {
      variables: { id: userId },
    }
  );
  const { profile, settings, logout } = links;
  const dropdownOptions = [profile, settings, logout];

  const onOpen = (): void => {
    setOpenSidebar(true);
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
      setAuth(false);
    }
  };

  return (
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
              />
            )}
          </div>
          <LanguageIcon />
        </div>
      </div>
    </Header>
  );
};
