import React, { FC } from 'react';

import { Control, useForm, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { FieldArrays } from '../../constants/fieldArrayVars';
import { PATH } from '../../constants/paths';
import { BtnText } from '../../constants/text';
import { BtnType, TypeForm } from '../../constants/variables';
import { FormTypes, NewEmployeeForm } from '../../types/interfaces/interfaces';
import {
  makeEmployeeInputsList,
  makeSelectsList,
} from '../../utils/formCreator';
import { Button } from '../UI/Button/Button';
import { FieldsArrayFromArray } from '../UI/FieldsArrayFromArray/FieldsArrayFromArray';
import { InputsFromArray } from '../UI/InputsFromArray/InputsFromArray';
import { SelectsFromArray } from '../UI/SelectsFromArray/SelectsFromArray';

export const CreateEmployeeForm: FC<{
  onSubmitForm: (data: NewEmployeeForm) => void,
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
  const { skills, languages } = FieldArrays;

  const submitForm = (data: NewEmployeeForm): void => {
    onSubmitForm(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <InputsFromArray
        register={register as UseFormRegister<FormTypes>}
        inputsArray={makeEmployeeInputsList(TypeForm.createEmployee)}
        errors={errors}
      />
      <SelectsFromArray
        selectsArray={makeSelectsList(TypeForm.createEmployee)}
        control={control as Control<FormTypes, any>}
        setValue={setValue as UseFormSetValue<FormTypes>}
      />
      <FieldsArrayFromArray
        fieldsArray={[skills, languages]}
        register={register as UseFormRegister<FormTypes>}
        control={control as Control<FormTypes, any>}
        setValue={setValue as UseFormSetValue<FormTypes>}
      />
      <div>
        <Button disabled={!isValid}>{t(BtnText.saveChanges)}</Button>
        <Link to={PATH.employees}>
          <Button type={BtnType.transparent}>{t(BtnText.return)}</Button>
        </Link>
      </div>
    </form>
  );
};
