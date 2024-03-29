import { IMySelect } from 'interfaces/interfaces';
import { InputLabels } from './text';

export const SelectSettings: { [key: string]: IMySelect } = {
  skillsIds: {
    label: InputLabels.skillsIds,
    labelName: 'InputLabelNames.skills',
    defaultValue: '',
    disabled: false,
    multi: true,
  },
  projectsIds: {
    label: InputLabels.projectsIds,
    labelName: 'InputLabelNames.projects',
    defaultValue: '',
    disabled: false,
    multi: true,
    required: true,
  },
  cvsIds: {
    label: InputLabels.cvsIds,
    labelName: 'InputLabelNames.cvs',
    defaultValue: '',
    disabled: false,
    multi: true,
  },
  department: {
    label: InputLabels.department,
    labelName: 'InputLabelNames.department',
    defaultValue: '',
    disabled: false,
    multi: false,
  },
  position: {
    label: InputLabels.position,
    labelName: 'InputLabelNames.position',
    defaultValue: '',
    disabled: false,
    multi: false,
  },
  role: {
    label: InputLabels.role,
    labelName: 'InputLabelNames.role',
    defaultValue: '',
    disabled: false,
    multi: false,
    required: true,
  },
  userId: {
    label: InputLabels.userId,
    labelName: 'InputLabelNames.userId',
    defaultValue: '',
    disabled: false,
    multi: false,
  },
};
