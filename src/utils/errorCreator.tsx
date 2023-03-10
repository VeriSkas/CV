import { Sizes } from 'constants/constants';
import { InputLabels } from 'constants/text';

export const errorMessagesCreator = (type: string, label: string): object => {
  switch (type) {
    case 'ErrorMessages.inputMinNumber':
      return { value: Sizes.MIN_inputValue };
    case 'ErrorMessages.inputMaxNumber':
      return { value: Sizes.MAX_inputValue };
    case 'ErrorMessages.inputMinLength':
      if (label === InputLabels.password) {
        return { value: Sizes.MIN_passwordLength };
      } else if (label === InputLabels.email) {
        return { value: Sizes.MIN_emailLength };
      }
      return { value: Sizes.MIN_inputLength };
    case 'ErrorMessages.inputMaxLength':
      if (label === InputLabels.password) {
        return { value: Sizes.MAX_passwordLength };
      }

      return { value: Sizes.MAX_inputLength };
    default:
      break;
  }
  return {};
};
