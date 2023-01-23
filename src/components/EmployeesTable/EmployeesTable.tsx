import React, { FC, useEffect, useState } from 'react';

import { OperationVariables, useQuery } from '@apollo/client';
import { MdArrowDownward, MdArrowUpward } from 'react-icons/md';

import { GET_USERS } from '../../apollo/queries/users';
import { employeeTableOptions } from '../../shared/constants';
import { TableRow } from '../TableRow/TableRow';
import { SortType, UserInfo } from '../../shared/interfaces';
import classes from './EmployeesTable.module.scss';

export const EmployeesTable: FC<{ searchValue: string }> = (props) => {
  const [headerValue, setHeaderValue] = useState(employeeTableOptions);
  const [users, setUsers] = useState<UserInfo[] | null>(null);
  const { loading, data } = useQuery<{ users: UserInfo[] }, OperationVariables>(
    GET_USERS
  );

  useEffect(() => {
    if (data?.users) {
      setUsers(data?.users);
    }
  }, [data]);

  const renderTableRows = (): any => {
    if (!users) {
      return <p>No employees</p>;
    }

    if (props.searchValue) {
      return users
        .filter((user) =>
          `${user.profile.firstName} ${user.profile.lastName}`
            .toLowerCase()
            .includes(props.searchValue.toLowerCase())
        )
        .map((user) => {
          return <TableRow key={user.id} user={user}/>;
        });
    }

    return users.map((user) => {
      return <TableRow key={user.id} user={user}/>;
    });
  };

  const renderHeaderOptions = (): any => {
    return Object.keys(headerValue).map((key) => {
      const option = headerValue[key];

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
    const newUsersValue = users?.slice().sort((a: UserInfo, b: UserInfo) => {
      const valueA = sortValue === 'firstName' || sortValue === 'lastName'
        ? a.profile[sortValue]?.toLowerCase() ?? ''
        : a[sortValue]?.toLowerCase() ?? '';
      const valueB = sortValue === 'firstName' || sortValue === 'lastName'
        ? b.profile[sortValue]?.toLowerCase() ?? ''
        : b[sortValue]?.toLowerCase() ?? '';

      if (valueB < valueA) { return ascendingSort ? 1 : -1; }

      if (valueB > valueA) { return ascendingSort ? -1 : 1; }

      return 0;
    });

    if (newUsersValue) { setUsers(() => [...newUsersValue]) }
  }

  return (
    <div className={classes.EmployeesTable}>
      <div className={classes.TableHeader}>
        <div></div>
        {renderHeaderOptions()}
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={classes.TableBody}>{renderTableRows()}</div>
      )}
    </div>
  );
};
