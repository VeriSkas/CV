import React, { FC, useEffect, useState } from 'react';

import { useMutation, useQuery, useReactiveVar } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import {
  GET_POSITIONS,
  UPDATE_POSITION,
} from '../../apollo/queries/positions';
import { DepartmentAndPositionForm } from '../../components/DepartmentAndPositionForm/DepartmentAndPositionForm';
import { FormContainer } from '../../components/FormContainer/FormContainer';
import { PATH } from '../../constants/paths';
import { ContentText, TitleText } from '../../constants/text';
import { TypeForm } from '../../constants/variables';
import { Position } from '../../types/interfaces/positions';
import { ACTIVE_POSITION_ID } from '../../apollo/state';

export const PositionDetail: FC<{ setError: (error: string) => void }> = ({
  setError,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const activePositionID = useReactiveVar(ACTIVE_POSITION_ID);
  const [updatePosition, { error, data: updatedData }] =
    useMutation(UPDATE_POSITION);
  const { data: positions, loading } = useQuery<{ positions: Position[] }>(
    GET_POSITIONS
  );
  const [position, setPosition] = useState<Position | null>(null);

  useEffect(() => {
    if (error) {
      setError(error.message);
    }
  }, [error]);

  useEffect(() => {
    if (updatedData) {
      navigate(PATH.positions);
    }
  }, [updatedData]);

  useEffect(() => {
    if (positions) {
      setPosition(
        positions.positions.find(
          (position: Position) => position.id === activePositionID
        ) as Position
      );
    }
  }, [positions]);

  const submitFormHandler = (
    position: {
      name: string,
    },
    id?: string
  ): void => {
    void updatePosition({
      variables: {
        id,
        position,
      },
    });
  };

  return (
    <FormContainer title={t(TitleText.updatePosition)}>
      <>
        {loading && t(ContentText.loading)}
        {position && (
          <DepartmentAndPositionForm
            onSubmitForm={submitFormHandler}
            type={TypeForm.updatePosition}
            item={position ?? undefined}
          />
        )}
      </>
    </FormContainer>
  );
};
