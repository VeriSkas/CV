import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Breadcrumbs } from '../../components/UI/Breadcrumbs/Breadcrumbs';

const LanguagesPage: FC<{}> = () => {
  return (
    <>
      <Breadcrumbs />
      <Outlet />
    </>
  );
};

export default LanguagesPage;
