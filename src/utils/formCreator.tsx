import { inputs, TypeForm } from '../constants/constants';
import { InputLabelNames } from '../constants/text';
import { CvItemDetails } from '../interfaces/cvs';
import { IInput } from '../interfaces/interfaces';
import { UserInfo } from '../interfaces/user';

export const makeCvInputsList = (
  type: string,
  cv?: CvItemDetails
): IInput[] => {
  if (type === TypeForm.cvDetails) {
    return [
      { ...inputs.name, defaultValue: cv?.name ?? '', readonly: true },
      {
        ...inputs.description,
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
      { ...inputs.name2, defaultValue: cv?.name ?? '' },
      {
        ...inputs.description2,
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
      { ...inputs.name2, defaultValue: cv?.name ?? '' },
      {
        ...inputs.description2,
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
      { ...inputs.first_name, defaultValue: user?.profile.first_name ?? '' },
      { ...inputs.last_name, defaultValue: user?.profile.last_name ?? '' },
      { ...inputs.email2, defaultValue: user?.email ?? '' },
      { ...inputs.department, defaultValue: user?.department?.name ?? '' },
      { ...inputs.position, defaultValue: user?.position?.name ?? '' },
    ];
  } else if (type === TypeForm.profileType) {
    return [
      { ...inputs.first_name, defaultValue: user?.profile.first_name ?? '' },
      { ...inputs.last_name, defaultValue: user?.profile.last_name ?? '' },
      { ...inputs.email2, defaultValue: user?.email ?? '' },
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
      { ...inputs.first_name },
      { ...inputs.last_name },
      { ...inputs.email, labelName: InputLabelNames.email },
      { ...inputs.password, labelName: InputLabelNames.password },
    ];
  }

  return [];
};
