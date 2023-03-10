import React, { FC } from 'react';

import { useQuery, useReactiveVar } from '@apollo/client';
import { Outlet } from 'react-router-dom';

import { GET_LANGUAGES } from 'queries/languages';
import { ACTIVE_LANGUAGE_ID } from 'apollo/state';
import { Breadcrumbs } from 'uiComponents/Breadcrumbs/Breadcrumbs';
import { Language } from 'interfaces/languages';

const LanguagesPage: FC<{}> = () => {
  const activeLanguageID = useReactiveVar(ACTIVE_LANGUAGE_ID);
  const { data } = useQuery<{ languages: Language[] }>(GET_LANGUAGES);

  return (
    <>
      <Breadcrumbs
        paramName={
          data?.languages.find(
            (language: Language) => language.id === activeLanguageID
          )?.name
        }
      />
      <Outlet />
    </>
  );
};

export default LanguagesPage;
