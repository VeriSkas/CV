import React, { FC, useState } from 'react';

import { useReactiveVar } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { MAIN_ROLE } from 'apollo/state';
import { Roles } from 'constants/constants';
import { BtnType } from 'constants/variables';
import { SearchBarProps } from 'interfaces/propsInterfaces';
import { Search } from '../Search/Search';
import { Button } from 'uiComponents/Button/Button';
import classes from './SearchBar.module.scss';
import 'i18n/i18n';

export const SearchBar: FC<SearchBarProps> = ({
  linkTo,
  btnText,
  placeholder,
  onChangeSearch,
  createBtnViewForUser,
  children,
}) => {
  const { t } = useTranslation();
  const role = useReactiveVar(MAIN_ROLE);
  const [searchValue, setSearchValue] = useState<string>('');

  const searchHandler = (value: string): void => {
    setSearchValue(value);
    onChangeSearch(value);
  };

  return (
    <div className={classes.SearchBar}>
      <div className={classes.SearchPanel}>
        <Search
          placeholder={placeholder ? t(placeholder) : ''}
          value={searchValue}
          onChange={(value) => {
            searchHandler(value);
          }}
        />
        {(role === Roles.admin.value || createBtnViewForUser) && (
          <div className={classes.CreateEmployeeBtn}>
            <Link to={linkTo}>
              <Button type={BtnType.transparentWithBorder}>
                {t(`${btnText}`)}
              </Button>
            </Link>
          </div>
        )}
      </div>
      {children}
    </div>
  );
};
