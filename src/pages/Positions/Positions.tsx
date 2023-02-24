import React, { FC, useEffect, useState } from 'react';

import { useMutation, useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import { DELETE_POSITION, GET_POSITIONS } from '../../apollo/queries/positions';
import { Position } from '../../types/interfaces/positions';
import { TablePageContainer } from '../../components/TablePageContainer/TablePageContainer';
import { MainPagesInfo } from '../../constants/mainPagesInfo';
import { dropDownOptions } from '../../constants/constants';
import { PATH } from '../../constants/paths';
import { LSItems } from '../../constants/variables';
import { ACTIVE_POSITION_ID } from '../../apollo/state';

export const Positions: FC<{ setError: (error: string) => void }> = ({
  setError,
}) => {
  const navigate = useNavigate();
  const [positions, setPositions] = useState<Position[] | null>(null);
  const [removePosition, { error: removeError }] = useMutation(DELETE_POSITION);
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

  useEffect(() => {
    if (removeError) {
      setError(removeError.message);
    }
  }, [removeError]);

  const dropDownHandler = async (label: string, id: string): Promise<void> => {
    if (label === dropDownOptions.position.label) {
      navigate(`${PATH.positions}/${id}`);
      localStorage.setItem(LSItems.activePosition, id);
      ACTIVE_POSITION_ID(id);
    }

    if (label === dropDownOptions.removePosition.label) {
      await deletePosition(id);
    }
  };

  const deletePosition = async (id: string): Promise<void> => {
    await removePosition({
      variables: { id },
      update(cache) {
        const positionsFromCacheWithoutDeleted = cache
          .readQuery<{ positions: Position[] }>({
            query: GET_POSITIONS,
          })
          ?.positions.filter((position) => position.id !== id);

        if (positionsFromCacheWithoutDeleted) {
          cache.writeQuery({
            query: GET_POSITIONS,
            data: {
              positions: [...positionsFromCacheWithoutDeleted],
            },
          });
        }
      },
    });
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
