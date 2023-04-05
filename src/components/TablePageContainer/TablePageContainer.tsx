import React, { FC, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { TablePageContainerProps } from 'interfaces/propsInterfaces';
import { SearchBar } from '../SearchBar/SearchBar';
import { Table } from '../Table/Table';

export const TablePageContainer: FC<TablePageContainerProps> = ({
  mainPagesInfo,
  tableItems,
  loading,
  dropDownHandler,
  toggleTemplateCv,
}) => {
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState<string>('');
  const {
    tableType,
    linkTo,
    btnText,
    title,
    placeholder,
    headerOptions,
    dropDownOptions,
    searchKey,
    createBtnViewForUser,
    settingsBtnViewForUser,
    avatar,
  } = mainPagesInfo;

  const toggleTemplate = (id: string, error?: string): void => {
    if (toggleTemplateCv) {
      toggleTemplateCv(id, error);
    }
  };

  return (
    <SearchBar
      linkTo={linkTo}
      btnText={t(btnText)}
      title={t(title)}
      placeholder={t(placeholder)}
      onChangeSearch={(value) => {
        setSearchValue(value);
      }}
      createBtnViewForUser={createBtnViewForUser}
    >
      <Table
        tableType={tableType}
        items={tableItems}
        loading={loading}
        headerOptions={headerOptions}
        dropDownOptions={dropDownOptions}
        dropDownHandler={(label: string, id: string) => {
          dropDownHandler(label, id);
        }}
        searchValue={{
          value: searchValue,
          searchKey,
        }}
        settingsBtnViewForUser={settingsBtnViewForUser}
        avatar={avatar}
        toggleTemplateCv={toggleTemplate}
      />
    </SearchBar>
  );
};
