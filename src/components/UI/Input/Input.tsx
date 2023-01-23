import React, { FC, useState } from 'react';

import { IconContext } from 'react-icons';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

import { InputProps } from '../../../shared/interfaces';
import { InputTypes } from '../../../shared/text';
import classes from './Input.module.scss';

export const Input: FC<InputProps> = (props) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={classes.Input}>
      {props.labelName && (
        <label htmlFor={props.labelName}>{props.labelName}</label>
      )}
      <input
        {...props.register(props.label, { ...props.validation })}
        type={props.type && !toggle ? props.type : InputTypes.text}
        defaultValue={props.defaultValue ?? ''}
        id={props.label && props.labelName}
        placeholder={props.placeholder}
      />
      {props.error && <span>{props.error}</span>}
      {props.type === InputTypes.password && (
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
  );
};
