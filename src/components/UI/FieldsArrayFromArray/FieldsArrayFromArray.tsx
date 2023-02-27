import React, { FC, ReactNode } from 'react';

import { Control, UseFormRegister, UseFormSetValue } from 'react-hook-form';

import { FormTypes, IFieldArray } from '../../../types/interfaces/interfaces';
import { FieldArray } from '../../FieldArray/FieldArray';

export const FieldsArrayFromArray: FC<{
  fieldsArray: IFieldArray[],
  register: UseFormRegister<FormTypes>,
  control: Control<FormTypes, any>,
  disabled?: boolean,
  setValue: UseFormSetValue<any>,
}> = ({ fieldsArray, register, control, disabled, setValue }) => {
  const renderFieldArrays = (): ReactNode => {
    return fieldsArray.map((item) => {
      return (
        <FieldArray
          key={item.label}
          register={register}
          control={control}
          label={item.label}
          labelName={item.labelName}
          radioInputs={item.radioInputs}
          disabled={disabled}
          setValue={setValue}
        />
      );
    });
  };

  return <>{renderFieldArrays()}</>;
};
