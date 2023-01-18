import React from 'react';

import classes from './Backdrop.module.scss';

export const Backdrop = (props: any) => {
  return <div className={classes.Backdrop} onClick={props.onClick}></div>;
};
