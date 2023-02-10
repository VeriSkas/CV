import { IFieldArray } from '../types/interfaces/interfaces';
import { IRadioInputs } from '../types/interfaces/propsInterfaces';
import { InputLabelNames, InputLabels } from './text';

export const OptionsForFieldArrays: { [key: string]: IRadioInputs } = {
  skills: {
    inputValueName: 'skill_name',
    name: 'mastery',
    options: [
      {
        value: 'notice',
        label: 'Novice',
      },
      {
        value: 'advanced',
        label: 'Advanced',
      },
      {
        value: 'competent',
        label: 'Competent',
      },
      {
        value: 'proficient',
        label: 'Proficient',
      },
      {
        value: 'expert',
        label: 'Expert',
      },
    ],
  },
  languages: {
    inputValueName: 'language_name',
    name: 'proficiency',
    options: [
      {
        value: 'beginner',
        label: 'A1-A2',
      },
      {
        value: 'intermediate',
        label: 'B1-B2',
      },
      {
        value: 'advanced',
        label: 'C1-C2',
      },
    ],
  },
};

export const FieldArrays: { [key: string]: IFieldArray } = {
  skills: {
    label: InputLabels.skills,
    labelName: InputLabelNames.skills,
    radioInputs: OptionsForFieldArrays.skills,
  },
  languages: {
    label: InputLabels.languages,
    labelName: InputLabelNames.languages,
    radioInputs: OptionsForFieldArrays.languages,
  },
};
