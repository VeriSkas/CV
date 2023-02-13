import React, { FC, useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';

import { GET_DEPARTMENTS } from '../../apollo/queries/departments';
import { Department } from '../../types/interfaces/departments';
import { TablePageContainer } from '../../components/TablePageContainer/TablePageContainer';
import { MainPagesInfo } from '../../constants/mainPagesInfo';

export const Departments: FC<{ setError: (error: string) => void }> = ({
  setError,
}) => {
  const [departments, setDepartments] = useState<Department[] | null>(null);
  const { data, error, loading } = useQuery<{ departments: Department[] }>(
    GET_DEPARTMENTS
  );

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
    <TablePageContainer
      mainPagesInfo={MainPagesInfo.departmentsPage}
      tableItems={departments}
      loading={loading}
      dropDownHandler={dropDownHandler}
    />
  );
};
