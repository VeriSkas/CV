import React from 'react';
import { NavLink } from 'react-router-dom';

import { IconContext } from 'react-icons';

import { ILink } from '../../../shared/interfaces';
import classes from './DropDown.module.scss';

export const DropDown = (props: any) => {
  const renderOptions = () => {
    return props.options.map((option: ILink) => {
      return (
        <li key={option.label} onClick={() => props.onClose(option.label)}>
          <NavLink to={option.to}>
            <IconContext.Provider value={{ className: classes.Icon }}>
              {option.icon}
            </IconContext.Provider>
            <span className={classes.OptionName}>{option.label}</span>
          </NavLink>
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
