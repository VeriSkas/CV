import { useQuery } from '@apollo/client';

import { GET_DEPARTMENTS_AS_OPTIONS } from 'queries/departments';
import { GET_POSITIONS_AS_OPTIONS } from 'queries/positions';
import { Roles } from 'constants/constants';
import { InputLabels } from 'constants/text';
import { OptionsType } from 'interfaces/propsInterfaces';
import { GET_SKILLS_AS_OPTIONS } from 'queries/skills';
import { GET_PROJECTS_OPTIONS } from 'queries/projects';
import { GET_LANGUAGES_AS_OPTIONS } from 'queries/languages';
import { GET_CVS_AS_OPTIONS } from 'queries/cvs';
import { GET_USERS_AS_OPTIONS } from 'queries/users';

export const useOptions = (label: string): OptionsType[] => {
  const { data: departments } = useQuery<{ departments: OptionsType[] }>(
    GET_DEPARTMENTS_AS_OPTIONS
  );
  const { data: positions } = useQuery<{ positions: OptionsType[] }>(
    GET_POSITIONS_AS_OPTIONS
  );
  const { data: skills } = useQuery<{ skills: OptionsType[] }>(
    GET_SKILLS_AS_OPTIONS
  );
  const { data: projects } = useQuery<{ projects: OptionsType[] }>(
    GET_PROJECTS_OPTIONS
  );
  const { data: languages } = useQuery<{ languages: OptionsType[] }>(
    GET_LANGUAGES_AS_OPTIONS
  );
  const { data: users } = useQuery<{ users: OptionsType[] }>(
    GET_USERS_AS_OPTIONS
  );
  const { data: cvs } = useQuery<{ cvs: OptionsType[] }>(GET_CVS_AS_OPTIONS);

  switch (label) {
    case InputLabels.department:
      return departments ? departments.departments : [];
    case InputLabels.position:
      return positions ? positions.positions : [];
    case InputLabels.role:
      return [...Object.values(Roles)];
    case InputLabels.cvsIds:
      return cvs ? cvs.cvs : [];
    case InputLabels.userId:
      return users ? users.users : [];
    case InputLabels.skillsIds:
      return skills ? skills.skills : [];
    case InputLabels.skills:
      return skills
        ? skills.skills.map((skill) => ({
            value: skill.label,
            label: skill.label,
          }))
        : [];
    case InputLabels.languages:
      return languages
        ? languages.languages.map((language) => ({
            value: language.label,
            label: language.label,
          }))
        : [];
    case InputLabels.projectsIds:
      return projects ? projects.projects : [];
  }

  return [];
};
