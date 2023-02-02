import React, { FC, useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';

import { GET_CVS } from '../../apollo/queries/cvs';
import { Table } from '../../components/Table/Table';
import {
  BtnType,
  cvsTableOptions,
  dropDownOptions,
  LSItems,
  SearchKey,
} from '../../constants/constants';
import { CvItem, TableCvItem } from '../../interfaces/cvs';
import classes from './CVs.module.scss';
import { Search } from '../../components/Search/Search';
import { Button } from '../../components/UI/Button/Button';
import { PATH } from '../../constants/paths';
import { BtnText, PlaceholderText, TitleText } from '../../constants/text';

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
    <div className={classes.CVs}>
      <h2>{t(TitleText.cvs)}</h2>
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
        <div>
          <Link to={PATH.createCV}>
            <Button type={BtnType.transparentWithBorder}>
              {t(BtnText.createCV)}
            </Button>
          </Link>
        </div>
      </div>
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
    </div>
  );
};
