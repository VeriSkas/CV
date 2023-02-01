import React, { FC, useEffect } from 'react';

import { useQuery } from '@apollo/client';

import { GET_CV } from '../../apollo/queries/cvs';
import classes from './CvDetails.module.scss';

export const CvDetails: FC<{}> = () => {
  const { loading, data } = useQuery(GET_CV, {
    variables: {
      id: localStorage.getItem('activeCV'),
    },
  });

  useEffect(() => {}, [data]);

  return (
    <>
      {loading ? (
        <div>...Loading</div>
      ) : (
        <div className={classes.CvDetails}>CV Details</div>
      )}
    </>
  );
};
