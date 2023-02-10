import React, { FC, ReactElement } from 'react';

import { useTranslation } from 'react-i18next';

import classes from './FormContainer.module.scss';

export const FormContainer: FC<{ title: string, children: ReactElement }> = ({
  title,
  children,
}) => {
  const { t } = useTranslation();

  return (
    <div className={classes.FormContainer}>
      <div className={classes.Container}>
        <h2 className={classes.Title}>{t(title)}</h2>
        <div className={classes.Form}>{children}</div>
      </div>
    </div>
  );
};
