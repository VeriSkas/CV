import React, { FC, useEffect, useState } from 'react';

import { useMutation, useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

import { GET_POSITIONS, UPDATE_POSITION } from 'queries/positions';
import { FormWithOnlyName } from 'myComponents/FormWithOnlyName/FormWithOnlyName';
import { FormContainer } from 'myComponents/FormContainer/FormContainer';
import { PATH } from 'constants/paths';
import { TypeForm } from 'constants/variables';
import { Position } from 'interfaces/positions';
import { ACTIVE_POSITION_ID } from 'apollo/state';
import { openNotification } from 'uiComponents/Notification/Notification';
import 'i18n/i18n';

export const PositionDetail: FC<{}> = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { positionId } = useParams();
  const [updatePosition, { error, data: updatedData }] =
    useMutation(UPDATE_POSITION);
  const {
    data: positions,
    loading,
    error: getError,
  } = useQuery<{ positions: Position[] }>(GET_POSITIONS);
  const [position, setPosition] = useState<Position | null>(null);

  useEffect(() => {
    if (error) {
      openNotification(error.message);
    }
  }, [error]);

  useEffect(() => {
    if (getError) {
      openNotification(getError.message);
    }
  }, [getError]);

  useEffect(() => {
    if (updatedData) {
      navigate(PATH.positions);
    }
  }, [updatedData]);

  useEffect(() => {
    if (positions) {
      const activePosition = positions.positions.find(
        (position: Position) => position.id === positionId
      );

      if (activePosition) {
        setPosition(activePosition);
        ACTIVE_POSITION_ID(positionId);
      }
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
    <FormContainer title={t('TitleText.updatePosition')}>
      <>
        {loading && t('ContentText.loading')}
        {position && (
          <FormWithOnlyName
            onSubmitForm={submitFormHandler}
            type={TypeForm.updatePosition}
            returnPath={PATH.positions}
            item={position ?? undefined}
          />
        )}
      </>
    </FormContainer>
  );
};
