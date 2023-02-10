import { IInput } from '../types/interfaces/interfaces';
import { regExpForEmail } from './regExp';
import {
  ErrorMessages,
  InputLabelNames,
  InputLabels,
  InputTypes,
} from './text';

export const inputs: { [key: string]: IInput } = {
  email: {
    type: InputTypes.email,
    label: InputLabels.email,
    defaultValue: '',
    validation: {
      required: { value: true, message: ErrorMessages.inputRequired },
      minLength: { value: 5, message: ErrorMessages.inputMinLength(5) },
      maxLength: { value: 100, message: ErrorMessages.inputMaxLength(100) },
      pattern: {
        value: regExpForEmail,
        message: ErrorMessages.inputEmail,
      },
    },
  },
  password: {
    type: InputTypes.password,
    label: InputLabels.password,
    defaultValue: '',
    validation: {
      required: { value: true, message: ErrorMessages.inputRequired },
      minLength: { value: 6, message: ErrorMessages.inputMinLength(6) },
      maxLength: { value: 32, message: ErrorMessages.inputMaxLength(32) },
    },
  },
  first_name: {
    type: InputTypes.text,
    label: InputLabels.firstName,
    labelName: InputLabelNames.firstName,
    defaultValue: '',
    validation: {
      required: { value: true, message: ErrorMessages.inputRequired },
      minLength: { value: 2, message: ErrorMessages.inputMinLength(2) },
      maxLength: { value: 100, message: ErrorMessages.inputMaxLength(100) },
    },
  },
  last_name: {
    type: InputTypes.text,
    label: InputLabels.lastName,
    labelName: InputLabelNames.lastName,
    defaultValue: '',
    validation: {
      required: { value: true, message: ErrorMessages.inputRequired },
      minLength: { value: 2, message: ErrorMessages.inputMinLength(2) },
      maxLength: { value: 100, message: ErrorMessages.inputMaxLength(100) },
    },
  },
  full_name: {
    type: InputTypes.text,
    label: InputLabels.fullName,
    labelName: InputLabelNames.fullName,
    defaultValue: '',
    validation: {},
  },
  email2: {
    type: InputTypes.email,
    label: InputLabels.email,
    labelName: InputLabelNames.email,
    defaultValue: '',
    readonly: true,
    validation: {},
  },
  department: {
    type: InputTypes.select,
    label: InputLabels.department,
    labelName: InputLabelNames.department,
    defaultValue: '',
    validation: {},
  },
  position: {
    type: InputTypes.select,
    label: InputLabels.position,
    labelName: InputLabelNames.position,
    defaultValue: '',
    validation: {},
  },
  name: {
    type: InputTypes.text,
    label: InputLabels.name,
    labelName: InputLabelNames.name,
    defaultValue: '',
    validation: {},
  },
  name2: {
    type: InputTypes.text,
    label: InputLabels.name,
    labelName: InputLabelNames.name,
    defaultValue: '',
    validation: {
      required: { value: true, message: ErrorMessages.inputRequired },
      minLength: { value: 3, message: ErrorMessages.inputMinLength(3) },
      maxLength: { value: 32, message: ErrorMessages.inputMaxLength(32) },
    },
  },
  description: {
    type: InputTypes.text,
    label: InputLabels.description,
    labelName: InputLabelNames.description,
    defaultValue: '',
    validation: {},
  },
  description2: {
    type: InputTypes.text,
    label: InputLabels.description,
    labelName: InputLabelNames.description,
    defaultValue: '',
    validation: {
      required: { value: true, message: ErrorMessages.inputRequired },
      minLength: { value: 3, message: ErrorMessages.inputMinLength(3) },
      maxLength: { value: 100, message: ErrorMessages.inputMaxLength(100) },
    },
  },
  skill: {
    type: InputTypes.text,
    label: InputLabels.skill,
    labelName: InputLabelNames.skill,
    defaultValue: '',
    validation: {},
  },
  language: {
    type: InputTypes.text,
    label: InputLabels.language,
    labelName: InputLabelNames.language,
    defaultValue: '',
    validation: {},
  },
};
