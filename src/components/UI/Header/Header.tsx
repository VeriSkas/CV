import React from 'react';

import classes from './Header.module.scss';

export const Header = (props: any) => {
  return <div className={classes.Header}>{props.children}</div>;
};
