import React, { FC, ReactNode, useEffect, useState } from 'react';

import { MdArrowDownward, MdArrowUpward } from 'react-icons/md';

import { DropDownOption, SortType, TableOption } from '../../shared/interfaces';
import { TableItem } from '../TableItem/TableItem';
import classes from './Table.module.scss';

export const Table: FC<{
  items: any,
  loading: boolean,
  headerOptions: { [key: string]: TableOption },
  dropDownOptions: DropDownOption[],
  dropDownHandler: (label: string, id: string) => void;
  searchValue?: string;
}> = ({ items, loading, headerOptions, searchValue, dropDownOptions, dropDownHandler }) => {
  const [headerValue, setHeaderValue] = useState(headerOptions);
  const [itemsValue, setItemsValue] = useState(items);

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
    const newUsersValue = itemsValue?.slice().sort((a: any, b: any) => {
      const valueA = a[sortValue]?.toString().toLowerCase() ?? '';
      const valueB = b[sortValue]?.toString().toLowerCase() ?? '';

      if (valueB < valueA) { return ascendingSort ? 1 : -1; }

      if (valueB > valueA) { return ascendingSort ? -1 : 1; }

      return 0;
    });

    if (newUsersValue) { setItemsValue(() => [...newUsersValue]) }
  }

  const renderHeaderOptions = (): ReactNode => {
    return Object.keys(headerOptions).map((key) => {
      const option = headerOptions[key];

      return (
        <div key={option.name} className={classes.HeaderOption}>
          <span className={classes.Option}>
            <h5
              onClick={() => {
                turnOnSort(key);
              }}
            >
              {option.name}
            </h5>
            {option.active && (
              <div className={classes.SortArrow}>
                {option.ascendingSort ? <MdArrowDownward /> : <MdArrowUpward />}
              </div>
            )}
            {!option.active && (
              <div className={classes.SortArrowHover}>
                <MdArrowDownward />
              </div>
            )}
          </span>
        </div>
      );
    });
  };

  const renderTableRows = (): ReactNode => {
    if (!itemsValue) {
      return <p>No values</p>;
    }

    if (searchValue) {
      return itemsValue
        .filter((user: { first_name: any; last_name: any; }) =>
          `${user.first_name} ${user.last_name}`
            .toLowerCase()
            .includes(searchValue.toLowerCase())
        )
        .map((user: any) => {
          return <TableItem
          key={user.id} item={user}
          dropDownOptions={dropDownOptions}
          dropDownHandler={(label: string, id: string) => { dropDownHandler(label, id) }}
        />;
        });
    }

    return itemsValue.map((item: any) => {
      return <TableItem
        key={item.id} item={item}
        dropDownOptions={dropDownOptions}
        dropDownHandler={(label: string, id: string) => { dropDownHandler(label, id) }}
      />;
    });
  };

  return (
    <div className={classes.Table}>
      <div className={classes.TableHeader}>
        <div></div>
        {renderHeaderOptions()}
        <div></div>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={classes.TableBody}>{renderTableRows()}</div>
      )}
    </div>
  );
};
