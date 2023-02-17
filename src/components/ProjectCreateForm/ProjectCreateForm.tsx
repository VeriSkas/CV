import React, { FC, ReactNode } from 'react';

import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { PATH } from '../../constants/paths';
import { BtnText } from '../../constants/text';
import { BtnType, TypeForm } from '../../constants/variables';
import { NewProjectForm } from '../../types/interfaces/interfaces';
import { makeProjectInputsList, makeProjectSelectsList } from '../../utils/formCreator';
import { Button } from '../UI/Button/Button';
import { Input } from '../UI/Input/Input';
import { MySelect } from '../UI/MySelect/MySelect';

export const ProjectCreateForm: FC<{
  onSubmitForm: (
    data: NewProjectForm,
  ) => void,
 }> = ({ onSubmitForm }) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm<NewProjectForm>({
    mode: 'all',
  });

  const renderInputs = (): ReactNode => {
    const inputs = makeProjectInputsList(TypeForm.createProject);

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
          error={errors[input.label as keyof NewProjectForm]?.message}
        />
      );
    });
  };

  const renderSelects = (): ReactNode => {
    const selects = makeProjectSelectsList(TypeForm.createProject);

    return selects?.map((select) => {
      return (
        <MySelect
          key={select.label}
          control={control}
          label={select.label}
          multi={select.multi}
          defaultValue={select.defaultValue}
          disabled={select.disabled}
          labelName={select.labelName}
          />
      )
    })
  }

  const submitForm = (data: NewProjectForm): void => {
    onSubmitForm(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      {renderInputs()}
      {renderSelects()}
      <div>
        <Button disabled={!isValid}>{t(BtnText.saveChanges)}</Button>
        <Link to={PATH.projects}>
          <Button type={BtnType.transparent}>{t(BtnText.return)}</Button>
        </Link>
      </div>
    </form>
  );
};
