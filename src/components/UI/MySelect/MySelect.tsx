import React, { FC } from 'react';

import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';

import { useOptions } from 'hooks/useOptions';
import { MySelectProps, OptionsType } from 'interfaces/propsInterfaces';
import classes from './MySelect.module.scss';
import { selectStyles } from './styles';
import 'i18n/i18n';

export const MySelect: FC<MySelectProps> = ({
  control,
  setFormValue,
  label,
  disabled,
  labelName,
  multi,
  controlName,
  required,
}) => {
  const options: OptionsType[] = useOptions(label);
  const { t } = useTranslation();

  const onChangeHandler = (value: any): void => {
    if (multi) {
      setFormValue(
        label,
        value.map((item: OptionsType) => item.value)
      );
    } else {
      setFormValue(
        controlName ?? label,
        controlName ? value.label : value.value
      );
    }
  };

  return (
    <div className={classes.MySelect}>
      <label>{t(labelName)}</label>
      <Controller
        name={controlName ?? label}
        control={control}
        rules={{ required }}
        render={({ field }) => {
          const selectValue = multi
            ? field.value
              ? field.value.map((id: string) =>
                  options.find((option) => option.value === id)
                )
              : []
            : options.find((c) => c.value === field.value) ?? {
                value: field.value,
                label: field.value,
              };

          return (
            <Select
              className={classes.Select}
              placeholder={''}
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
