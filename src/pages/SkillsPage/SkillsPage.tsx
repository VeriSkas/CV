import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Breadcrumbs } from '../../components/UI/Breadcrumbs/Breadcrumbs';

export const SkillsPage: FC<{}> = () => (
  <>
    <Breadcrumbs />
    <Outlet />
  </>
);
