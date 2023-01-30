import React, { FC, ReactNode } from 'react';

import { NavLink } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';
import { IconContext } from 'react-icons';

import { links } from '../../constants/constants';
import classes from './SideBar.module.scss';
import { Backdrop } from '../UI/Backdrop/Backdrop';

export const SideBar: FC<{ onClose: () => void, isOpen: boolean }> = (
  props
) => {
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

  const renderLinks = (): ReactNode => {
    return navLinks.map((link) => {
      return (
        <li key={link.label}>
          <NavLink to={link.to} onClick={props.onClose}>
            <IconContext.Provider value={{ className: classes.Icon }}>
              {link.icon}
            </IconContext.Provider>
            <span>{link.label}</span>
          </NavLink>
        </li>
      );
    });
  };

  return (
    <>
      <nav
        className={
          props.isOpen ? classes.SideBar : `${classes.SideBar} ${classes.close}`
        }
      >
        <div className={classes.NavHeader}>
          <span onClick={props.onClose}>
            <IconContext.Provider value={{ className: classes.Cross }}>
              <RxCross2 />
            </IconContext.Provider>
          </span>
        </div>
        <ul>{renderLinks()}</ul>
      </nav>
      {props.isOpen && <Backdrop onClick={props.onClose} />}
    </>
  );
};
