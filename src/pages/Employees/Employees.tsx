import React, { FC, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { EmployeesTable } from '../../components/EmployeesTable/EmployeesTable';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { PATH } from '../../constants/paths';
import { BtnText, PlaceholderText, TitleText } from '../../constants/text';
import { SearchKey } from '../../constants/variables';

export const Employees: FC<{}> = () => {
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState('');

  return (
    <SearchBar
      onChangeSearch={(value: string) => {
        setSearchValue(value);
      }}
      linkTo={PATH.createEmployee}
      btnText={t(BtnText.createEmployee)}
      title={t(TitleText.employees)}
      placeholder={t(PlaceholderText.search)}
    >
      <EmployeesTable
        searchValue={{
          value: searchValue,
          searchKey: [SearchKey.first_name, SearchKey.last_name],
        }}
      />
    </SearchBar>
  );
};
