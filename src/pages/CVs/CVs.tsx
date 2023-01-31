import React, { FC, useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';

import { GET_CVS } from '../../apollo/queries/cvs';
import { Table } from '../../components/Table/Table';
import { cvsTableOptions, dropDownOptions } from '../../constants/constants';
import { CvItem, TableCvItem } from '../../interfaces/cvs';
import classes from './CVs.module.scss';

export const CVs: FC<{}> = () => {
  const { loading, data } = useQuery<{ cvs: CvItem[] }>(GET_CVS);
  const [cvs, setCVs] = useState<TableCvItem[] | null>(null);
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
      <Table
        items={cvs}
        loading={loading}
        headerOptions={cvsTableOptions}
        dropDownOptions={[cv, removeCV]}
        dropDownHandler={(label: string, id: string) => {
          dropDownHandler(label, id);
        }}
      />
    </div>
  );
};
