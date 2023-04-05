import React, { FC } from 'react';

import { useQuery, useReactiveVar } from '@apollo/client';
import { Outlet } from 'react-router-dom';

import { GET_SKILLS } from 'queries/skills';
import { ACTIVE_SKILL_ID } from 'apollo/state';
import { Breadcrumbs } from 'uiComponents/Breadcrumbs/Breadcrumbs';
import { Skill } from 'interfaces/skills';

const SkillsPage: FC<{}> = () => {
  const activeSkillID = useReactiveVar(ACTIVE_SKILL_ID);
  const { data } = useQuery<{ skills: Skill[] }>(GET_SKILLS);

  return (
    <>
      <Breadcrumbs
        paramName={
          data?.skills.find((skill: Skill) => skill.id === activeSkillID)?.name
        }
      />
      <Outlet />
    </>
  );
};

export default SkillsPage;
