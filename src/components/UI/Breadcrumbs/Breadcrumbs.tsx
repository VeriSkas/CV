import React, { FC, useEffect, useState } from 'react';

import { IconContext } from 'react-icons';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { NavLink, useLocation, useParams } from 'react-router-dom';

import { links } from '../../../constants/constants';
import { IParams, PARAMS } from '../../../constants/paths';
import classes from './Breadcrumbs.module.scss';

export const Breadcrumbs: FC<{ paramName?: string }> = ({ paramName }) => {
  const param = useParams();
  const location = useLocation();
  const [paramValue, setParamValue] = useState('');
  const [pathValue, setPathValue] = useState('');

  useEffect(() => {
    const paramKey = Object.keys(param)[0];

    if (paramKey) {
      setParamValue(paramKey);
    } else {
      setParamValue('');
    }
  }, [param]);

  useEffect(() => {
    const path = location.pathname.split('/')[1];

    if (path) {
      setPathValue(path);
    }
  }, [location]);

  return (
    <div className={classes.Breadcrumbs}>
      <a>
        <IconContext.Provider value={{ className: classes.Icon }}>
          {links.home.icon}
        </IconContext.Provider>
        {links.home.label}
      </a>
      {pathValue && <NavLink
        end
        to={links[pathValue].to}
        className={({ isActive }) => (isActive ? classes.Active : undefined)}
      >
        <IconContext.Provider value={{ className: classes.Icon }}>
          <MdOutlineKeyboardArrowRight />
        </IconContext.Provider>
        {links[pathValue].label}
      </NavLink>}
      {paramValue && pathValue && <NavLink
        to={location.pathname}
        className={({ isActive }) =>
          isActive ? `${classes.Active} ${classes.Red}` : undefined
        }
      >
        <IconContext.Provider value={{ className: classes.Icon }}>
          <MdOutlineKeyboardArrowRight />
        </IconContext.Provider>
        <IconContext.Provider
          value={{ className: `${classes.Icon} ${classes.Red}` }}
        >
          {links[PARAMS[pathValue as keyof IParams]].icon}
        </IconContext.Provider>
        <span className={classes.LinkText}>
          {paramName ?? links[PARAMS[pathValue as keyof IParams]].label}
        </span>
      </NavLink>}
    </div>
  );
};
