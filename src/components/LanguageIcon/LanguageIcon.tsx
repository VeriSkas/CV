import React, { FC, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { IconContext } from 'react-icons';
import { IoLanguage } from 'react-icons/io5';

import { languagesOptions } from 'constants/constants';
import { LSItems } from 'constants/variables';
import { DropDown } from 'uiComponents/DropDown/DropDown';
import classes from './LanguageIcon.module.scss';

export const LanguageIcon: FC<{}> = () => {
  const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false);
  const { i18n } = useTranslation();
  const { english, russian } = languagesOptions;
  const dropdownOptions = [english, russian];

  const toggleDropDown = (): void => {
    setIsOpenDropDown((prev) => !prev);
  };

  const onCloseDropDown = (label: string): void => {
    localStorage.setItem(LSItems.pageLanguage, label);
    void i18n.changeLanguage(label);
  };

  return (
    <div className={classes.LanguageIcon}>
      <div className={classes.Icon} onClick={toggleDropDown}>
        <IconContext.Provider value={{ className: classes.LanguageIcon }}>
          <IoLanguage />
        </IconContext.Provider>
      </div>
      {isOpenDropDown && (
        <DropDown
          options={dropdownOptions}
          onClick={(label: string) => {
            onCloseDropDown(label);
          }}
        />
      )}
    </div>
  );
};
