import React, { FC } from 'react';

import { FieldsArrayFromArrayProps } from '../../../types/interfaces/propsInterfaces';
import { FieldArray } from '../../FieldArray/FieldArray';

export const FieldsArrayFromArray: FC<FieldsArrayFromArrayProps> = ({
  fieldsArray,
  register,
  control,
  disabled,
  setValue,
}) => (
  <>
    {fieldsArray.map((item) => (
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
    ))}
  </>
);
