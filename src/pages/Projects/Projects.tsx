import React, { FC, useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';

import { GET_PROJECTS } from '../../apollo/queries/projects';
import { Table } from '../../components/Table/Table';
import {
  dropDownOptions,
  projectsTableOptions,
} from '../../constants/constants';
import { ProjectItem } from '../../interfaces/project';
import classes from './Projects.module.scss';
import { Search } from '../../components/Search/Search';
import { Button } from '../../components/UI/Button/Button';
import { Link } from 'react-router-dom';

export const Projects: FC<{}> = () => {
  const { loading, data } = useQuery<{ projects: ProjectItem[] }>(GET_PROJECTS);
  const [projects, setProjects] = useState<ProjectItem[] | null>(null);
  const [searchValue, setSearchValue] = useState('');
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
      <div className={classes.SearchPanel}>
        <div className={classes.Search}>
          <Search
            placeholder="Search"
            value={searchValue}
            onChange={(value) => {
              setSearchValue(value);
            }}
          />
        </div>
        <div>
          <Link to={'/projects/createProject'}>
            <Button type="transparentWithBorder">Create project</Button>
          </Link>
        </div>
      </div>
      <Table
        items={projects}
        loading={loading}
        headerOptions={projectsTableOptions}
        dropDownOptions={[project, removeProject]}
        dropDownHandler={(label: string, id: string) => {
          dropDownHandler(label, id);
        }}
        searchValue={{
          value: searchValue,
          searchKey: ['name', 'internal_name'],
        }}
      />
    </div>
  );
};
