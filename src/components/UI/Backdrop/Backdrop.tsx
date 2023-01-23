import React, { FC } from 'react';

import classes from './Backdrop.module.scss';

export const Backdrop: FC<{ onClick: () => void }> = (props) => {
  return <div className={classes.Backdrop} onClick={props.onClick}></div>;
};
