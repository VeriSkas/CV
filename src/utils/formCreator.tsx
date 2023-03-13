import { inputs } from 'constants/inputsSettings';
import { SelectSettings } from 'constants/selectsSettings';
import { TypeForm } from 'constants/variables';
import { IInput, IMySelect } from 'interfaces/interfaces';

export const makeInputsList = (type: string): IInput[] => {
  switch (type) {
    case TypeForm.cvDetails:
      return [
        {
          ...inputs.name,
          validation: {},
          readonly: true,
        },
        {
          ...inputs.description,
          validation: {},
          readonly: true,
        },
        { ...inputs.full_name, readonly: true },
        { ...inputs.position, readonly: true },
      ];

    case TypeForm.cvUser:
      return [{ ...inputs.name }, { ...inputs.description }];

    case TypeForm.createCV:
      return [{ ...inputs.name }, { ...inputs.description }];

    case TypeForm.updateEmployee:
      return [
        { ...inputs.first_name },
        { ...inputs.last_name },
        {
          ...inputs.email,
          validation: {},
          readonly: true,
        },
      ];

    case TypeForm.profileType:
      return [
        { ...inputs.first_name },
        { ...inputs.last_name },
        {
          ...inputs.email,
          validation: {},
          readonly: true,
        },
      ];

    case TypeForm.createEmployee:
      return [
        { ...inputs.first_name, validation: {} },
        { ...inputs.last_name, validation: {} },
        { ...inputs.email },
        { ...inputs.password },
      ];

    case TypeForm.employeeProfile:
      return [
        { ...inputs.first_name, readonly: true },
        { ...inputs.last_name, readonly: true },
        {
          ...inputs.email,
          validation: {},
          readonly: true,
        },
      ];

    case TypeForm.createProject:
      return [
        { ...inputs.name },
        { ...inputs.internal_name },
        { ...inputs.description },
        { ...inputs.domain },
        { ...inputs.team_size },
        { ...inputs.start_date },
        { ...inputs.end_date },
      ];

    case TypeForm.updateProject:
      return [
        { ...inputs.name },
        { ...inputs.internal_name },
        { ...inputs.description },
        { ...inputs.domain },
        { ...inputs.team_size },
        { ...inputs.start_date },
        { ...inputs.end_date },
      ];

    case TypeForm.projectDetails:
      return [
        { ...inputs.name, readonly: true, validation: {} },
        { ...inputs.internal_name, readonly: true, validation: {} },
        { ...inputs.description, readonly: true, validation: {} },
        { ...inputs.domain, readonly: true, validation: {} },
        { ...inputs.team_size, readonly: true, validation: {} },
        { ...inputs.start_date, readonly: true, validation: {} },
        { ...inputs.end_date, readonly: true, validation: {} },
      ];

    case TypeForm.createDepartment:
      return [{ ...inputs.departmentName }];

    case TypeForm.updateDepartment:
      return [{ ...inputs.departmentName }];

    case TypeForm.createPosition:
      return [{ ...inputs.positionName }];

    case TypeForm.updatePosition:
      return [{ ...inputs.positionName }];

    case TypeForm.createSkill:
      return [{ ...inputs.skillName }];

    case TypeForm.updateSkill:
      return [{ ...inputs.skillName }];

    case TypeForm.createLanguage:
      return [
        { ...inputs.languageName },
        { ...inputs.iso2 },
        { ...inputs.nativeName },
      ];

    case TypeForm.updateLanguage:
      return [
        { ...inputs.languageName },
        { ...inputs.iso2 },
        { ...inputs.nativeName },
      ];

    default:
      return [];
  }
};

export const makeSelectsList = (type: string): IMySelect[] => {
  switch (type) {
    case TypeForm.createProject:
      return [{ ...SelectSettings.skillsIds }];

    case TypeForm.updateProject:
      return [{ ...SelectSettings.skillsIds }];

    case TypeForm.projectDetails:
      return [{ ...SelectSettings.skillsIds, disabled: true }];

    case TypeForm.createCV:
      return [{ ...SelectSettings.projectsIds }, { ...SelectSettings.userId }];

    case TypeForm.cvUser:
      return [{ ...SelectSettings.projectsIds }, { ...SelectSettings.userId }];

    case TypeForm.createEmployee:
      return [
        { ...SelectSettings.department },
        { ...SelectSettings.position },
        { ...SelectSettings.role },
        { ...SelectSettings.cvsIds },
      ];

    case TypeForm.updateEmployee:
      return [
        { ...SelectSettings.department },
        { ...SelectSettings.position },
        { ...SelectSettings.cvsIds },
      ];

    case TypeForm.profileType:
      return [{ ...SelectSettings.department }, { ...SelectSettings.position }];

    case TypeForm.employeeProfile:
      return [
        { ...SelectSettings.department, disabled: true },
        { ...SelectSettings.position, disabled: true },
      ];

    default:
      return [];
  }
};
