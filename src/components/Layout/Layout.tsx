import React, { FC, useState } from 'react';

import { SideBar } from '../SideBar/SideBar';
import { LayoutProps } from 'interfaces/propsInterfaces';
import { Notification } from 'uiComponents/Notification/Notification';
import { ContentHeader } from '../ContentHeader/ContentHeader';
import classes from './Layout.module.scss';

export const Layout: FC<LayoutProps> = ({ auth, login, children }) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);

  const onOpenSidebar = (isOpen: boolean): void => {
    setIsOpenSidebar(isOpen);
  };

  const onClose = (): void => {
    setIsOpenSidebar(false);
  };

  const setAuth = (isAuth: boolean): void => {
    auth(isAuth);
  };

  return (
    <>
      {login ? (
        <div className={classes.Layout}>
          <SideBar onClose={onClose} isOpen={isOpenSidebar} />
          <ContentHeader setOpenSidebar={onOpenSidebar} setAuth={setAuth} />
          <div className={classes.Container}>{children}</div>
        </div>
      ) : (
        <div>{children}</div>
      )}
      <Notification />
    </>
  );
};
