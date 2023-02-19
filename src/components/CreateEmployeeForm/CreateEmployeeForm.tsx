import React, { FC, ReactNode } from 'react';

import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { FieldArrays } from '../../constants/fieldArrayVars';
import { PATH } from '../../constants/paths';
import { BtnText } from '../../constants/text';
import { BtnType, TypeForm } from '../../constants/variables';
import { NewEmployeeForm } from '../../types/interfaces/interfaces';
import { makeEmployeeInputsList, makeSelectsList } from '../../utils/formCreator';
import { FieldArray } from '../FieldArray/FieldArray';
import { Button } from '../UI/Button/Button';
import { Input } from '../UI/Input/Input';
import { MySelect } from '../UI/MySelect/MySelect';

export const CreateEmployeeForm: FC<{
  onSubmitForm: (data: NewEmployeeForm) => void
}> = ({ onSubmitForm }) => {
  const { t } = useTranslation();
  const {
    register,
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isValid },
  } = useForm<NewEmployeeForm>({
    mode: 'all',
  });

  const submitForm = (data: NewEmployeeForm): void => {
    onSubmitForm(data);
    reset();
  };

  const renderInputs = (): ReactNode => {
    const inputs = makeEmployeeInputsList(TypeForm.createEmployee);

    return inputs?.map((input) => {
      return (
        <Input
          key={input.label}
          type={input.type}
          labelName={input.labelName}
          label={input.label}
          defaultValue={input.defaultValue}
          placeholder={input.labelName}
          validation={input.validation}
          readonly={input.readonly}
          register={register}
          error={errors[input.label as keyof NewEmployeeForm]?.message}
        />
      );
    });
  };

  const renderSelects = (): ReactNode => {
    const selects = makeSelectsList(TypeForm.createEmployee);

    return selects?.map((select) => {
      return (
        <MySelect
          key={select.label}
          control={control}
          setFormValue={setValue}
          label={select.label}
          multi={select.multi}
          defaultValue={select.defaultValue}
          disabled={select.disabled}
          labelName={select.labelName}
        />
      )
    })
  }

  const renderFieldArrays = (): ReactNode => {
    const { skills, languages } = FieldArrays;

    return [skills, languages].map((item) => {
      return (
        <FieldArray
          key={item.label}
          register={register}
          control={control}
          label={item.label}
          labelName={item.labelName}
          radioInputs={item.radioInputs}
        />
      );
    });
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      {renderInputs()}
      {renderSelects()}
      {renderFieldArrays()}
      <div>
        <Button disabled={!isValid}>{t(BtnText.saveChanges)}</Button>
        <Link to={PATH.employees}>
          <Button type={BtnType.transparent}>{t(BtnText.return)}</Button>
        </Link>
      </div>
    </form>
  );
}
