import React, { FC } from 'react';

import { FieldErrorsImpl, useForm, UseFormRegister } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { BtnText } from '../../constants/text';
import { BtnType } from '../../constants/variables';
import { Department } from '../../types/interfaces/departments';
import { FormTypes } from '../../types/interfaces/interfaces';
import { Position } from '../../types/interfaces/positions';
import { Skill } from '../../types/interfaces/skills';
import { makeInputsList } from '../../utils/formCreator';
import { Button } from '../UI/Button/Button';
import { InputsFromArray } from '../UI/InputsFromArray/InputsFromArray';

export const FormWithOnlyName: FC<{
    onSubmitForm: (
        data: { name: string },
        id?: string
      ) => void;
    item?: Department | Position | Skill;
    returnPath: string;
    type: string;
  }> = ({ onSubmitForm, item, type, returnPath }) => {
    const { t } = useTranslation();
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors, isValid },
    } = useForm<{ name: string }>({
      mode: 'all',
      defaultValues: {
        name: item?.name ?? '',
      }
    });

    const submitForm = (data: { name: string }): void => {
      onSubmitForm(data, item?.id);
      reset();
    };

    return (
      <form onSubmit={handleSubmit(submitForm)}>
        <InputsFromArray
          register={register as UseFormRegister<FormTypes>}
          inputsArray={makeInputsList(type)}
          errors={errors as Partial<FieldErrorsImpl<FormTypes>>}
        />
        <div>
          <Button disabled={!isValid}>{t(BtnText.saveChanges)}</Button>
          <Link to={returnPath}>
            <Button type={BtnType.transparent}>{t(BtnText.return)}</Button>
          </Link>
        </div>
      </form>
    );
}
