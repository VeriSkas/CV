import React, { FC } from 'react';

import { useTranslation } from 'react-i18next';

import { CvCreateForm } from '../../components/CvCreateForm/CvCreateForm';
import { FormContainer } from '../../components/FormContainer/FormContainer';
import { TitleText } from '../../constants/text';

export const CreateCV: FC<{}> = () => {
  const { t } = useTranslation();
  return (
    <FormContainer title={t(TitleText.createCV)}>
      <CvCreateForm />
    </FormContainer>
  );
};
