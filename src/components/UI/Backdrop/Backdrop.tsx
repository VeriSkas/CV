import React, { FC } from 'react';

import { BackdropProps } from '../../../types/interfaces/propsInterfaces';
import classes from './Backdrop.module.scss';

export const Backdrop: FC<BackdropProps> = ({ onClick }) => {
  return <div className={classes.Backdrop} onClick={onClick}></div>;
};
