import React, { FC, useEffect, useState } from 'react';

import { SideBar } from '../SideBar/SideBar';
import { LayoutProps } from '../../types/interfaces/propsInterfaces';
import { Notification } from '../UI/Notification/Notification';
import { ContentHeader } from '../ContentHeader/ContentHeader';
import classes from './Layout.module.scss';

export const Layout: FC<LayoutProps> = ({
  auth,
  login,
  errorMessage,
  setErrorMessage,
  children,
}) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [isOpenNotification, setIsOpenNotification] = useState<boolean>(true);

  useEffect(() => {
    if (errorMessage) {
      setIsOpenNotification(true);
    }
  }, [errorMessage]);

  const onOpenSidebar = (isOpen: boolean): void => {
    setIsOpenSidebar(isOpen);
  };

  const onClose = (): void => {
    setIsOpenSidebar(false);
  };

  const onCloseNotification = (status: boolean): void => {
    setIsOpenNotification(false);
    setErrorMessage('');
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
