import React, { ChangeEvent, FC } from 'react';

import { IconContext } from 'react-icons';
import { ImSearch } from 'react-icons/im';

import { InputSearchProps } from '../../interfaces/propsInterfaces';
import classes from './Search.module.scss';

export const Search: FC<InputSearchProps> = (props) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    props.onChange(event.target.value);
  };
  return (
    <div className={classes.Search}>
      <div className={classes.IconSearch}>
        <IconContext.Provider value={{ className: classes.Icon }}>
          <ImSearch />
        </IconContext.Provider>
      </div>
      <input
        type="text"
        placeholder={props.placeholder ?? ''}
        value={props.value}
        onChange={onChangeHandler}
      />
    </div>
  );
};
