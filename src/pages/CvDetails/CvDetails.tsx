import React, { FC, useEffect } from 'react';

import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';

import { GET_CV } from '../../apollo/queries/cvs';
import { CvForm } from '../../components/CvForm/CvForm ';
import {
  CvItemDetails,
  LanguageItemInDB,
  SkillItemInDB,
} from '../../interfaces/cvs';
import { Inputs } from '../../interfaces/interfaces';
import { LSItems, TypeForm } from '../../constants/constants';
import { ContentText, TitleText } from '../../constants/text';
import { FormContainer } from '../../components/FormContainer/FormContainer';

export const CvDetails: FC<{}> = () => {
  const user = localStorage.getItem(LSItems.userId);
  const { t } = useTranslation();
  const { loading, data } = useQuery<{ cv: CvItemDetails }>(GET_CV, {
    variables: {
      id: localStorage.getItem(LSItems.activeCV),
    },
  });

  useEffect(() => {}, [data]);

  const submitFormHandler = (
    data: Inputs,
    skills: SkillItemInDB[],
    languages: LanguageItemInDB[],
    id?: string
  ): void => {};

  return (
    <FormContainer title={t(TitleText.cvDetails)}>
      <>
        {loading && <div>{t(ContentText.loading)}</div>}
        {data && (
          <CvForm
            cv={data.cv}
            onSubmitForm={(
              data: Inputs,
              skills: SkillItemInDB[],
              languages: LanguageItemInDB[],
              id?: string
            ) => {
              submitFormHandler(data, skills, languages, id);
            }}
            type={
              user === data.cv.user?.id ? TypeForm.cvUser : TypeForm.cvDetails
            }
          />
        )}
      </>
    </FormContainer>
  );
};
