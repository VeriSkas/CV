import React, { FC, ReactNode, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { IconContext } from 'react-icons';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

import { useOptions } from '../../../hooks/useOptions';

import {
  OptionsType,
  SelectProps,
} from '../../../types/interfaces/propsInterfaces';
import classes from './Select.module.scss';

export const Select: FC<SelectProps> = ({
  onChangeHandler,
  label,
  defaultValue,
  labelName,
  register,
}) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeValue, setActiveValue] = useState(() => defaultValue);
  const options: OptionsType[] | null = useOptions(label);

  const changeActiveOption = (id: string, optionValue: string): void => {
    setIsOpen(false);
    onChangeHandler(id, optionValue, label);
    setActiveValue(optionValue);
  };

  const renderOptions = (options: OptionsType[] | []): ReactNode => {
    return options.map((option) => {
      const cls =
        option.value === activeValue
          ? `${classes.Option} ${classes.active}`
          : `${classes.Option}`;

      return (
        <li
          key={option.id}
          onClick={() => {
            changeActiveOption(option.id, option.value);
          }}
          className={cls}
        >
          {t(option.value)}
        </li>
      );
    });
  };

  const toggleOptions = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className={classes.Select}>
        <label>{labelName}</label>
        <div className={classes.Input}>
          <input
            readOnly
            placeholder={defaultValue ?? ''}
            value={activeValue}
            onClick={toggleOptions}
            {...register(label)}
          />
          <div className={classes.Icon} onClick={toggleOptions}>
            <IconContext.Provider value={{ className: classes.Arrow }}>
              {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </IconContext.Provider>
          </div>
          {isOpen && (
            <ul className={classes.Options}>{renderOptions(options)}</ul>
          )}
        </div>
      </div>
      {isOpen && <div className={classes.Aria} onClick={toggleOptions}></div>}
    </>
  );
};
