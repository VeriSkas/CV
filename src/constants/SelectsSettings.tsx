import { IMySelect } from '../types/interfaces/interfaces';
import { InputLabelNames, InputLabels } from './text';

export const SelectSettings: { [key: string]: IMySelect } = {
  skillsIds: {
    label: InputLabels.skillsIds,
    labelName: InputLabelNames.skills,
    defaultValue: '',
    disabled: false,
    multi: true,
  },
};
