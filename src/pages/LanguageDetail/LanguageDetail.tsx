import React, { FC, useEffect, useState } from 'react';

import { useMutation, useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

import { GET_LANGUAGES, UPDATE_LANGUAGE } from '../../apollo/queries/languages';
import { ACTIVE_LANGUAGE_ID } from '../../apollo/state';
import { FormContainer } from '../../components/FormContainer/FormContainer';
import { LanguageForm } from '../../components/LanguageForm/LanguageForm';
import { PATH } from '../../constants/paths';
import { TypeForm } from '../../constants/variables';
import { ILanguageForm } from '../../types/interfaces/interfaces';
import { Language } from '../../types/interfaces/languages';
import { openNotification } from '../../components/UI/Notification/Notification';
import '../../i18n/i18n';

export const LanguageDetail: FC<{}> = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { languageId } = useParams();
  const [updateLanguage, { error, data: updatedData }] =
    useMutation(UPDATE_LANGUAGE);
  const {
    data: languages,
    loading,
    error: getError,
  } = useQuery<{ languages: Language[] }>(GET_LANGUAGES);
  const [language, setLanguage] = useState<Language | null>(null);

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
      navigate(PATH.languages);
    }
  }, [updatedData]);

  useEffect(() => {
    if (languages) {
      const activeLanguage = languages.languages.find(
        (language: Language) => language.id === languageId
      );

      if (activeLanguage) {
        setLanguage(activeLanguage);
        ACTIVE_LANGUAGE_ID(languageId);
      }
    }
  }, [languages]);

  const submitFormHandler = (language: ILanguageForm, id?: string): void => {
    void updateLanguage({
      variables: {
        id,
        language,
      },
    });
  };

  return (
    <FormContainer title={t('TitleText.updateLanguage')}>
      <>
        {loading && t('ContentText.loading')}
        {language && (
          <LanguageForm
            onSubmitForm={submitFormHandler}
            item={language}
            type={TypeForm.updateLanguage}
          />
        )}
      </>
    </FormContainer>
  );
};
