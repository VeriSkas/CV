import React, { FC, ReactNode } from 'react';

import { Control, UseFormGetValues, UseFormSetValue } from 'react-hook-form';

import { FormTypes, IMySelect } from '../../../types/interfaces/interfaces';
import { MySelect } from '../MySelect/MySelect';

export const SelectsFromArray: FC<{
  selectsArray: IMySelect[],
  control: Control<FormTypes, any>,
  setValue: UseFormSetValue<FormTypes>,
  getValues?: UseFormGetValues<FormTypes>,
}> = ({ selectsArray, control, setValue, getValues }) => {
  const renderSelects = (): ReactNode => {
    return selectsArray.map((select) => {
      let defaultValue = select.defaultValue;

      if (getValues) {
        defaultValue = getValues(select.label as keyof FormTypes)
      }

      return (
        <MySelect
          key={select.label}
          control={control}
          setFormValue={setValue}
          label={select.label}
          multi={select.multi}
          defaultValue={defaultValue}
          disabled={select.disabled}
          labelName={select.labelName}
          getValues={getValues}
        />
      );
    });
  };
  return <>{renderSelects()}</>;
};
