import React, { FC, ReactNode } from 'react';

import classes from './Header.module.scss';

export const Header: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={classes.Header}>{children}</div>;
};
