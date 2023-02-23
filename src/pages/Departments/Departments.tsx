import React, { FC, useEffect, useState } from 'react';

import { useMutation, useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import {
  DELETE_DEPARTMENT,
  GET_DEPARTMENTS,
} from '../../apollo/queries/departments';
import { Department } from '../../types/interfaces/departments';
import { TablePageContainer } from '../../components/TablePageContainer/TablePageContainer';
import { MainPagesInfo } from '../../constants/mainPagesInfo';
import { dropDownOptions } from '../../constants/constants';
import { PATH } from '../../constants/paths';
import { LSItems } from '../../constants/variables';
import { ACTIVE_DEPARTMENT_ID } from '../../apollo/state';

export const Departments: FC<{ setError: (error: string) => void }> = ({
  setError,
}) => {
  const navigate = useNavigate();
  const [departments, setDepartments] = useState<Department[] | null>(null);
  const { data, error, loading } = useQuery<{ departments: Department[] }>(
    GET_DEPARTMENTS
  );
  const [removeDepartment, { error: deleteError }] =
    useMutation(DELETE_DEPARTMENT);

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

  useEffect(() => {
    if (deleteError) {
      setError(deleteError.message);
    }
  }, [deleteError]);

  const dropDownHandler = async (label: string, id: string): Promise<void> => {
    if (label === dropDownOptions.department.label) {
      navigate(`${PATH.departments}/${id}`);
      localStorage.setItem(LSItems.activeDepartment, id);
      ACTIVE_DEPARTMENT_ID(id);
    }
    if (label === dropDownOptions.removeDepartment.label) {
      await deleteDepartment(id);
    }
  };

  const deleteDepartment = async (id: string): Promise<void> => {
    await removeDepartment({
      variables: {
        id,
      },
      update(cache) {
        const departmentsFromCacheWithoutDeleted = cache
          .readQuery<{ departments: Department[] }>({
            query: GET_DEPARTMENTS,
          })
          ?.departments.filter((department) => department.id !== id);

        if (departmentsFromCacheWithoutDeleted) {
          cache.writeQuery({
            query: GET_DEPARTMENTS,
            data: {
              departments: [...departmentsFromCacheWithoutDeleted],
            },
          });
        }
      },
    });
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
