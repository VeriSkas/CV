import React, { FC, useState } from 'react';

import { IconContext } from 'react-icons';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

import { InputProps } from 'interfaces/propsInterfaces';
import { InputTypes } from 'constants/text';
import { errorMessagesCreator } from 'utils/errorCreator';
import 'i18n/i18n';
import classes from './Input.module.scss';

export const Input: FC<InputProps> = ({
  label,
  labelName,
  defaultValue,
  type,
  readonly,
  validation,
  register,
  error,
  placeholder,
}) => {
  const { t } = useTranslation();
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className={classes.Input}>
      {labelName && <label htmlFor={label}>{t(labelName)}</label>}
      <div className={classes.Input_input}>
        <input
          {...register(label, { ...validation })}
          type={type && !toggle ? type : InputTypes.text}
          defaultValue={defaultValue ?? ''}
          id={label}
          readOnly={readonly ?? false}
          placeholder={t(placeholder ?? '')}
        />
        {error && <span>{t(error, errorMessagesCreator(error, label))}</span>}
        {type === InputTypes.password && (
          <div
            className={classes.Eye}
            onClick={() => {
              setToggle((prevToggle) => !prevToggle);
            }}
          >
            <IconContext.Provider value={{ className: classes.Icon }}>
              {toggle ? <BsEyeSlashFill /> : <BsEyeFill />}
            </IconContext.Provider>
          </div>
        )}
      </div>
    </div>
  );
};
