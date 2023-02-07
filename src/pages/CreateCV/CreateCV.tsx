import React, { FC } from 'react';

import { useTranslation } from 'react-i18next';

import { CvCreateForm } from '../../components/CvCreateForm/CvCreateForm';
import { FormContainer } from '../../components/FormContainer/FormContainer';
import { TitleText } from '../../constants/text';
import { LanguageItemInDB, NewCV, SkillItemInDB } from '../../interfaces/cvs';
import { Inputs } from '../../interfaces/interfaces';

export const CreateCV: FC<{}> = () => {
  const { t } = useTranslation();

  const submitFormHandler = (
    data: Inputs,
    skills: SkillItemInDB[],
    languages: LanguageItemInDB[]
  ): void => {
    const { name, description } = data;
    const newCV: NewCV = {
      name,
      description,
      skills,
      languages,
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
