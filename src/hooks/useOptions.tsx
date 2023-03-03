import { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';

import { GET_DEPARTMENTS_AS_OPTIONS } from '../apollo/queries/departments';
import { GET_POSITIONS_AS_OPTIONS } from '../apollo/queries/positions';
import { Roles } from '../constants/constants';
import { InputLabels } from '../constants/text';
import { OptionsType } from '../types/interfaces/propsInterfaces';
import { GET_SKILLS_AS_OPTIONS } from '../apollo/queries/skills';
import { GET_PROJECTS_OPTIONS } from '../apollo/queries/projects';
import { GET_LANGUAGES_AS_OPTIONS } from '../apollo/queries/languages';
import { GET_CVS_AS_OPTIONS } from '../apollo/queries/cvs';
import { GET_USERS_AS_OPTIONS } from '../apollo/queries/users';

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
  const [departmentsValue, setDepartmentsValue] = useState<OptionsType[]>([]);
  const [positionsValue, setPositionsValue] = useState<OptionsType[]>([]);
  const [skillsValue, setSkillsValue] = useState<OptionsType[]>([]);
  const [projectsValue, setProjectsValue] = useState<OptionsType[]>([]);
  const [languagesValue, setLanguagesValue] = useState<OptionsType[]>([]);
  const [cvsValue, setCvsValue] = useState<OptionsType[]>([]);
  const [usersValue, setUsersValue] = useState<OptionsType[]>([]);
  let options: OptionsType[] = [];

  useEffect(() => {
    if (departments) {
      setDepartmentsValue(departments.departments);
    }
  }, [departments]);

  useEffect(() => {
    if (positions) {
      setPositionsValue(positions.positions);
    }
  }, [positions]);

  useEffect(() => {
    if (users) {
      setUsersValue(users.users);
    }
  }, [users]);

  useEffect(() => {
    if (skills) {
      setSkillsValue(skills.skills);
    }
  }, [skills]);

  useEffect(() => {
    if (cvs) {
      setCvsValue(cvs.cvs);
    }
  }, [cvs]);

  useEffect(() => {
    if (projects) {
      setProjectsValue(projects.projects);
    }
  }, [projects]);

  useEffect(() => {
    if (languages) {
      setLanguagesValue(languages.languages);
    }
  }, [languages]);

  switch (label) {
    case InputLabels.department:
      options = departmentsValue;
      break;
    case InputLabels.position:
      options = positionsValue;
      break;
    case InputLabels.role:
      options = [...Object.values(Roles)];
      break;
    case InputLabels.cvsIds:
      options = cvsValue;
      break;
    case InputLabels.userId:
      options = usersValue;
      break;
    case InputLabels.skillsIds:
      options = skillsValue;
      break;
    case InputLabels.skills:
      options = skillsValue.map((skill) => ({
        value: skill.label,
        label: skill.label,
      }));
      break;
    case InputLabels.languages:
      options = languagesValue.map((language) => ({
        value: language.label,
        label: language.label,
      }));
      break;
    case InputLabels.projectsIds:
      options = projectsValue;
      break;

    default:
      options = [];
      break;
  }

  return options;
};
