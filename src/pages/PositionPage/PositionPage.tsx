import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const PositionPage: FC<{}> = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
