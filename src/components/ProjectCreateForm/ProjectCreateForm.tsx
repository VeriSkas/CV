import React, { FC, ReactNode } from 'react';

import { FieldErrorsImpl, useForm, UseFormRegister } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { PATH } from '../../constants/paths';
import { BtnText } from '../../constants/text';
import { BtnType, TypeForm } from '../../constants/variables';
import { FormTypes, NewProjectForm } from '../../types/interfaces/interfaces';
import { ProjectItem } from '../../types/interfaces/project';
import { makeProjectInputsList, makeSelectsList } from '../../utils/formCreator';
import { Button } from '../UI/Button/Button';
import { InputsFromArray } from '../UI/InputsFromArray/InputsFromArray';
import { MySelect } from '../UI/MySelect/MySelect';

export const ProjectCreateForm: FC<{
  onSubmitForm: (
    data: NewProjectForm,
  ) => void;
  project?: ProjectItem;
  type: string;
 }> = ({ onSubmitForm, project, type }) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors, isValid },
  } = useForm<NewProjectForm>({
    mode: 'all',
    defaultValues: {
      name: project?.name ?? '',
      internal_name: project?.internal_name ?? '',
      description: project?.description ?? '',
      domain: project?.domain ?? '',
      start_date: project?.start_date ?? '',
      end_date: project?.end_date ?? '',
      team_size: project?.team_size ?? 0,
      skillsIds: [],
    }
  });

  const renderSelects = (): ReactNode => {
    const selects = makeSelectsList(type);

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

  const submitForm = (data: NewProjectForm): void => {
    onSubmitForm(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <InputsFromArray
        register={register as UseFormRegister<FormTypes>}
        inputsArray={makeProjectInputsList(type)}
        errors={errors as Partial<FieldErrorsImpl<FormTypes>>}
      />
      {renderSelects()}
      <div>
        {type !== TypeForm.projectDetails && <Button disabled={!isValid}>{t(BtnText.saveChanges)}</Button>}
        <Link to={PATH.projects}>
          <Button type={BtnType.transparent}>{t(BtnText.return)}</Button>
        </Link>
      </div>
    </form>
  );
};
