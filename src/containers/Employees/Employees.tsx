import React, { FC, useState } from 'react';

import { EmployeesTable } from '../../components/EmployeesTable/EmployeesTable';
import { Search } from '../../components/Search/Search';
import { Button } from '../../components/UI/Button/Button';
import classes from './Employees.module.scss';

export const Employees: FC<{}> = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className={classes.Employees}>
      <div className={classes.SearchPanel}>
        <div className={classes.Search}>
          <Search
            placeholder="Search"
            value={searchValue}
            onChange={(value) => {
              setSearchValue(value);
            }}
          />
        </div>
        <div className={classes.CreateEmployeeBtn}>
          <Button type="transparentWithBorder">Create employee</Button>
        </div>
      </div>
      <EmployeesTable searchValue={searchValue} />
    </div>
  );
};