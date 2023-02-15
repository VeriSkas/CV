import React, { FC, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { GET_CVS } from '../../apollo/queries/cvs';
import { dropDownOptions } from '../../constants/constants';
import { CvItem, TableCvItem } from '../../types/interfaces/cvs';
import { PATH } from '../../constants/paths';
import { TablePageContainer } from '../../components/TablePageContainer/TablePageContainer';
import { MainPagesInfo } from '../../constants/mainPagesInfo';
import { ACTIVE_CV_ID } from '../../apollo/state';

export const CVs: FC<{}> = () => {
  const navigate = useNavigate();
  const { loading, data } = useQuery<{ cvs: CvItem[] }>(GET_CVS);
  const [cvs, setCVs] = useState<TableCvItem[] | null>(null);

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
      ACTIVE_CV_ID(id);
      navigate(`${PATH.cvs}/${id}`);
    }
  };

  return (
    <TablePageContainer
      mainPagesInfo={MainPagesInfo.cvsPage}
      tableItems={cvs}
      loading={loading}
      dropDownHandler={dropDownHandler}
    />
  );
};
