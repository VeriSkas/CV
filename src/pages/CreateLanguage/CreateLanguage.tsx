import React, { FC, useEffect } from 'react';

import { useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';

import { CREATE_LANGUAGE, GET_LANGUAGES } from '../../apollo/queries/languages';
import { FormContainer } from '../../components/FormContainer/FormContainer';
import { TitleText } from '../../constants/text';
import { TypeForm } from '../../constants/variables';
import { LanguageForm } from '../../components/LanguageForm/LanguageForm';
import { ILanguageForm } from '../../types/interfaces/interfaces';
import { Language } from '../../types/interfaces/languages';

export const CreateLanguage: FC<{ setError: (error: string) => void }> = ({
  setError,
}) => {
  const { t } = useTranslation();
  const [createLanguage, { error }] = useMutation(CREATE_LANGUAGE);

  useEffect(() => {
    if (error) {
      setError(error.message);
    }
  }, [error]);

  const submitFormHandler = async (language: ILanguageForm): Promise<void> => {
    await createLanguage({
      variables: {
        language,
      },
      update(cache, { data: newLanguage }) {
        const languagesData = cache.readQuery<{ languages: Language[] }>({
          query: GET_LANGUAGES,
        });

        if (languagesData) {
          cache.writeQuery({
            query: GET_LANGUAGES,
            data: {
              positions: [
                ...languagesData.languages,
                newLanguage?.createLanguage,
              ],
            },
          });
        }
      },
    });
  };

  return (
    <FormContainer title={t(TitleText.createLanguage)}>
      <LanguageForm
        onSubmitForm={submitFormHandler}
        type={TypeForm.createLanguage}
      />
    </FormContainer>
  );
};
