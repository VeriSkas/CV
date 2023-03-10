import React, { FC } from 'react';

import {
  Control,
  FieldErrorsImpl,
  useForm,
  UseFormRegister,
  UseFormSetValue
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { PATH } from '../../constants/paths';
import { BtnType, TypeForm } from '../../constants/variables';
import { FormTypes, NewProjectForm } from '../../types/interfaces/interfaces';
import { makeInputsList, makeSelectsList } from '../../utils/formCreator';
import { Button } from '../UI/Button/Button';
import { InputsFromArray } from '../UI/InputsFromArray/InputsFromArray';
import { SelectsFromArray } from '../UI/SelectsFromArray/SelectsFromArray';
import { ProjectFormProps } from '../../types/interfaces/propsInterfaces';
import '../../i18n/i18n';

export const ProjectForm: FC<ProjectFormProps> = ({ onSubmitForm, project, type }) => {
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
      skillsIds: project?.tech_stack.map(skill => skill.id) ?? [],
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
        inputsArray={makeInputsList(type)}
        errors={errors as Partial<FieldErrorsImpl<FormTypes>>}
      />
      <SelectsFromArray
        selectsArray={makeSelectsList(type)}
        control={control as Control<FormTypes, any>}
        setValue={setValue as UseFormSetValue<FormTypes>}
      />
      <div>
        {type !== TypeForm.projectDetails && <Button disabled={!isValid}>
          {t('BtnText.saveChanges')}
        </Button>}
        <Link to={PATH.projects}>
          <Button type={BtnType.transparent}>{t('BtnText.return')}</Button>
        </Link>
      </div>
    </form>
  );
};
