import { IInput } from 'interfaces/interfaces';
import { Sizes } from './constants';
import { regExpForEmail } from './regExp';
import { InputLabels, InputTypes } from './text';

export const inputs: { [key: string]: IInput } = {
  email: {
    type: InputTypes.email,
    label: InputLabels.email,
    labelName: 'InputLabelNames.email',
    defaultValue: '',
    validation: {
      required: { value: true, message: 'ErrorMessages.inputRequired' },
      minLength: {
        value: Sizes.MIN_emailLength,
        message: 'ErrorMessages.inputMinLength',
      },
      maxLength: {
        value: Sizes.MAX_inputLength,
        message: 'ErrorMessages.inputMaxLength',
      },
      pattern: {
        value: regExpForEmail,
        message: 'ErrorMessages.inputEmail',
      },
    },
  },
  password: {
    type: InputTypes.password,
    label: InputLabels.password,
    labelName: 'InputLabelNames.password',
    defaultValue: '',
    validation: {
      required: { value: true, message: 'ErrorMessages.inputRequired' },
      minLength: {
        value: Sizes.MIN_passwordLength,
        message: 'ErrorMessages.inputMinLength',
      },
      maxLength: {
        value: Sizes.MAX_passwordLength,
        message: 'ErrorMessages.inputMaxLength',
      },
    },
  },
  first_name: {
    type: InputTypes.text,
    label: InputLabels.firstName,
    labelName: 'InputLabelNames.firstName',
    defaultValue: '',
    validation: {
      required: { value: true, message: 'ErrorMessages.inputRequired' },
      minLength: {
        value: Sizes.MIN_inputLength,
        message: 'ErrorMessages.inputMinLength',
      },
      maxLength: {
        value: Sizes.MAX_inputLength,
        message: 'ErrorMessages.inputMaxLength',
      },
    },
  },
  last_name: {
    type: InputTypes.text,
    label: InputLabels.lastName,
    labelName: 'InputLabelNames.lastName',
    defaultValue: '',
    validation: {
      required: { value: true, message: 'ErrorMessages.inputRequired' },
      minLength: {
        value: Sizes.MIN_inputLength,
        message: 'ErrorMessages.inputMinLength',
      },
      maxLength: {
        value: Sizes.MAX_inputLength,
        message: 'ErrorMessages.inputMaxLength',
      },
    },
  },
  full_name: {
    type: InputTypes.text,
    label: InputLabels.fullName,
    labelName: 'InputLabelNames.fullName',
    defaultValue: '',
    validation: {},
  },
  department: {
    type: InputTypes.select,
    label: InputLabels.department,
    labelName: 'InputLabelNames.department',
    defaultValue: '',
    validation: {},
  },
  departmentName: {
    type: InputTypes.text,
    label: InputLabels.name,
    labelName: 'InputLabelNames.department',
    defaultValue: '',
    validation: {
      required: { value: true, message: 'ErrorMessages.inputRequired' },
      minLength: {
        value: Sizes.MIN_inputLength,
        message: 'ErrorMessages.inputMinLength',
      },
      maxLength: {
        value: Sizes.MAX_inputLength,
        message: 'ErrorMessages.inputMaxLength',
      },
    },
  },
  position: {
    type: InputTypes.select,
    label: InputLabels.position,
    labelName: 'InputLabelNames.position',
    defaultValue: '',
    validation: {},
  },
  positionName: {
    type: InputTypes.text,
    label: InputLabels.name,
    labelName: 'InputLabelNames.position',
    defaultValue: '',
    validation: {
      required: { value: true, message: 'ErrorMessages.inputRequired' },
      minLength: {
        value: Sizes.MIN_inputLength,
        message: 'ErrorMessages.inputMinLength',
      },
      maxLength: {
        value: Sizes.MAX_inputLength,
        message: 'ErrorMessages.inputMaxLength',
      },
    },
  },
  domain: {
    type: InputTypes.text,
    label: InputLabels.domain,
    labelName: 'InputLabelNames.domain',
    defaultValue: '',
    validation: {
      required: { value: true, message: 'ErrorMessages.inputRequired' },
      minLength: {
        value: Sizes.MIN_inputLength,
        message: 'ErrorMessages.inputMinLength',
      },
      maxLength: {
        value: Sizes.MAX_inputLength,
        message: 'ErrorMessages.inputMaxLength',
      },
    },
  },
  team_size: {
    type: InputTypes.number,
    label: InputLabels.teamSize,
    labelName: 'InputLabelNames.teamSize',
    defaultValue: '',
    validation: {
      required: { value: true, message: 'ErrorMessages.inputRequired' },
      min: {
        value: Sizes.MIN_inputValue,
        message: 'ErrorMessages.inputMinNumber',
      },
      max: {
        value: Sizes.MAX_inputLength,
        message: 'ErrorMessages.inputMaxNumber',
      },
    },
  },
  start_date: {
    type: InputTypes.date,
    label: InputLabels.startDate,
    labelName: 'InputLabelNames.startDate',
    defaultValue: '',
    validation: {
      required: { value: true, message: 'ErrorMessages.inputRequired' },
    },
  },
  end_date: {
    type: InputTypes.date,
    label: InputLabels.endDate,
    labelName: 'InputLabelNames.endDate',
    defaultValue: '',
    validation: {
      required: { value: false, message: 'ErrorMessages.inputRequired' },
    },
  },
  name: {
    type: InputTypes.text,
    label: InputLabels.name,
    labelName: 'InputLabelNames.name',
    defaultValue: '',
    validation: {
      required: { value: true, message: 'ErrorMessages.inputRequired' },
      minLength: {
        value: Sizes.MIN_inputLength,
        message: 'ErrorMessages.inputMinLength',
      },
      maxLength: {
        value: Sizes.MAX_inputLength,
        message: 'ErrorMessages.inputMaxLength',
      },
    },
  },
  internal_name: {
    type: InputTypes.text,
    label: InputLabels.internalName,
    labelName: 'InputLabelNames.internalName',
    defaultValue: '',
    validation: {
      minLength: {
        value: Sizes.MIN_inputLength,
        message: 'ErrorMessages.inputMinLength',
      },
      maxLength: {
        value: Sizes.MAX_inputLength,
        message: 'ErrorMessages.inputMaxLength',
      },
    },
  },
  description: {
    type: InputTypes.text,
    label: InputLabels.description,
    labelName: 'InputLabelNames.description',
    defaultValue: '',
    validation: {
      required: { value: true, message: 'ErrorMessages.inputRequired' },
      minLength: {
        value: Sizes.MIN_inputLength,
        message: 'ErrorMessages.inputMinLength',
      },
      maxLength: {
        value: Sizes.MAX_inputLength,
        message: 'ErrorMessages.inputMaxLength',
      },
    },
  },
  skill: {
    type: InputTypes.text,
    label: InputLabels.skill,
    labelName: 'InputLabelNames.skill',
    defaultValue: '',
    validation: {},
  },
  skillName: {
    type: InputTypes.text,
    label: InputLabels.name,
    labelName: 'InputLabelNames.skill',
    defaultValue: '',
    validation: {
      required: { value: true, message: 'ErrorMessages.inputRequired' },
      minLength: {
        value: Sizes.MIN_inputLength,
        message: 'ErrorMessages.inputMinLength',
      },
      maxLength: {
        value: Sizes.MAX_inputLength,
        message: 'ErrorMessages.inputMaxLength',
      },
    },
  },
  language: {
    type: InputTypes.text,
    label: InputLabels.language,
    labelName: 'InputLabelNames.language',
    defaultValue: '',
    validation: {},
  },
  languageName: {
    type: InputTypes.text,
    label: InputLabels.name,
    labelName: 'InputLabelNames.language',
    defaultValue: '',
    validation: {
      required: { value: true, message: 'ErrorMessages.inputRequired' },
      minLength: {
        value: Sizes.MIN_inputLength,
        message: 'ErrorMessages.inputMinLength',
      },
      maxLength: {
        value: Sizes.MAX_inputLength,
        message: 'ErrorMessages.inputMaxLength',
      },
    },
  },
  nativeName: {
    type: InputTypes.text,
    label: InputLabels.nativeName,
    labelName: 'InputLabelNames.nativeName',
    defaultValue: '',
    validation: {},
  },
  iso2: {
    type: InputTypes.text,
    label: InputLabels.iso2,
    labelName: 'InputLabelNames.iso2',
    defaultValue: '',
    validation: {
      required: { value: true, message: 'ErrorMessages.inputRequired' },
      minLength: {
        value: Sizes.MIN_inputLength,
        message: 'ErrorMessages.inputMinLength',
      },
      maxLength: {
        value: Sizes.MAX_inputLength,
        message: 'ErrorMessages.inputMaxLength',
      },
    },
  },
  role: {
    type: InputTypes.select,
    label: InputLabels.role,
    labelName: 'InputLabelNames.role',
    defaultValue: '',
    validation: {},
  },
};
