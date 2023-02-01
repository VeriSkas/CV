import React, { FC, useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';

import { GET_CVS } from '../../apollo/queries/cvs';
import { Table } from '../../components/Table/Table';
import { cvsTableOptions, dropDownOptions } from '../../constants/constants';
import { CvItem, TableCvItem } from '../../interfaces/cvs';
import classes from './CVs.module.scss';
import { Search } from '../../components/Search/Search';
import { Link } from 'react-router-dom';
import { Button } from '../../components/UI/Button/Button';

export const CVs: FC<{}> = () => {
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

  const dropDownHandler = (label: string, id: string): void => {};

  return (
    <div className={classes.CVs}>
      <h2>CVs</h2>
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
        <div>
          <Link to={'/cvs/createCV'}>
            <Button type="transparentWithBorder">Create new CV</Button>
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
          searchKey: ['name'],
        }}
      />
    </div>
  );
};
