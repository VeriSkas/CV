import React, { FC, useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { IconContext } from 'react-icons';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { NavLink, useLocation, useParams } from 'react-router-dom';

import { links } from 'constants/constants';
import { IParams, PARAMS } from 'constants/paths';
import { BreadcrumbsProps } from 'interfaces/propsInterfaces';
import 'i18n/i18n';
import classes from './Breadcrumbs.module.scss';

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ paramName }) => {
  const param = useParams();
  const location = useLocation();
  const { t } = useTranslation();
  const [paramValue, setParamValue] = useState<string>('');
  const [pathValue, setPathValue] = useState<string>('');

  useEffect(() => {
    const paramKey = Object.keys(param)[0];

    paramKey ? setParamValue(paramKey) : setParamValue('');
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
        {t(links.home.label)}
      </a>
      {pathValue && <NavLink
        end
        to={links[pathValue].to}
        className={({ isActive }) => (isActive ? classes.Active : undefined)}
      >
        <IconContext.Provider value={{ className: classes.Icon }}>
          <MdOutlineKeyboardArrowRight />
        </IconContext.Provider>
        {t(links[pathValue].label)}
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
          {paramName ?? t(links[PARAMS[pathValue as keyof IParams]].label)}
        </span>
      </NavLink>}
    </div>
  );
};
