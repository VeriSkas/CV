import React, { FC } from 'react';

import classes from './Backdrop.module.scss';

export const Backdrop: FC<{ onClick: () => void }> = ({ onClick }) => {
  return <div className={classes.Backdrop} onClick={onClick}></div>;
};
