import React, { FC, useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';

import { GET_SKILLS } from '../../apollo/queries/skills';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Table } from '../../components/Table/Table';
import { dropDownOptions, skillsTableOptions } from '../../constants/constants';
import { PATH } from '../../constants/paths';
import { BtnText, PlaceholderText, TitleText } from '../../constants/text';
import { SearchKey } from '../../constants/variables';
import { Skill } from '../../types/interfaces/skills';

export const Skills: FC<{ setError: (error: string) => void }> = ({
  setError,
}) => {
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState('');
  const [positions, setPositions] = useState<Skill[] | null>(null);
  const { data, error, loading } = useQuery<{ skills: Skill[] }>(GET_SKILLS);
  const { removeSkill, skill } = dropDownOptions;

  useEffect(() => {
    if (data) {
      setPositions(data.skills);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      setError(error.message);
    }
  }, [error]);

  const dropDownHandler = (label: string, id: string): void => {
    console.log(label, id);
  };

  return (
    <SearchBar
      linkTo={PATH.createSkill}
      btnText={t(BtnText.createSkill)}
      title={t(TitleText.skills)}
      placeholder={t(PlaceholderText.search)}
      onChangeSearch={(value) => {
        setSearchValue(value);
      }}
    >
      <Table
        items={positions}
        loading={loading}
        headerOptions={skillsTableOptions}
        dropDownOptions={[skill, removeSkill]}
        dropDownHandler={(label: string, id: string) => {
          dropDownHandler(label, id);
        }}
        searchValue={{
          value: searchValue,
          searchKey: [SearchKey.name],
        }}
      />
    </SearchBar>
  );
};
