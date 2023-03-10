import React, { FC } from 'react';

import { ButtonProps } from 'interfaces/propsInterfaces';
import classes from './Button.module.scss';

export const Button: FC<ButtonProps> = ({
  type,
  onClick,
  disabled,
  children,
}) => {
  const cls = [classes.Button, classes[type ?? '']];
  const clickedBtn = !!onClick;

  return (
    <>
      {clickedBtn ? (
        <button
          className={cls.join(' ')}
          onClick={() => {
            onClick?.();
          }}
          disabled={disabled}
          type="submit"
        >
          {children}
        </button>
      ) : (
        <button className={cls.join(' ')}>{children}</button>
      )}
    </>
  );
};
