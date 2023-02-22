import React, { FC } from 'react';

import { useQuery, useReactiveVar } from '@apollo/client';
import { Outlet } from 'react-router-dom';

import { GET_CV } from '../../apollo/queries/cvs';
import { ACTIVE_CV_ID } from '../../apollo/state';
import { Breadcrumbs } from '../../components/UI/Breadcrumbs/Breadcrumbs';
import { CvItemDetails } from '../../types/interfaces/cvs';

export const CVsPage: FC<{}> = () => {
  const activeCV = useReactiveVar(ACTIVE_CV_ID);
  const { data } = useQuery<{ cv: CvItemDetails }>(GET_CV, {
    variables: {
      id: activeCV,
    },
  });
  return (
    <>
      <Breadcrumbs paramName={data?.cv.name} />
      <Outlet />
    </>
  );
};
