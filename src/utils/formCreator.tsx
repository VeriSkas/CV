import { inputs } from '../constants/inputsSettings';
import { InputLabelNames } from '../constants/text';
import { TypeForm } from '../constants/variables';
import { CvItemDetails } from '../types/interfaces/cvs';
import { IInput } from '../types/interfaces/interfaces';
import { UserInfo } from '../types/interfaces/user';

export const makeCvInputsList = (
  type: string,
  cv?: CvItemDetails
): IInput[] => {
  if (type === TypeForm.cvDetails) {
    return [
      {
        ...inputs.name,
        validation: {},
        defaultValue: cv?.name ?? '',
        readonly: true,
      },
      {
        ...inputs.description,
        validation: {},
        defaultValue: cv?.description ?? '',
        readonly: true,
      },
      {
        ...inputs.full_name,
        defaultValue: cv?.user?.profile.full_name ?? '',
        readonly: true,
      },
      {
        ...inputs.position,
        defaultValue: cv?.user?.position?.name ?? '',
        readonly: true,
      },
    ];
  } else if (type === TypeForm.cvUser) {
    return [
      { ...inputs.name, defaultValue: cv?.name ?? '' },
      {
        ...inputs.description,
        defaultValue: cv?.description ?? '',
      },
      {
        ...inputs.full_name,
        defaultValue: cv?.user?.profile.full_name ?? '',
        readonly: true,
      },
      {
        ...inputs.position,
        defaultValue: cv?.user?.position?.name ?? '',
        readonly: true,
      },
    ];
  } else if (type === TypeForm.createCV) {
    return [
      { ...inputs.name, defaultValue: cv?.name ?? '' },
      {
        ...inputs.description,
        defaultValue: cv?.description ?? '',
      },
    ];
  }

  return [];
};

export const makeEmployeeInputsList = (
  type: string,
  user?: UserInfo
): IInput[] => {
  if (type === TypeForm.updateEmployee) {
    return [
      { ...inputs.first_name },
      { ...inputs.last_name },
      {
        ...inputs.email,
        labelName: InputLabelNames.email,
        validation: {},
        readonly: true,
      },
      { ...inputs.department, defaultValue: user?.department?.name ?? '' },
      { ...inputs.position, defaultValue: user?.position?.name ?? '' },
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
      {
        ...inputs.department,
        readonly: true,
        defaultValue: user?.department?.name ?? '',
      },
      {
        ...inputs.position,
        readonly: true,
        defaultValue: user?.position?.name ?? '',
      },
    ];
  } else if (type === TypeForm.createEmployee) {
    return [
      { ...inputs.first_name, validation: {} },
      { ...inputs.last_name, validation: {} },
      { ...inputs.email, labelName: InputLabelNames.email },
      { ...inputs.password, labelName: InputLabelNames.password },
      { ...inputs.department },
      { ...inputs.position },
      { ...inputs.role },
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
      {
        ...inputs.department,
        readonly: true,
        defaultValue: user?.department?.name ?? '',
      },
      {
        ...inputs.position,
        readonly: true,
        defaultValue: user?.position?.name ?? '',
      },
    ];
  }

  return [];
};
