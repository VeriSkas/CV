import React, { FC, ReactNode } from 'react';

import { NavLink } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';
import { IconContext } from 'react-icons';
import { useTranslation } from 'react-i18next';

import { links } from 'constants/constants';
import { Backdrop } from 'uiComponents/Backdrop/Backdrop';
import { SideBarProps } from 'interfaces/propsInterfaces';
import classes from './SideBar.module.scss';

export const SideBar: FC<SideBarProps> = ({ onClose, isOpen }) => {
  const { t } = useTranslation();
  const {
    employees,
    projects,
    cvs,
    departments,
    positions,
    skills,
    languages,
  } = links;
  const navLinks = [
    employees,
    projects,
    cvs,
    departments,
    positions,
    skills,
    languages,
  ];

  const renderLinks = (): ReactNode =>
    navLinks.map((link) => (
      <li key={link.label}>
        <NavLink to={link.to} onClick={onClose}>
          <IconContext.Provider value={{ className: classes.Icon }}>
            {link.icon}
          </IconContext.Provider>
          <span>{t(link.label)}</span>
        </NavLink>
      </li>
    ));

  return (
    <>
      <nav
        className={
          isOpen ? classes.SideBar : `${classes.SideBar} ${classes.close}`
        }
      >
        <div className={classes.NavHeader}>
          <span onClick={onClose}>
            <IconContext.Provider value={{ className: classes.Cross }}>
              <RxCross2 />
            </IconContext.Provider>
          </span>
        </div>
        <ul className={classes.NavLinks}>{renderLinks()}</ul>
      </nav>
      {isOpen && <Backdrop onClick={onClose} />}
    </>
  );
};
