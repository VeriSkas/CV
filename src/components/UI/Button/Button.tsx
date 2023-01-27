import React, { FC } from 'react';

import { ButtonProps } from '../../../shared/interfaces/propsInterfaces';
import classes from './Button.module.scss';

export const Button: FC<ButtonProps> = (props) => {
  const cls = [classes.Button, classes[props.type ?? '']];
  const clickedBtn = !!props.onClick;

  return (
    <>
      {clickedBtn ? (
        <button
          className={cls.join(' ')}
          onClick={() => props.onClick?.()}
          disabled={props.disabled}
          type="submit"
        >
          {props.children}
        </button>
      ) : (
        <button className={cls.join(' ')}>{props.children}</button>
      )}
    </>
  );
};
