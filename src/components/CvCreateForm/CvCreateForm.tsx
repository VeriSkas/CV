import React, { FC } from 'react';

import { Control, useForm, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { FieldArrays } from 'constants/fieldArrayVars';
import { PATH } from 'constants/paths';
import { BtnType, TypeForm } from 'constants/variables';
import { FormTypes, NewCvForm } from 'interfaces/interfaces';
import { makeInputsList, makeSelectsList } from 'utils/formCreator';
import { Button } from 'uiComponents/Button/Button';
import { FieldsArrayFromArray } from 'uiComponents/FieldsArrayFromArray/FieldsArrayFromArray';
import { InputsFromArray } from 'uiComponents/InputsFromArray/InputsFromArray';
import { SelectsFromArray } from 'uiComponents/SelectsFromArray/SelectsFromArray';
import { CvCreateFormProps } from 'interfaces/propsInterfaces';
import 'i18n/i18n';

export const CvCreateForm: FC<CvCreateFormProps> = ({ onSubmitForm }) => {
  const { t } = useTranslation();
  const {
    register,
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isValid },
  } = useForm<NewCvForm>({
    mode: 'all',
  });
  const { skills, languages } = FieldArrays;

  const submitForm = (data: NewCvForm): void => {
    onSubmitForm(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <InputsFromArray
        register={register as UseFormRegister<FormTypes>}
        inputsArray={makeInputsList(TypeForm.createCV)}
        errors={errors}
      />
      <SelectsFromArray
        selectsArray={makeSelectsList(TypeForm.createCV)}
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
        <Link to={PATH.cvs}>
          <Button type={BtnType.transparent}>{t('BtnText.return')}</Button>
        </Link>
      </div>
    </form>
  );
};
