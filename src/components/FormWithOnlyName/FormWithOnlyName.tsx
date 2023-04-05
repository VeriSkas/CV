import React, { FC } from 'react';

import { FieldErrorsImpl, useForm, UseFormRegister } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { BtnType } from 'constants/variables';
import { FormTypes } from 'interfaces/interfaces';
import { makeInputsList } from 'utils/formCreator';
import { Button } from 'uiComponents/Button/Button';
import { InputsFromArray } from 'uiComponents/InputsFromArray/InputsFromArray';
import { FormWithOnlyNameProps } from 'interfaces/propsInterfaces';
import 'i18n/i18n';

export const FormWithOnlyName: FC<FormWithOnlyNameProps> = ({
  onSubmitForm,
  item,
  type,
  returnPath
}) => {
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
          <Button disabled={!isValid}>{t('BtnText.saveChanges')}</Button>
          <Link to={returnPath}>
            <Button type={BtnType.transparent}>{t('BtnText.return')}</Button>
          </Link>
        </div>
      </form>
    );
}
