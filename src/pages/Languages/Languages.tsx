import React, { FC, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';

import { DELETE_LANGUAGE, GET_LANGUAGES } from 'queries/languages';
import { Language } from 'interfaces/languages';
import { TablePageContainer } from 'myComponents/TablePageContainer/TablePageContainer';
import { MainPagesInfo } from 'constants/mainPagesInfo';
import { dropDownOptions } from 'constants/constants';
import { ACTIVE_LANGUAGE_ID } from 'apollo/state';
import { LSItems } from 'constants/variables';
import { PATH } from 'constants/paths';
import { openNotification } from 'uiComponents/Notification/Notification';

export const Languages: FC<{}> = () => {
  const navigate = useNavigate();
  const [languages, setLanguages] = useState<Language[] | null>(null);
  const { data, error, loading } = useQuery<{ languages: Language[] }>(
    GET_LANGUAGES
  );
  const [removeLanguage, { error: removeError }] = useMutation(DELETE_LANGUAGE);

  useEffect(() => {
    if (data) {
      const languages = data.languages.map((language) => ({
        name: language.name,
        iso2: language.iso2,
        id: language.id,
      }));
      setLanguages(languages);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      openNotification(error.message);
    }
  }, [error]);

  useEffect(() => {
    if (removeError) {
      openNotification(removeError.message);
    }
  }, [removeError]);

  const dropDownHandler = async (label: string, id: string): Promise<void> => {
    if (label === dropDownOptions.language.label) {
      navigate(`${PATH.languages}/${id}`);
      localStorage.setItem(LSItems.activeLanguage, id);
      ACTIVE_LANGUAGE_ID(id);
    }

    if (label === dropDownOptions.removeLanguage.label) {
      await deleteLanguage(id);
    }
  };

  const deleteLanguage = async (id: string): Promise<void> => {
    await removeLanguage({
      variables: { id },
      update(cache) {
        const languagesFromCacheWithoutDeleted = cache
          .readQuery<{ languages: Language[] }>({
            query: GET_LANGUAGES,
          })
          ?.languages.filter((language) => language.id !== id);

        if (languagesFromCacheWithoutDeleted) {
          cache.writeQuery({
            query: GET_LANGUAGES,
            data: {
              languages: [...languagesFromCacheWithoutDeleted],
            },
          });
        }
      },
    });
  };

  return (
    <TablePageContainer
      mainPagesInfo={MainPagesInfo.languagesPage}
      tableItems={languages}
      loading={loading}
      dropDownHandler={dropDownHandler}
    />
  );
};
