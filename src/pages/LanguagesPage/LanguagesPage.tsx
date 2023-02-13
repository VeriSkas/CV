import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const LanguagesPage: FC<{}> = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
