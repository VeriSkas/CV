import React, { FC, ReactNode } from 'react';

import classes from './Header.module.scss';

export const Header: FC<{ children: ReactNode }> = (props) => {
  return <div className={classes.Header}>{props.children}</div>;
};
