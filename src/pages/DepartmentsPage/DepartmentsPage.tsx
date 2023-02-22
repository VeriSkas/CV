import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Breadcrumbs } from '../../components/UI/Breadcrumbs/Breadcrumbs';

export const DepartmentsPage: FC<{}> = () => {
  return (
    <>
      <Breadcrumbs />
      <Outlet />
    </>
  );
};
