import React, { FC, ReactNode, useState } from 'react';

import { NavLink } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { useTranslation } from 'react-i18next';

import { DropDownOption } from '../../../types/interfaces/interfaces';
import { DropDownProps } from '../../../types/interfaces/propsInterfaces';
import classes from './DropDown.module.scss';

export const DropDown: FC<DropDownProps> = ({ options, onClick }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(true);

  const onClose = (): void => {
    setIsOpen(false);
  };

  const onClickHandler = (label: string): void => {
    onClick(label);
    setIsOpen(false);
  };

  const renderOptions = (): ReactNode => {
    return options.map((option: DropDownOption) => {
      return (
        <li
          key={option.label}
          onClick={() => {
            onClickHandler(option.iso ?? option.label);
          }}
        >
          {option.to && (
            <NavLink to={option.to}>
              {option.icon && (
                <IconContext.Provider value={{ className: classes.Icon }}>
                  {option.icon}
                </IconContext.Provider>
              )}
              <span className={classes.OptionName}>{t(option.label)}</span>
            </NavLink>
          )}
          {option.iso && (
            <span className={classes.OptionName}>{t(option.label)}</span>
          )}
        </li>
      );
    });
  };

  return isOpen ? (
    <>
      <div className={classes.DropDown}>
        <ul>{renderOptions()}</ul>
      </div>
      <div className={classes.BackDrop} onClick={onClose}></div>
    </>
  ) : (
    <></>
  );
};
