import React, { FC, useEffect, useState } from 'react';

import { useQuery, useReactiveVar } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import { GET_PROJECTS } from 'queries/projects';
import { ProjectItem } from 'interfaces/project';
import { MainPagesInfo } from 'constants/mainPagesInfo';
import { TablePageContainer } from 'myComponents/TablePageContainer/TablePageContainer';
import { dropDownOptions, Roles } from 'constants/constants';
import { PATH } from 'constants/paths';
import { LSItems } from 'constants/variables';
import { ACTIVE_PROJECT_ID, MAIN_ROLE } from 'apollo/state';

export const Projects: FC<{}> = () => {
  const navigate = useNavigate();
  const { loading, data } = useQuery<{ projects: ProjectItem[] }>(GET_PROJECTS);
  const [projects, setProjects] = useState<ProjectItem[] | null>(null);
  const role = useReactiveVar(MAIN_ROLE);
  const pagesInfo =
    role === Roles.admin.value
      ? MainPagesInfo.projectsPage
      : MainPagesInfo.projectsPageUser;

  useEffect(() => {
    if (data) {
      setProjects(data.projects);
    }
  }, [data]);

  const dropDownHandler = (label: string, id: string): void => {
    if (label === dropDownOptions.project.label) {
      navigate(`${PATH.projects}/${id}`);
      localStorage.setItem(LSItems.activeProject, id);
      ACTIVE_PROJECT_ID(id);
    }
  };

  return (
    <TablePageContainer
      mainPagesInfo={pagesInfo}
      tableItems={projects}
      loading={loading}
      dropDownHandler={dropDownHandler}
    />
  );
};
