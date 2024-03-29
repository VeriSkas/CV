import React, { FC, useEffect } from 'react';

import { useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';

import { CREATE_POSITION, GET_POSITIONS } from 'queries/positions';
import { FormWithOnlyName } from 'myComponents/FormWithOnlyName/FormWithOnlyName';
import { FormContainer } from 'myComponents/FormContainer/FormContainer';
import { TypeForm } from 'constants/variables';
import { Position } from 'interfaces/positions';
import { PATH } from 'constants/paths';
import { openNotification } from 'uiComponents/Notification/Notification';
import 'i18n/i18n';

export const CreatePosition: FC<{}> = () => {
  const { t } = useTranslation();
  const [createPosition, { error }] = useMutation(CREATE_POSITION);

  useEffect(() => {
    if (error) {
      openNotification(error.message);
    }
  }, [error]);

  const submitFormHandler = async (position: {
    name: string,
  }): Promise<void> => {
    await createPosition({
      variables: {
        position,
      },
      update(cache, { data: newPosition }) {
        const positionsData = cache.readQuery<{ positions: Position[] }>({
          query: GET_POSITIONS,
        });

        if (positionsData) {
          cache.writeQuery({
            query: GET_POSITIONS,
            data: {
              positions: [
                ...positionsData.positions,
                newPosition?.createPosition,
              ],
            },
          });
        }
      },
    });
  };

  return (
    <FormContainer title={t('TitleText.createPosition')}>
      <FormWithOnlyName
        onSubmitForm={submitFormHandler}
        type={TypeForm.createPosition}
        returnPath={PATH.positions}
      />
    </FormContainer>
  );
};
