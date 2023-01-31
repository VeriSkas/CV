import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const EmployeesPage: FC<{}> = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
