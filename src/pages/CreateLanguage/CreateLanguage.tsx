import React, { FC, useEffect } from 'react';

import { useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';

import { CREATE_LANGUAGE, GET_LANGUAGES } from 'queries/languages';
import { FormContainer } from 'myComponents/FormContainer/FormContainer';
import { TypeForm } from 'constants/variables';
import { LanguageForm } from 'myComponents/LanguageForm/LanguageForm';
import { ILanguageForm } from 'interfaces/interfaces';
import { Language } from 'interfaces/languages';
import { openNotification } from 'uiComponents/Notification/Notification';
import 'i18n/i18n';

export const CreateLanguage: FC<{}> = () => {
  const { t } = useTranslation();
  const [createLanguage, { error }] = useMutation(CREATE_LANGUAGE);

  useEffect(() => {
    if (error) {
      openNotification(error.message);
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
    <FormContainer title={t('TitleText.createLanguage')}>
      <LanguageForm
        onSubmitForm={submitFormHandler}
        type={TypeForm.createLanguage}
      />
    </FormContainer>
  );
};
