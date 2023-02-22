import React, { FC } from 'react';

import { useQuery, useReactiveVar } from '@apollo/client';
import { Outlet } from 'react-router-dom';

import { GET_PROJECT } from '../../apollo/queries/projects';
import { ACTIVE_PROJECT_ID } from '../../apollo/state';
import { Breadcrumbs } from '../../components/UI/Breadcrumbs/Breadcrumbs';
import { ProjectItem } from '../../types/interfaces/project';

export const ProjectsPage: FC<{}> = () => {
  const activeProjectID = useReactiveVar(ACTIVE_PROJECT_ID);
  const { data } = useQuery<{ project: ProjectItem }>(GET_PROJECT, {
    variables: {
      id: activeProjectID,
    },
  });

  return (
    <>
      <Breadcrumbs paramName={data?.project?.name ?? ''} />
      <Outlet />
    </>
  );
};
