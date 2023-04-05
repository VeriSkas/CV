import React, { FC } from 'react';

import { useQuery, useReactiveVar } from '@apollo/client';
import { Outlet } from 'react-router-dom';

import { GET_POSITIONS } from 'queries/positions';
import { ACTIVE_POSITION_ID } from 'apollo/state';
import { Breadcrumbs } from 'uiComponents/Breadcrumbs/Breadcrumbs';
import { Position } from 'interfaces/positions';

const PositionPage: FC<{}> = () => {
  const activePositionID = useReactiveVar(ACTIVE_POSITION_ID);
  const { data } = useQuery<{ positions: Position[] }>(GET_POSITIONS);

  return (
    <>
      <Breadcrumbs
        paramName={
          data?.positions.find(
            (position: Position) => position.id === activePositionID
          )?.name
        }
      />
      <Outlet />
    </>
  );
};

export default PositionPage;
