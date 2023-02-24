import React, { FC } from 'react';

import { FieldErrorsImpl, useForm, UseFormRegister } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { PATH } from '../../constants/paths';
import { BtnText } from '../../constants/text';
import { BtnType } from '../../constants/variables';
import { FormTypes, ILanguageForm } from '../../types/interfaces/interfaces';
import { Language } from '../../types/interfaces/languages';
import { makeInputsList } from '../../utils/formCreator';
import { Button } from '../UI/Button/Button';
import { InputsFromArray } from '../UI/InputsFromArray/InputsFromArray';

export const LanguageForm: FC<{
  onSubmitForm: (
      data: ILanguageForm,
      id?: string
    ) => void;
  item?: Language;
  type: string;
}> = ({ onSubmitForm, item, type }) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ILanguageForm>({
    mode: 'all',
    defaultValues: {
      name: item?.name ?? '',
      iso2: item?.iso2 ?? '',
      native_name: item?.native_name ?? '',
    }
  });

  const submitForm = (data: ILanguageForm): void => {
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
        <Link to={PATH.languages}>
          <Button type={BtnType.transparent}>{t(BtnText.return)}</Button>
        </Link>
      </div>
    </form>
  );
}
