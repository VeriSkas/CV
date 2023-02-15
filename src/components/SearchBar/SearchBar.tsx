import React, { FC, useState } from 'react';

import { useReactiveVar } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { MAIN_ROLE } from '../../apollo/state';
import { Roles } from '../../constants/constants';
import { BtnType } from '../../constants/variables';
import { SearchBarProps } from '../../types/interfaces/propsInterfaces';
import { Search } from '../Search/Search';
import { Button } from '../UI/Button/Button';
import classes from './SearchBar.module.scss';

export const SearchBar: FC<SearchBarProps> = ({
  linkTo,
  btnText,
  title,
  placeholder,
  onChangeSearch,
  createBtnViewForUser,
  children,
}) => {
  const { t } = useTranslation();
  const role = useReactiveVar(MAIN_ROLE);
  const [searchValue, setSearchValue] = useState('');

  const searchHandler = (value: string): void => {
    setSearchValue(value);
    onChangeSearch(value);
  };

  return (
    <div className={classes.SearchBar}>
      <h2>{t(title)}</h2>
      <div className={classes.SearchPanel}>
        <div className={classes.Search}>
          <Search
            placeholder={t(placeholder ?? '')}
            value={searchValue}
            onChange={(value) => {
              searchHandler(value);
            }}
          />
        </div>
        {(role === Roles.admin.id || createBtnViewForUser) && (
          <div className={classes.CreateEmployeeBtn}>
            <Link to={linkTo}>
              <Button type={BtnType.transparentWithBorder}>{t(btnText)}</Button>
            </Link>
          </div>
        )}
      </div>
      {children}
    </div>
  );
};
