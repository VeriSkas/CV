import React, { FC, ReactNode } from 'react';

import { Control, UseFormRegister } from 'react-hook-form';

import { FormTypes, IFieldArray } from '../../../types/interfaces/interfaces';
import { FieldArray } from '../../FieldArray/FieldArray';

export const FieldsArrayFromArray: FC<{
  fieldsArray: IFieldArray[],
  register: UseFormRegister<FormTypes>,
  control: Control<FormTypes, any>,
  disabled?: boolean,
}> = ({ fieldsArray, register, control, disabled }) => {
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
        />
      );
    });
  };

  return <>{renderFieldArrays()}</>;
};
