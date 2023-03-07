import React, { FC, ReactElement, useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { IconContext } from 'react-icons';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';

import '../../../i18n/i18n';
import classes from './Notification.module.scss';

export const Notification: FC<{
  message?: string,
  onCloseHandler: (status: boolean) => void,
}> = ({ message, onCloseHandler }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState<boolean>(true);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setOpen(false);
        onCloseHandler(false);
      }, 5000);
    }
  }, [open]);

  const onClose = (): void => {
    onCloseHandler(false);
    setOpen(false);
  };

  const renderNotification = (): ReactElement => {
    if (open) {
      return (
        <div className={classes.Notification}>
          <div className={classes.Type}>
            <IconContext.Provider
              value={{ className: `${classes.Icon} ${classes.IconType}` }}
            >
              <AiOutlineExclamationCircle />
            </IconContext.Provider>
          </div>
          <p className={classes.Message}>
            {t(message ?? 'ErrorMessages.default')}
          </p>
          <div className={classes.Cross} onClick={onClose}>
            <IconContext.Provider value={{ className: classes.Icon }}>
              <RxCross2 />
            </IconContext.Provider>
          </div>
        </div>
      );
    }

    return <></>;
  };

  return renderNotification();
};
