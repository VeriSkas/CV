import React, { FC, useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';

import { GET_PROJECTS } from '../../apollo/queries/projects';
import { ProjectItem } from '../../types/interfaces/project';
import { MainPagesInfo } from '../../constants/mainPagesInfo';
import { TablePageContainer } from '../../components/TablePageContainer/TablePageContainer';

export const Projects: FC<{}> = () => {
  const { loading, data } = useQuery<{ projects: ProjectItem[] }>(GET_PROJECTS);
  const [projects, setProjects] = useState<ProjectItem[] | null>(null);

  useEffect(() => {
    if (data) {
      setProjects(data.projects);
    }
  }, [data]);

  const dropDownHandler = (label: string, id: string): void => {};

  return (
    <TablePageContainer
      mainPagesInfo={MainPagesInfo.projectsPage}
      tableItems={projects}
      loading={loading}
      dropDownHandler={dropDownHandler}
    />
  );
};
