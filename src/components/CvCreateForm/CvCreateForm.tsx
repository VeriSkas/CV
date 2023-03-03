import React, { FC } from 'react';

import { Control, useForm, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { FieldArrays } from '../../constants/fieldArrayVars';
import { PATH } from '../../constants/paths';
import { BtnText } from '../../constants/text';
import { BtnType, TypeForm } from '../../constants/variables';
import { FormTypes, NewCvForm } from '../../types/interfaces/interfaces';
import { makeInputsList, makeSelectsList } from '../../utils/formCreator';
import { Button } from '../UI/Button/Button';
import { FieldsArrayFromArray } from '../UI/FieldsArrayFromArray/FieldsArrayFromArray';
import { InputsFromArray } from '../UI/InputsFromArray/InputsFromArray';
import { SelectsFromArray } from '../UI/SelectsFromArray/SelectsFromArray';

export const CvCreateForm: FC<{
  onSubmitForm: (data: NewCvForm) => void,
}> = ({ onSubmitForm }) => {
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
        <Button disabled={!isValid}>{t(BtnText.saveChanges)}</Button>
        <Link to={PATH.cvs}>
          <Button type={BtnType.transparent}>{t(BtnText.return)}</Button>
        </Link>
      </div>
    </form>
  );
};
