import React, { FC, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { BtnType } from '../../constants/constants';
import { SearchBarProps } from '../../interfaces/propsInterfaces';
import { Search } from '../Search/Search';
import { Button } from '../UI/Button/Button';
import classes from './SearchBar.module.scss';

export const SearchBar: FC<SearchBarProps> = ({
  linkTo,
  btnText,
  title,
  placeholder,
  onChangeSearch,
  children,
}) => {
  const { t } = useTranslation();
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
        <div className={classes.CreateEmployeeBtn}>
          <Link to={linkTo}>
            <Button type={BtnType.transparentWithBorder}>{t(btnText)}</Button>
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
};
