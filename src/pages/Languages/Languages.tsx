import React, { FC, useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';

import { GET_LANGUAGES } from '../../apollo/queries/languages';
import { Language } from '../../types/interfaces/languages';
import { TablePageContainer } from '../../components/TablePageContainer/TablePageContainer';
import { MainPagesInfo } from '../../constants/mainPagesInfo';

export const Languages: FC<{ setError: (error: string) => void }> = ({
  setError,
}) => {
  const [languages, setLanguages] = useState<Language[] | null>(null);
  const { data, error, loading } = useQuery<{ languages: Language[] }>(
    GET_LANGUAGES
  );

  useEffect(() => {
    if (data) {
      setLanguages(data.languages);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      setError(error.message);
    }
  }, [error]);

  const dropDownHandler = (label: string, id: string): void => {
    console.log(label, id);
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
