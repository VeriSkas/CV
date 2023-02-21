import React, { FC, ReactNode } from 'react';

import { FieldError, FieldErrorsImpl, UseFormRegister } from 'react-hook-form';

import { FormTypes, IInput } from '../../../types/interfaces/interfaces';
import { Input } from '../Input/Input';

export const InputsFromArray: FC<{
  register: UseFormRegister<FormTypes>;
  inputsArray: IInput[];
  errors: Partial<FieldErrorsImpl<FormTypes>>
}> = ({ inputsArray, errors, register }) => {
  const renderInputs = (): ReactNode => {
    return inputsArray.map((input) => {
      return (
        <Input
          key={input.label}
          type={input.type}
          labelName={input.labelName ?? ''}
          label={input.label}
          defaultValue={input.defaultValue ?? ''}
          placeholder={input.labelName}
          validation={input.validation}
          readonly={input.readonly ?? false}
          register={register}
          error={(errors[input.label as keyof FormTypes] as FieldError)?.message}
        />
      );
    });
  }

  return <>{renderInputs()}</>
};
