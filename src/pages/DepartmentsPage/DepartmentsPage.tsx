import React, { FC } from 'react';

import { useQuery, useReactiveVar } from '@apollo/client';
import { Outlet } from 'react-router-dom';

import { GET_DEPARTMENTS } from 'queries/departments';
import { ACTIVE_DEPARTMENT_ID } from 'apollo/state';
import { Breadcrumbs } from 'uiComponents/Breadcrumbs/Breadcrumbs';
import { Department } from 'interfaces/departments';

const DepartmentsPage: FC<{}> = () => {
  const activeDepartmentID = useReactiveVar(ACTIVE_DEPARTMENT_ID);
  const { data } = useQuery<{ departments: Department[] }>(GET_DEPARTMENTS);

  return (
    <>
      <Breadcrumbs
        paramName={
          data?.departments.find(
            (department: Department) => department.id === activeDepartmentID
          )?.name
        }
      />
      <Outlet />
    </>
  );
};

export default DepartmentsPage;
