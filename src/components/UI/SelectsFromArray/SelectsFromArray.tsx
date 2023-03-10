import React, { FC } from 'react';

import { SelectsFromArrayProps } from '../../../types/interfaces/propsInterfaces';
import { MySelect } from '../MySelect/MySelect';

export const SelectsFromArray: FC<SelectsFromArrayProps> = ({
  selectsArray,
  control,
  setValue,
}) => (
  <>
    {selectsArray.map((select) => (
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
    ))}
  </>
);
