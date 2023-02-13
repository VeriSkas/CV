import React, { FC, useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';

import { GET_POSITIONS } from '../../apollo/queries/positions';
import { Position } from '../../types/interfaces/positions';
import { TablePageContainer } from '../../components/TablePageContainer/TablePageContainer';
import { MainPagesInfo } from '../../constants/mainPagesInfo';

export const Positions: FC<{ setError: (error: string) => void }> = ({
  setError,
}) => {
  const [positions, setPositions] = useState<Position[] | null>(null);
  const { data, error, loading } = useQuery<{ positions: Position[] }>(
    GET_POSITIONS
  );

  useEffect(() => {
    if (data) {
      setPositions(data.positions);
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
      mainPagesInfo={MainPagesInfo.positionsPage}
      tableItems={positions}
      loading={loading}
      dropDownHandler={dropDownHandler}
    />
  );
};
