import React, { FC, useEffect, useState } from 'react';

import { Controller } from 'react-hook-form';
import Select from 'react-select';

import { useOptions } from '../../../hooks/useOptions';
import {
  MySelectProps,
  OptionsType,
} from '../../../types/interfaces/propsInterfaces';
import classes from './MySelect.module.scss';

export const MySelect: FC<MySelectProps> = ({
  control,
  setFormValue,
  label,
  defaultValue,
  disabled,
  labelName,
  multi,
}) => {
  const [value, setValue] = useState<OptionsType>();
  const options: OptionsType[] | null = useOptions(label);

  useEffect(() => {
    if (defaultValue) {
      setValue(options.find((c) => c.value === defaultValue));
    }
  }, [options]);

  const onChangeHandler = (value: any): void => {
    if (multi) {
      setFormValue(
        label,
        value.map((item: OptionsType) => item.value)
      );
    } else {
      setValue(value);
      setFormValue(label, value.value);
    }
  };

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
              isDisabled={disabled}
              isMulti={multi}
              value={value}
              onChange={onChangeHandler}
            />
          );
        }}
      />
    </div>
  );
};
