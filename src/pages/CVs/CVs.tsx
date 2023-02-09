import React, { FC, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';

import { GET_CVS } from '../../apollo/queries/cvs';
import { Table } from '../../components/Table/Table';
import {
  cvsTableOptions,
  dropDownOptions,
  LSItems,
  SearchKey,
} from '../../constants/constants';
import { CvItem, TableCvItem } from '../../interfaces/cvs';
import { PATH } from '../../constants/paths';
import { BtnText, PlaceholderText, TitleText } from '../../constants/text';
import { SearchBar } from '../../components/SearchBar/SearchBar';

export const CVs: FC<{}> = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { loading, data } = useQuery<{ cvs: CvItem[] }>(GET_CVS);
  const [cvs, setCVs] = useState<TableCvItem[] | null>(null);
  const [searchValue, setSearchValue] = useState('');
  const { cv, removeCV } = dropDownOptions;

  useEffect(() => {
    if (data) {
      const TableCvItems: TableCvItem[] = data.cvs.map((cv) => ({
        id: cv.id,
        is_template: cv.is_template,
        name: cv.name,
        description: cv.description,
        email: cv.user?.email ?? '',
      }));

      setCVs(TableCvItems);
    }
  }, [data]);

  const dropDownHandler = (label: string, id: string): void => {
    if (label === dropDownOptions.cv.label) {
      localStorage.setItem(LSItems.activeCV, id);
      navigate(`${PATH.cvs}/${id}`);
    }
  };

  return (
    <SearchBar
      linkTo={PATH.createCV}
      btnText={t(BtnText.createCV)}
      title={t(TitleText.cvs)}
      placeholder={t(PlaceholderText.search)}
      onChangeSearch={(value) => {
        setSearchValue(value);
      }}
    >
      <Table
        items={cvs}
        loading={loading}
        headerOptions={cvsTableOptions}
        dropDownOptions={[cv, removeCV]}
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
