import React, { FC, useEffect } from 'react';

import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';

import { GET_CV } from '../../apollo/queries/cvs';
import classes from './CvDetails.module.scss';
import { CvForm } from '../../components/CvForm/CvForm ';
import {
  CvItemDetails,
  LanguageItemInDB,
  SkillItemInDB,
} from '../../interfaces/cvs';
import { Inputs } from '../../interfaces/interfaces';
import { LSItems, TypeForm } from '../../constants/constants';
import { ContentText, TitleText } from '../../constants/text';

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
    <div className={classes.CvDetails}>
      {loading ? (
        <div>{t(ContentText.loading)}</div>
      ) : (
        <div className={classes.CvDetailsContainer}>
          <h2 className={classes.Title}>{t(TitleText.cvDetails)}</h2>
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
        </div>
      )}
    </div>
  );
};
