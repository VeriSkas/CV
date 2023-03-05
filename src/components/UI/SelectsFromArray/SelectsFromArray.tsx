import React, { FC, ReactNode } from 'react';

import { Control, UseFormSetValue } from 'react-hook-form';

import { FormTypes, IMySelect } from '../../../types/interfaces/interfaces';
import { MySelect } from '../MySelect/MySelect';

export const SelectsFromArray: FC<{
  selectsArray: IMySelect[],
  control: Control<FormTypes, any>,
  setValue: UseFormSetValue<FormTypes>,
}> = ({ selectsArray, control, setValue }) => {
  const renderSelects = (): ReactNode => {
    return selectsArray.map((select) => {
      return (
        <MySelect
          key={select.label}
          control={control}
          setFormValue={setValue}
          label={select.label}
          multi={select.multi}
          disabled={select.disabled}
          labelName={select.labelName}
          required={select.required ?? false}
        />
      );
    });
  };
  return <>{renderSelects()}</>;
};
