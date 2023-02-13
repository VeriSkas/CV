import React, { FC, useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';

import { GET_SKILLS } from '../../apollo/queries/skills';
import { Skill } from '../../types/interfaces/skills';
import { TablePageContainer } from '../../components/TablePageContainer/TablePageContainer';
import { MainPagesInfo } from '../../constants/mainPagesInfo';

export const Skills: FC<{ setError: (error: string) => void }> = ({
  setError,
}) => {
  const [skills, setSkills] = useState<Skill[] | null>(null);
  const { data, error, loading } = useQuery<{ skills: Skill[] }>(GET_SKILLS);

  useEffect(() => {
    if (data) {
      setSkills(data.skills);
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
    <TablePageContainer
      mainPagesInfo={MainPagesInfo.skillsPage}
      tableItems={skills}
      loading={loading}
      dropDownHandler={dropDownHandler}
    />
  );
};
