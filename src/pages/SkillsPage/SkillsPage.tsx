import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Breadcrumbs } from '../../components/UI/Breadcrumbs/Breadcrumbs';

const SkillsPage: FC<{}> = () => (
  <>
    <Breadcrumbs />
    <Outlet />
  </>
);

export default SkillsPage;
