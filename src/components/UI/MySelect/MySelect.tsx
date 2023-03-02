import React, { FC, useEffect, useState } from 'react';

import { Controller } from 'react-hook-form';
import Select from 'react-select';

import { useOptions } from '../../../hooks/useOptions';
import {
  MySelectProps,
  OptionsType,
} from '../../../types/interfaces/propsInterfaces';
import classes from './MySelect.module.scss';
import { selectStyles } from './styles';

export const MySelect: FC<MySelectProps> = ({
  control,
  setFormValue,
  label,
  defaultValue,
  disabled,
  labelName,
  multi,
  getValues,
  controlName,
  required,
}) => {
  const [value, setValue] = useState<OptionsType | OptionsType[]>();
  const options: OptionsType[] | null = useOptions(label);

  useEffect(() => {
    if (getValues) {
      if (Array.isArray(getValues(label))) {
        const optionsValue = getValues(label)
          .map((id: string) => options.find(option => option.value === id) as OptionsType);

        setValue(optionsValue);
      }
    }
  }, [getValues, options]);

  useEffect(() => {
    if (options && defaultValue && typeof defaultValue === 'string') {
      const option = options.find((c) => c.value === defaultValue) ?? options[0];

      setValue(option);
    }
  }, [defaultValue, options]);

  const onChangeHandler = (value: any): void => {
    if (multi) {
      setValue(value);
      setFormValue(label,
        value.map((item: OptionsType) => item.value)
      );
    } else {
      setValue(value);
      setFormValue(controlName ?? label, controlName ? value.label : value.value);
    }
  };

  return (
    <div className={classes.MySelect}>
      <label>{labelName}</label>
      <Controller
        name={controlName ?? label}
        control={control}
        rules={{ required }}
        render={({ field }) => {
          const selectValue = multi
            ? value
            : options
              .find((c) => c.value === field.value) ?? { value: field.value, label: field.value };

          return (
            <Select
              className={classes.Select}
              placeholder={labelName}
              options={options}
              isDisabled={disabled}
              isMulti={multi}
              value={selectValue}
              onChange={onChangeHandler}
              styles={selectStyles}
              menuPlacement="auto"
            />
          );
        }}
      />
    </div>
  );
};
