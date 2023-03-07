import { IFieldArray } from '../types/interfaces/interfaces';
import { IRadioInputs } from '../types/interfaces/propsInterfaces';
import { InputLabels } from './text';

export const OptionsForFieldArrays: { [key: string]: IRadioInputs } = {
  skills: {
    inputValueName: 'skill_name',
    name: 'mastery',
    options: [
      {
        value: 'novice',
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
        value: 'a1',
        label: 'A1',
      },
      {
        value: 'a2',
        label: 'A2',
      },
      {
        value: 'b1',
        label: 'B1',
      },
      {
        value: 'b2',
        label: 'B2',
      },
      {
        value: 'c1',
        label: 'C1',
      },
      {
        value: 'c2',
        label: 'C2',
      },
      {
        value: 'native',
        label: 'Native',
      },
    ],
  },
};

export const FieldArrays: { [key: string]: IFieldArray } = {
  skills: {
    label: InputLabels.skills,
    labelName: 'InputLabelNames.skills',
    radioInputs: OptionsForFieldArrays.skills,
  },
  languages: {
    label: InputLabels.languages,
    labelName: 'InputLabelNames.languages',
    radioInputs: OptionsForFieldArrays.languages,
  },
};
