import React, { FC, useEffect } from 'react';

import { useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';

import { CREATE_POSITION, GET_POSITIONS } from '../../apollo/queries/positions';
import { FormWithOnlyName } from '../../components/FormWithOnlyName/FormWithOnlyName';
import { FormContainer } from '../../components/FormContainer/FormContainer';
import { TitleText } from '../../constants/text';
import { TypeForm } from '../../constants/variables';
import { Position } from '../../types/interfaces/positions';
import { PATH } from '../../constants/paths';

export const CreatePosition: FC<{ setError: (error: string) => void }> = ({
  setError,
}) => {
  const { t } = useTranslation();
  const [createPosition, { error }] = useMutation(CREATE_POSITION);

  useEffect(() => {
    if (error) {
      setError(error.message);
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
    <FormContainer title={t(TitleText.createPosition)}>
      <FormWithOnlyName
        onSubmitForm={submitFormHandler}
        type={TypeForm.createPosition}
        returnPath={PATH.positions}
      />
    </FormContainer>
  );
};
