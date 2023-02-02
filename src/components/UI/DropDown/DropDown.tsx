import React, { FC, ReactNode } from 'react';

import { NavLink } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { useTranslation } from 'react-i18next';

import { DropDownOption } from '../../../interfaces/interfaces';
import { DropDownProps } from '../../../interfaces/propsInterfaces';
import classes from './DropDown.module.scss';

export const DropDown: FC<DropDownProps> = (props) => {
  const { t } = useTranslation();

  const renderOptions = (): ReactNode => {
    return props.options.map((option: DropDownOption) => {
      return (
        <li
          key={option.label}
          onClick={() => {
            props.onClose(option.label);
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
        </li>
      );
    });
  };

  return (
    <div className={classes.DropDown}>
      <ul>{renderOptions()}</ul>
    </div>
  );
};
