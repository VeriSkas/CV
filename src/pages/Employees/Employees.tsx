import React, { FC, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { EmployeesTable } from '../../components/EmployeesTable/EmployeesTable';
import { Search } from '../../components/Search/Search';
import { Button } from '../../components/UI/Button/Button';
import { BtnType, SearchKey } from '../../constants/constants';
import { PATH } from '../../constants/paths';
import { BtnText, PlaceholderText, TitleText } from '../../constants/text';
import classes from './Employees.module.scss';

export const Employees: FC<{}> = () => {
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className={classes.Employees}>
      <h2>{t(TitleText.employees)}</h2>
      <div className={classes.SearchPanel}>
        <div className={classes.Search}>
          <Search
            placeholder={t(PlaceholderText.search)}
            value={searchValue}
            onChange={(value) => {
              setSearchValue(value);
            }}
          />
        </div>
        <div className={classes.CreateEmployeeBtn}>
          <Link to={PATH.createEmployee}>
            <Button type={BtnType.transparentWithBorder}>
              {t(BtnText.createEmployee)}
            </Button>
          </Link>
        </div>
      </div>
      <EmployeesTable
        searchValue={{
          value: searchValue,
          searchKey: [SearchKey.first_name, SearchKey.last_name],
        }}
      />
    </div>
  );
};
