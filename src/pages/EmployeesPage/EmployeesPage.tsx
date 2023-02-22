import React, { FC } from 'react';

import { useQuery, useReactiveVar } from '@apollo/client';
import { Outlet } from 'react-router-dom';

import { GET_USER } from '../../apollo/queries/users';
import { ACTIVE_USER_ID } from '../../apollo/state';
import { Breadcrumbs } from '../../components/UI/Breadcrumbs/Breadcrumbs';
import { UserInfo } from '../../types/interfaces/user';

export const EmployeesPage: FC<{}> = () => {
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
