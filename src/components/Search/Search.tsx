import React, { ChangeEvent, FC } from 'react';

import { useTranslation } from 'react-i18next';
import { IconContext } from 'react-icons';
import { ImSearch } from 'react-icons/im';

import { InputType } from '../../constants/constants';
import { InputSearchProps } from '../../interfaces/propsInterfaces';
import classes from './Search.module.scss';

export const Search: FC<InputSearchProps> = (props) => {
  const { t } = useTranslation();

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
        type={InputType.text}
        placeholder={t(props.placeholder ?? '')}
        value={props.value}
        onChange={onChangeHandler}
      />
    </div>
  );
};
