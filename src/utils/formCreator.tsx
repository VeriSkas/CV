import { inputs } from '../constants/inputsSettings';
import { SelectSettings } from '../constants/selectsSettings';
import { InputLabelNames } from '../constants/text';
import { TypeForm } from '../constants/variables';
import { IInput, IMySelect } from '../types/interfaces/interfaces';

export const makeInputsList = (type: string): IInput[] => {
  if (type === TypeForm.cvDetails) {
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
  } else if (type === TypeForm.cvUser) {
    return [{ ...inputs.name }, { ...inputs.description }];
  } else if (type === TypeForm.createCV) {
    return [{ ...inputs.name }, { ...inputs.description }];
  } else if (type === TypeForm.updateEmployee) {
    return [
      { ...inputs.first_name },
      { ...inputs.last_name },
      {
        ...inputs.email,
        labelName: InputLabelNames.email,
        validation: {},
        readonly: true,
      },
    ];
  } else if (type === TypeForm.profileType) {
    return [
      { ...inputs.first_name },
      { ...inputs.last_name },
      {
        ...inputs.email,
        labelName: InputLabelNames.email,
        validation: {},
        readonly: true,
      },
    ];
  } else if (type === TypeForm.createEmployee) {
    return [
      { ...inputs.first_name, validation: {} },
      { ...inputs.last_name, validation: {} },
      { ...inputs.email, labelName: InputLabelNames.email },
      { ...inputs.password, labelName: InputLabelNames.password },
    ];
  } else if (type === TypeForm.employeeProfile) {
    return [
      { ...inputs.first_name, readonly: true },
      { ...inputs.last_name, readonly: true },
      {
        ...inputs.email,
        labelName: InputLabelNames.email,
        validation: {},
        readonly: true,
      },
    ];
  } else if (
    type === TypeForm.createProject ||
    type === TypeForm.updateProject
  ) {
    return [
      { ...inputs.name },
      { ...inputs.internal_name },
      { ...inputs.description },
      { ...inputs.domain },
      { ...inputs.team_size },
      { ...inputs.start_date },
      { ...inputs.end_date },
    ];
  }
  if (type === TypeForm.projectDetails) {
    return [
      { ...inputs.name, readonly: true, validation: {} },
      { ...inputs.internal_name, readonly: true, validation: {} },
      { ...inputs.description, readonly: true, validation: {} },
      { ...inputs.domain, readonly: true, validation: {} },
      { ...inputs.team_size, readonly: true, validation: {} },
      { ...inputs.start_date, readonly: true, validation: {} },
      { ...inputs.end_date, readonly: true, validation: {} },
    ];
  } else if (
    type === TypeForm.createDepartment ||
    type === TypeForm.updateDepartment
  ) {
    return [{ ...inputs.departmentName }];
  } else if (
    type === TypeForm.updatePosition ||
    type === TypeForm.createPosition
  ) {
    return [{ ...inputs.positionName }];
  } else if (type === TypeForm.updateSkill || type === TypeForm.createSkill) {
    return [{ ...inputs.skillName }];
  } else if (
    type === TypeForm.updateLanguage ||
    type === TypeForm.createLanguage
  ) {
    return [
      { ...inputs.languageName },
      { ...inputs.iso2 },
      { ...inputs.nativeName },
    ];
  }
  return [];
};

export const makeSelectsList = (type: string): IMySelect[] => {
  if (type === TypeForm.createProject || type === TypeForm.updateProject) {
    return [{ ...SelectSettings.skillsIds }];
  } else if (type === TypeForm.projectDetails) {
    return [{ ...SelectSettings.skillsIds, disabled: true }];
  } else if (type === TypeForm.createCV) {
    return [{ ...SelectSettings.projectsIds }, { ...SelectSettings.userId }];
  } else if (type === TypeForm.cvUser) {
    return [{ ...SelectSettings.projectsIds }, { ...SelectSettings.userId }];
  } else if (type === TypeForm.createEmployee) {
    return [
      { ...SelectSettings.department },
      { ...SelectSettings.position },
      { ...SelectSettings.role },
      { ...SelectSettings.cvsIds },
    ];
  } else if (type === TypeForm.updateEmployee) {
    return [
      { ...SelectSettings.department },
      { ...SelectSettings.position },
      { ...SelectSettings.cvsIds },
    ];
  } else if (type === TypeForm.profileType) {
    return [{ ...SelectSettings.department }, { ...SelectSettings.position }];
  } else if (type === TypeForm.employeeProfile) {
    return [
      { ...SelectSettings.department, disabled: true },
      { ...SelectSettings.position, disabled: true },
    ];
  }

  return [];
};
