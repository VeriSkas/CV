import React, { FC } from 'react';

import { Control, useForm, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { FieldArrays } from 'constants/fieldArrayVars';
import { PATH } from 'constants/paths';
import { BtnType, TypeForm } from 'constants/variables';
import { FormTypes, NewEmployeeForm } from 'interfaces/interfaces';
import {
  makeInputsList,
  makeSelectsList,
} from 'utils/formCreator';
import { Button } from 'uiComponents/Button/Button';
import { FieldsArrayFromArray } from 'uiComponents/FieldsArrayFromArray/FieldsArrayFromArray';
import { InputsFromArray } from 'uiComponents/InputsFromArray/InputsFromArray';
import { SelectsFromArray } from 'uiComponents/SelectsFromArray/SelectsFromArray';
import { CreateEmployeeFormProps } from 'interfaces/propsInterfaces';
import 'i18n/i18n';

export const CreateEmployeeForm: FC<CreateEmployeeFormProps> = ({ onSubmitForm }) => {
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
        inputsArray={makeInputsList(TypeForm.createEmployee)}
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
        <Button disabled={!isValid}>{t('BtnText.saveChanges')}</Button>
        <Link to={PATH.employees}>
          <Button type={BtnType.transparent}>{t('BtnText.return')}</Button>
        </Link>
      </div>
    </form>
  );
};
