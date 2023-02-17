import { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';

import { GET_DEPARTMENTS_AS_OPTIONS } from '../apollo/queries/departments';
import { GET_POSITIONS_AS_OPTIONS } from '../apollo/queries/positions';
import { Roles } from '../constants/constants';
import { InputLabels } from '../constants/text';
import { DepartmentOption } from '../types/interfaces/departments';
import { PositionOption } from '../types/interfaces/positions';
import { OptionsType } from '../types/interfaces/propsInterfaces';
import { GET_SKILLS_AS_OPTIONS } from '../apollo/queries/skills';
import { SkillOption } from '../types/interfaces/skills';

export const useOptions = (label: string): OptionsType[] => {
  const { data: departments } = useQuery<{ departments: DepartmentOption[] }>(
    GET_DEPARTMENTS_AS_OPTIONS
  );
  const { data: positions } = useQuery<{ positions: PositionOption[] }>(
    GET_POSITIONS_AS_OPTIONS
  );
  const { data: skills } = useQuery<{ skills: SkillOption[] }>(
    GET_SKILLS_AS_OPTIONS
  );
  const [departmentsValue, setDepartmentsValue] = useState<OptionsType[]>([]);
  const [positionsValue, setPositionsValue] = useState<OptionsType[]>([]);
  const [skillsValue, setSkillsValue] = useState<OptionsType[]>([]);
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
    if (skills) {
      setSkillsValue(skills.skills);
    }
  }, [skills]);

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
    case InputLabels.skillsIds:
      options = skillsValue;
      break;

    default:
      options = [];
      break;
  }
  return options;
};
