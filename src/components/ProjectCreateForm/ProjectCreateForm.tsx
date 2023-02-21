import React, { FC } from 'react';

import { Control, FieldErrorsImpl, useForm, UseFormRegister, UseFormSetValue } from 'react-hook-form';
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
import { SelectsFromArray } from '../UI/SelectsFromArray/SelectsFromArray';

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
      <SelectsFromArray
        selectsArray={makeSelectsList(type)}
        control={control as Control<FormTypes, any>}
        setValue={setValue as UseFormSetValue<FormTypes>}
      />
      <div>
        {type !== TypeForm.projectDetails && <Button disabled={!isValid}>{t(BtnText.saveChanges)}</Button>}
        <Link to={PATH.projects}>
          <Button type={BtnType.transparent}>{t(BtnText.return)}</Button>
        </Link>
      </div>
    </form>
  );
};
