import React, { FC, ReactNode, useEffect, useState } from 'react';

import { useReactiveVar } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { MdArrowDownward, MdArrowUpward } from 'react-icons/md';

import { MAIN_ROLE, USER_ID } from '../../apollo/state';
import { Roles } from '../../constants/constants';
import { ContentText, ErrorMessages } from '../../constants/text';
import {
  SortType,
  UsedInTableObjectsType
} from '../../types/interfaces/interfaces';
import { TableProps } from '../../types/interfaces/propsInterfaces';
import { search } from '../../utils/search';
import { TableItem } from '../TableItem/TableItem';
import { TableCvItem } from '../../types/interfaces/cvs';
import { MainPagesInfo } from '../../constants/mainPagesInfo';
import classes from './Table.module.scss';
import { hiddenObjectKeysInTable } from '../../constants/variables';

export const Table: FC<TableProps> = ({
  items,
  loading,
  headerOptions,
  searchValue,
  dropDownOptions,
  dropDownHandler,
  toggleTemplateCv,
  avatar,
  settingsBtnViewForUser,
}) => {
  const { t } = useTranslation();
  const [headerValue, setHeaderValue] = useState(headerOptions);
  const [itemsValue, setItemsValue] = useState(items);
  const userId = useReactiveVar(USER_ID);
  const role = useReactiveVar(MAIN_ROLE);

  useEffect(() => {
    if (items) {
      setItemsValue(items);
    }
  }, [items])

  const turnOnSort = (name: string): void => {
    const allOptions = headerValue;

    Object.keys(allOptions)
      .filter((key) => key !== name)
      .map((key) => {
        allOptions[key].active = false;
        return key;
      });
    allOptions[name].active = true;
    allOptions[name].ascendingSort = !allOptions[name].ascendingSort;
    setHeaderValue((prev) => ({ ...prev, ...allOptions }));
    sortTable(name as keyof SortType, allOptions[name].ascendingSort ?? true)
  };

  const sortTable = (sortValue: keyof SortType, ascendingSort: boolean): void => {
    const newUsersValue =
      itemsValue?.slice()
        .sort((a: UsedInTableObjectsType, b: UsedInTableObjectsType) => {
          const valueA =
            a[sortValue as keyof UsedInTableObjectsType]?.toString().toLowerCase() ?? '';
          const valueB =
            b[sortValue as keyof UsedInTableObjectsType]?.toString().toLowerCase() ?? '';

          if (valueB < valueA) { return ascendingSort ? 1 : -1; }

          if (valueB > valueA) { return ascendingSort ? -1 : 1; }

          return 0;
        });

    if (newUsersValue) { setItemsValue(() => [...newUsersValue]) }
  }

  const renderHeaderOptions = (): ReactNode => {
    return Object.keys(headerOptions).map((key) => {
      const option = headerOptions[key];
      const activeOptionIcon =
        <div className={classes.SortArrow}>
          {option.ascendingSort ? <MdArrowDownward /> : <MdArrowUpward />}
        </div>;
      const inactiveOptionIcon =
        <div className={classes.SortArrowHover}>
          <MdArrowDownward />
        </div>;
      const disabledOption = <h5>{t(option.name)}</h5>;
      const enabledOption =
        <>
          <h5
            onClick={() => {
              turnOnSort(key);
            }}
          >
            {t(option.name)}
          </h5>
            {option.active ? activeOptionIcon : inactiveOptionIcon}
        </>

      return (
        <div key={option.name} className={classes.HeaderOption}>
          <span className={classes.Option}>
            {option.disabled ? disabledOption : enabledOption}
          </span>
        </div>
      );
    });
  };

  const toggleTemplate = (id: string, error?: string): void => {
    if (toggleTemplateCv) {
      toggleTemplateCv(id, error)
    }
  }

  const renderTableRows = (): ReactNode => {
    let returnedValue = itemsValue;

    if (!returnedValue) {
      return <p>{t(ContentText.noValues)}</p>;
    }

    if (searchValue?.value) {
      returnedValue = search(returnedValue, searchValue);

      if (!returnedValue.length) {
        return <p>{t(ContentText.noValues)}</p>;
      }
    }

    return returnedValue.map((item: UsedInTableObjectsType) => {
      if (Object.prototype.hasOwnProperty.call(item, hiddenObjectKeysInTable.userId) && role !== Roles.admin.value) {
        if ((item as TableCvItem).userId !== userId) {
          return <TableItem
            key={item.id}
            item={item}
            dropDownOptions={MainPagesInfo.cvsPageNotPersonal.dropDownOptions}
            dropDownHandler={(label: string, id: string) => { dropDownHandler(label, id) }}
            toggleTemplateCv={(id: string) => { toggleTemplate(id, ErrorMessages.toggleTemplateError) }}
            settingsView={settingsBtnViewForUser}
            avatar={avatar}
          />;
        }
      }

      return <TableItem
        key={item.id}
        item={item}
        dropDownOptions={dropDownOptions}
        dropDownHandler={(label: string, id: string) => { dropDownHandler(label, id) }}
        toggleTemplateCv={toggleTemplate}
        settingsView={settingsBtnViewForUser}
        avatar={avatar}
      />;
    });
  };

  return (
    <div className={classes.Table}>
      <div className={classes.TableHeader}>
        {avatar && <div></div>}
        {renderHeaderOptions()}
        {(role === Roles.admin.value || settingsBtnViewForUser) && <div></div>}
      </div>
      {loading ? (
        <p>{t(ContentText.loading)}</p>
      ) : (
        <div className={classes.TableBody}>{renderTableRows()}</div>
      )}
    </div>
  );
};
