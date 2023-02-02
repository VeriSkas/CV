import React, { ChangeEvent, FC, ReactNode, useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { IconContext } from 'react-icons';
import { GoPlus } from 'react-icons/go';
import { RxCross2 } from 'react-icons/rx';

import { LanguageItem, SkillItem } from '../../interfaces/cvs';
import classes from './ListCreator.module.scss';

export const ListCreator: FC<{
  data: SkillItem[] | LanguageItem[],
  title: string,
  disabled: boolean,
  changedData: (data: SkillItem[] | LanguageItem[]) => void,
}> = ({ data, title, disabled, changedData }) => {
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState('');
  const [dataArray, setDataArray] = useState(data);

  useEffect(() => {
    changedData(dataArray);
  }, [dataArray]);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const addItem = (): void => {
    setDataArray((prev) => [{ name: inputValue }, ...prev]);
    setInputValue('');
  };

  const removeItem = (i: number): void => {
    setDataArray((prev) => prev.filter((item, ind) => ind !== i));
  };

  const renderDataItems = (): ReactNode => {
    return dataArray.map((item, i) => {
      return (
        <li key={item.name} className={classes.ListItem}>
          {t(item.name)}
          {!disabled && (
            <div
              className={classes.IconRemove}
              onClick={() => {
                removeItem(i);
              }}
            >
              <IconContext.Provider value={{ className: classes.Icon }}>
                <RxCross2 />
              </IconContext.Provider>
            </div>
          )}
        </li>
      );
    });
  };

  return (
    <div className={classes.ListCreator}>
      <h3>{t(title)}</h3>
      <div className={classes.Input}>
        {!disabled && (
          <>
            <input
              value={inputValue}
              onChange={onChangeHandler}
              placeholder={t(title.toLowerCase())}
            />
            <div className={classes.IconAdd} onClick={addItem}>
              <IconContext.Provider value={{ className: classes.Icon }}>
                <GoPlus />
              </IconContext.Provider>
            </div>
          </>
        )}
      </div>
      <ul className={classes.List}>{renderDataItems()}</ul>
    </div>
  );
};
