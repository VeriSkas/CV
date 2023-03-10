import React, { FC } from 'react';

import { useQuery, useReactiveVar } from '@apollo/client';
import { Outlet } from 'react-router-dom';

import { GET_USER } from 'queries/users';
import { ACTIVE_USER_ID } from 'apollo/state';
import { Breadcrumbs } from 'uiComponents/Breadcrumbs/Breadcrumbs';
import { UserInfo } from 'interfaces/user';

const EmployeesPage: FC<{}> = () => {
  const activeUserID = useReactiveVar(ACTIVE_USER_ID);
  const { data } = useQuery<{ user: UserInfo }>(GET_USER, {
    variables: {
      id: activeUserID,
    },
  });
  return (
    <>
      <Breadcrumbs
        paramName={data?.user.profile.full_name ?? data?.user.email}
      />
      <Outlet />
    </>
  );
};

export default EmployeesPage;
