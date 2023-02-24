import React, { FC, useEffect, useState } from 'react';

import { useMutation, useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import { DELETE_SKILL, GET_SKILLS } from '../../apollo/queries/skills';
import { Skill } from '../../types/interfaces/skills';
import { TablePageContainer } from '../../components/TablePageContainer/TablePageContainer';
import { MainPagesInfo } from '../../constants/mainPagesInfo';
import { dropDownOptions } from '../../constants/constants';
import { PATH } from '../../constants/paths';
import { LSItems } from '../../constants/variables';
import { ACTIVE_SKILL_ID } from '../../apollo/state';

export const Skills: FC<{ setError: (error: string) => void }> = ({
  setError,
}) => {
  const navigate = useNavigate();
  const [skills, setSkills] = useState<Skill[] | null>(null);
  const { data, error, loading } = useQuery<{ skills: Skill[] }>(GET_SKILLS);
  const [removeSkill, { error: removeError }] = useMutation(DELETE_SKILL);

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

  useEffect(() => {
    if (removeError) {
      setError(removeError.message);
    }
  }, [removeError]);

  const dropDownHandler = async (label: string, id: string): Promise<void> => {
    if (label === dropDownOptions.skill.label) {
      navigate(`${PATH.skills}/${id}`);
      localStorage.setItem(LSItems.activeSkill, id);
      ACTIVE_SKILL_ID(id);
    }

    if (label === dropDownOptions.removeSkill.label) {
      await deleteSkill(id);
    }
  };

  const deleteSkill = async (id: string): Promise<void> => {
    await removeSkill({
      variables: { id },
      update(cache) {
        const skillsWithoutDeletedFromCache = cache
          .readQuery<{ skills: Skill[] }>({
            query: GET_SKILLS,
          })
          ?.skills.filter((skill) => skill.id !== id);

        if (skillsWithoutDeletedFromCache) {
          cache.writeQuery({
            query: GET_SKILLS,
            data: {
              skills: [...skillsWithoutDeletedFromCache],
            },
          });
        }
      },
    });
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
