import React, { FC } from 'react';

import { useTranslation } from 'react-i18next';

import { CvCreateForm } from '../../components/CvCreateForm/CvCreateForm';
import { FormContainer } from '../../components/FormContainer/FormContainer';
import { TitleText } from '../../constants/text';
import { NewCV } from '../../interfaces/cvs';
import { NewCvForm } from '../../interfaces/interfaces';

export const CreateCV: FC<{}> = () => {
  const { t } = useTranslation();

  const submitFormHandler = (data: NewCvForm): void => {
    const newCV: NewCV = {
      ...data,
      is_template: true, //temporary
      projectsIds: ['1'], //temporary
    };
    console.log(newCV);
  };

  return (
    <FormContainer title={t(TitleText.createCV)}>
      <CvCreateForm onSubmitForm={submitFormHandler} />
    </FormContainer>
  );
};
