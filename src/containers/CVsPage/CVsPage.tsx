import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const CVsPage: FC<{}> = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
