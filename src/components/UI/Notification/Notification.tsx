import React, { FC } from 'react';

import { useReactiveVar } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { IconContext } from 'react-icons';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';

import { NOTIFICATION } from '../../../apollo/state';
import { INotification } from '../../../types/interfaces/notification';
import '../../../i18n/i18n';
import classes from './Notification.module.scss';

export const hideNotification = (): INotification =>
  NOTIFICATION({
    isVisible: false,
    message: '',
  });

export const openNotification = (message: string): INotification =>
  NOTIFICATION({
    isVisible: true,
    message,
  });

export const Notification: FC<{}> = () => {
  const { t } = useTranslation();
  const { isVisible, message } = useReactiveVar(NOTIFICATION);

  if (isVisible) {
    setTimeout(() => {
      hideNotification();
    }, 5000);
  }

  const onClose = (): void => {
    hideNotification();
  };

  return isVisible ? (
    <div className={classes.Notification}>
      <div className={classes.Type}>
        <IconContext.Provider
          value={{ className: `${classes.Icon} ${classes.IconType}` }}
        >
          <AiOutlineExclamationCircle />
        </IconContext.Provider>
      </div>
      <p className={classes.Message}>{t(message ?? 'ErrorMessages.default')}</p>
      <div className={classes.Cross} onClick={onClose}>
        <IconContext.Provider value={{ className: classes.Icon }}>
          <RxCross2 />
        </IconContext.Provider>
      </div>
    </div>
  ) : (
    <></>
  );
};
