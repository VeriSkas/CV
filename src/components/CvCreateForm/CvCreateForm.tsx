import React, { FC, ReactNode } from 'react';

import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import {
  BtnType,
  FieldArrays,
  TypeForm,
} from '../../constants/constants';
import { PATH } from '../../constants/paths';
import { BtnText } from '../../constants/text';
import { NewCvForm } from '../../interfaces/interfaces';
import { makeCvInputsList } from '../../utils/formCreator';
import { FieldArray } from '../FieldArray/FieldArray';
import { Button } from '../UI/Button/Button';
import { Input } from '../UI/Input/Input';

export const CvCreateForm: FC<{
  onSubmitForm: (
    data: NewCvForm,
  ) => void,
}> = ({ onSubmitForm }) => {
  const { t } = useTranslation();
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<NewCvForm>({
    mode: 'all',
  });

  const submitForm = (data: NewCvForm): void => {
    onSubmitForm(data);
    reset();
  };

  const renderInputs = (): ReactNode => {
    const inputs = makeCvInputsList(TypeForm.createCV);

    return inputs?.map((input) => {
      return (
        <Input
          key={input.label}
          type={input.type}
          labelName={input.labelName}
          label={input.label}
          defaultValue={input.defaultValue}
          placeholder={input.label}
          validation={input.validation}
          readonly={input.readonly}
          register={register}
          error={errors[input.label as keyof NewCvForm]?.message}
        />
      );
    });
  };

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
      {renderFieldArrays()}
      <div>
        <Button disabled={!isValid}>{t(BtnText.saveChanges)}</Button>
        <Link to={PATH.cvs}>
          <Button type={BtnType.transparent}>{t(BtnText.return)}</Button>
        </Link>
      </div>
    </form>
  );
};
