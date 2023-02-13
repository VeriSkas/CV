import React, { FC, useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';

import { GET_DEPARTMENTS } from '../../apollo/queries/departments';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Table } from '../../components/Table/Table';
import {
  departmentsTableOptions,
  dropDownOptions,
} from '../../constants/constants';
import { PATH } from '../../constants/paths';
import { BtnText, PlaceholderText, TitleText } from '../../constants/text';
import { SearchKey } from '../../constants/variables';
import { Department } from '../../types/interfaces/departments';

export const Departments: FC<{ setError: (error: string) => void }> = ({
  setError,
}) => {
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState('');
  const [departments, setDepartments] = useState<Department[] | null>(null);
  const { data, error, loading } = useQuery<{ departments: Department[] }>(
    GET_DEPARTMENTS
  );
  const { removeDepartment, department } = dropDownOptions;

  useEffect(() => {
    if (data) {
      setDepartments(data.departments);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      setError(error.message);
    }
  }, [error]);

  const dropDownHandler = (label: string, id: string): void => {
    console.log(label, id);
  };

  return (
    <SearchBar
      linkTo={PATH.createDepartment}
      btnText={t(BtnText.createDepartment)}
      title={t(TitleText.departments)}
      placeholder={t(PlaceholderText.search)}
      onChangeSearch={(value) => {
        setSearchValue(value);
      }}
    >
      <Table
        items={departments}
        loading={loading}
        headerOptions={departmentsTableOptions}
        dropDownOptions={[removeDepartment, department]}
        dropDownHandler={(label: string, id: string) => {
          dropDownHandler(label, id);
        }}
        searchValue={{
          value: searchValue,
          searchKey: [SearchKey.name],
        }}
      />
    </SearchBar>
  );
};
