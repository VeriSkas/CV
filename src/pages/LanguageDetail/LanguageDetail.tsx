import React, { FC, useEffect, useState } from 'react';

import { useMutation, useQuery, useReactiveVar } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { GET_LANGUAGES, UPDATE_LANGUAGE } from '../../apollo/queries/languages';
import { ACTIVE_LANGUAGE_ID } from '../../apollo/state';
import { FormContainer } from '../../components/FormContainer/FormContainer';
import { LanguageForm } from '../../components/LanguageForm/LanguageForm';
import { PATH } from '../../constants/paths';
import { ContentText, TitleText } from '../../constants/text';
import { TypeForm } from '../../constants/variables';
import { ILanguageForm } from '../../types/interfaces/interfaces';
import { Language } from '../../types/interfaces/languages';

export const LanguageDetail: FC<{ setError: (error: string) => void }> = ({
  setError,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const activeLanguageID = useReactiveVar(ACTIVE_LANGUAGE_ID);
  const [updateLanguage, { error, data: updatedData }] =
    useMutation(UPDATE_LANGUAGE);
  const { data: languages, loading } = useQuery<{ languages: Language[] }>(
    GET_LANGUAGES
  );
  const [language, setLanguage] = useState<Language | null>(null);

  useEffect(() => {
    if (error) {
      setError(error.message);
    }
  }, [error]);

  useEffect(() => {
    if (updatedData) {
      navigate(PATH.languages);
    }
  }, [updatedData]);

  useEffect(() => {
    if (languages) {
      setLanguage(
        languages.languages.find(
          (language: Language) => language.id === activeLanguageID
        ) as Language
      );
    }
  }, [languages]);

  const submitFormHandler = (
    language: ILanguageForm,
    id?: string
  ): void => {
    void updateLanguage({
      variables: {
        id,
        language,
      },
    });
  };

  return (
    <FormContainer title={t(TitleText.updateLanguage)}>
      <>
        {loading && t(ContentText.loading)}
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
}
