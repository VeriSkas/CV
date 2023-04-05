import React, { FC, useState } from 'react';

import { useReactiveVar } from '@apollo/client';

import { SideBar } from '../SideBar/SideBar';
import { LayoutProps } from 'interfaces/propsInterfaces';
import { Notification } from 'uiComponents/Notification/Notification';
import { ContentHeader } from '../ContentHeader/ContentHeader';
import { USER_TOKEN } from 'apollo/state';
import classes from './Layout.module.scss';

export const Layout: FC<LayoutProps> = ({ children }) => {
  const token = useReactiveVar(USER_TOKEN);
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);

  const onOpenSidebar = (isOpen: boolean): void => {
    setIsOpenSidebar(isOpen);
  };

  const onClose = (): void => {
    setIsOpenSidebar(false);
  };

  return (
    <>
      {token ? (
        <div className={classes.Layout}>
          <SideBar onClose={onClose} isOpen={isOpenSidebar} />
          <ContentHeader setOpenSidebar={onOpenSidebar} />
          <div className={classes.Container}>{children}</div>
        </div>
      ) : (
        <div>{children}</div>
      )}
      <Notification />
    </>
  );
};
