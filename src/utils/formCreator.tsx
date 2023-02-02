import { inputs, TypeForm } from '../constants/constants';
import { CvItemDetails } from '../interfaces/cvs';
import { IInput } from '../interfaces/interfaces';

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
        defaultValue: cv?.user?.position.name ?? '',
        readonly: true,
      },
    ];
  }

  return [];
};
