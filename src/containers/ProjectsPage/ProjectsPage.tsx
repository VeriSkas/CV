import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const ProjectsPage: FC<{}> = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
