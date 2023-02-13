import React, { FC, useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';

import { GET_POSITIONS } from '../../apollo/queries/positions';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Table } from '../../components/Table/Table';
import {
  dropDownOptions,
  positionsTableOptions,
} from '../../constants/constants';
import { PATH } from '../../constants/paths';
import { BtnText, PlaceholderText, TitleText } from '../../constants/text';
import { SearchKey } from '../../constants/variables';
import { Position } from '../../types/interfaces/positions';

export const Positions: FC<{ setError: (error: string) => void }> = ({
  setError,
}) => {
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState('');
  const [positions, setPositions] = useState<Position[] | null>(null);
  const { data, error, loading } = useQuery<{ positions: Position[] }>(
    GET_POSITIONS
  );
  const { removePosition, position } = dropDownOptions;

  useEffect(() => {
    if (data) {
      setPositions(data.positions);
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
      linkTo={PATH.createPosition}
      btnText={t(BtnText.createPosition)}
      title={t(TitleText.positions)}
      placeholder={t(PlaceholderText.search)}
      onChangeSearch={(value) => {
        setSearchValue(value);
      }}
    >
      <Table
        items={positions}
        loading={loading}
        headerOptions={positionsTableOptions}
        dropDownOptions={[position, removePosition]}
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
