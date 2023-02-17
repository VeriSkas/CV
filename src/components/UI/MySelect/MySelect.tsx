import React, { FC } from 'react';

import { Controller } from 'react-hook-form';
import Select from 'react-select';

import { MySelectProps } from '../../../types/interfaces/propsInterfaces';
import classes from './MySelect.module.scss';

export const MySelect: FC<MySelectProps> = ({
  control,
  label,
  defaultValue,
  disabled,
  labelName,
  multi,
}) => {
  // const options: OptionsType[] | null = useOptions(label);
  const options = [
    { value: '1', label: 'Chocolate' },
    { value: '2', label: 'Strawberry' },
    { value: '3', label: 'Vanilla' },
  ];
  return (
    <div className={classes.MySelect}>
      <label>{labelName}</label>
      <Controller
        name={label}
        control={control}
        render={({ field }) => {
          return (
            <Select
              className={classes.Select}
              placeholder={label}
              options={options}
              defaultValue={defaultValue}
              isDisabled={disabled}
              isMulti={multi}
              {...field}
            />
          );
        }}
      />
    </div>
  );
};
