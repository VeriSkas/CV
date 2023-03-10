import React, { FC } from 'react';

import { FieldError } from 'react-hook-form';

import { FormTypes } from 'interfaces/interfaces';
import { InputsFromArrayProps } from 'interfaces/propsInterfaces';
import { Input } from '../Input/Input';

export const InputsFromArray: FC<InputsFromArrayProps> = ({
  inputsArray,
  errors,
  register,
}) => (
  <>
    {inputsArray.map((input) => (
      <Input
        key={input.label}
        type={input.type}
        labelName={input.labelName ?? ''}
        label={input.label}
        defaultValue={input.defaultValue ?? ''}
        placeholder={''}
        validation={input.validation}
        readonly={input.readonly ?? false}
        register={register}
        error={(errors[input.label as keyof FormTypes] as FieldError)?.message}
      />
    ))}
  </>
);
