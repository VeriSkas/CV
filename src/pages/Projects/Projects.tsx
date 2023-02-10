import React, { FC, useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';

import { GET_PROJECTS } from '../../apollo/queries/projects';
import { Table } from '../../components/Table/Table';
import {
  dropDownOptions,
  projectsTableOptions,
} from '../../constants/constants';
import { ProjectItem } from '../../types/interfaces/project';
import { BtnText, PlaceholderText, TitleText } from '../../constants/text';
import { PATH } from '../../constants/paths';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { SearchKey } from '../../constants/variables';

export const Projects: FC<{}> = () => {
  const { t } = useTranslation();
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
    <SearchBar
      linkTo={PATH.createProject}
      btnText={t(BtnText.createProject)}
      title={t(TitleText.projects)}
      placeholder={t(PlaceholderText.search)}
      onChangeSearch={(value) => {
        setSearchValue(value);
      }}
    >
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
          searchKey: [SearchKey.name, SearchKey.internal_name],
        }}
      />
    </SearchBar>
  );
};
