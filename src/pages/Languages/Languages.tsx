import React, { FC, useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';

import { GET_LANGUAGES } from '../../apollo/queries/languages';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Table } from '../../components/Table/Table';
import {
  dropDownOptions,
  languagesTableOptions,
} from '../../constants/constants';
import { PATH } from '../../constants/paths';
import { BtnText, PlaceholderText, TitleText } from '../../constants/text';
import { SearchKey } from '../../constants/variables';
import { Language } from '../../types/interfaces/languages';

export const Languages: FC<{ setError: (error: string) => void }> = ({
  setError,
}) => {
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState('');
  const [languages, setLanguages] = useState<Language[] | null>(null);
  const { data, error, loading } = useQuery<{ languages: Language[] }>(
    GET_LANGUAGES
  );
  const { removeLanguage, language } = dropDownOptions;

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
    <SearchBar
      linkTo={PATH.createLanguage}
      btnText={t(BtnText.createLanguage)}
      title={t(TitleText.languages)}
      placeholder={t(PlaceholderText.search)}
      onChangeSearch={(value) => {
        setSearchValue(value);
      }}
    >
      <Table
        items={languages}
        loading={loading}
        headerOptions={languagesTableOptions}
        dropDownOptions={[language, removeLanguage]}
        dropDownHandler={(label: string, id: string) => {
          dropDownHandler(label, id);
        }}
        searchValue={{
          value: searchValue,
          searchKey: [SearchKey.name],
        }}
      />
    </SearchBar>
  );
};
