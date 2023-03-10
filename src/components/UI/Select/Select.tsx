import React, { FC, ReactNode, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { IconContext } from 'react-icons';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

import { useOptions } from 'hooks/useOptions';

import { OptionsType, SelectProps } from 'interfaces/propsInterfaces';
import classes from './Select.module.scss';

export const Select: FC<SelectProps> = ({
  onChangeHandler,
  label,
  defaultValue,
  labelName,
  register,
  disabled,
}) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeValue, setActiveValue] = useState<string>(() => defaultValue);
  const options: OptionsType[] | null = useOptions(label);

  const changeActiveOption = (value: string, optionLabel: string): void => {
    setIsOpen(false);
    onChangeHandler(value, optionLabel, label);
    setActiveValue(optionLabel);
  };

  const renderOptions = (options: OptionsType[] | []): ReactNode =>
    options.map((option) => {
      const cls =
        option.label === activeValue
          ? `${classes.Option} ${classes.active}`
          : `${classes.Option}`;

      return (
        <li
          key={option.value}
          onClick={() => {
            changeActiveOption(option.value, option.label);
          }}
          className={cls}
        >
          {t(option.label)}
        </li>
      );
    });

  const toggleOptions = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className={classes.Select}>
        <label>{labelName}</label>
        {!disabled ? (
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
        ) : (
          <div className={classes.Input}>
            <input
              readOnly
              placeholder={defaultValue ?? ''}
              value={activeValue}
            />
          </div>
        )}
      </div>
      {isOpen && <div className={classes.Aria} onClick={toggleOptions}></div>}
    </>
  );
};
