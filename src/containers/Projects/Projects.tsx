import React, { FC, useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';

import { GET_PROJECTS } from '../../apollo/queries/projects';
import { Table } from '../../components/Table/Table';
import { dropDownOptions, projectsTableOptions } from '../../shared/constants';
import { ProjectItem } from '../../shared/interfaces/project';
import classes from './Projects.module.scss';

export const Projects: FC<{}> = () => {
  const { loading, data } = useQuery<{ projects: ProjectItem[] }>(GET_PROJECTS);
  const [projects, setProjects] = useState<ProjectItem[] | null>(null);
  const { project, removeProject } = dropDownOptions;

  useEffect(() => {
    if (data) {
      setProjects(data.projects);
    }
  }, [data]);

  const dropDownHandler = (label: string, id: string): void => {};

  return (
    <div className={classes.Projects}>
      <h2>Projects</h2>
      <Table
        items={projects}
        loading={loading}
        headerOptions={projectsTableOptions}
        dropDownOptions={[project, removeProject]}
        dropDownHandler={(label: string, id: string) => {
          dropDownHandler(label, id);
        }}
      />
    </div>
  );
};
