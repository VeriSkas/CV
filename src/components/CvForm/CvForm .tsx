import React, { FC, ReactNode } from 'react';

import { useReactiveVar } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { MAIN_ROLE } from '../../apollo/state';
import { Roles } from '../../constants/constants';
import { FieldArrays } from '../../constants/fieldArrayVars';
import { PATH } from '../../constants/paths';
import { BtnText } from '../../constants/text';
import { BtnType, TypeForm } from '../../constants/variables';
import { LanguageItemInDB, SkillItemInDB } from '../../types/interfaces/cvs';
import { CvDetailForm } from '../../types/interfaces/interfaces';
import { CvFormProps } from '../../types/interfaces/propsInterfaces';
import { makeCvInputsList, makeSelectsList } from '../../utils/formCreator';
import { FieldArray } from '../FieldArray/FieldArray';
import { Button } from '../UI/Button/Button';
import { Input } from '../UI/Input/Input';
import { MySelect } from '../UI/MySelect/MySelect';

export const CvForm: FC<CvFormProps> = ({
  cv,
  submitBtnText,
  onSubmitForm,
  type,
}) => {
  const skills = cv?.skills?.reduce<SkillItemInDB[]>((acc, skill): SkillItemInDB[] => {
    return [...acc, { skill_name: skill.skill_name, mastery: skill.mastery }]
  }, []);
  const languages = cv?.languages?.reduce<LanguageItemInDB[]>((acc, language): LanguageItemInDB[] => {
    return [...acc, { language_name: language.language_name, proficiency: language.proficiency }]
  }, []);
  const projectsIds = cv?.projects?.map((project: { id: string }) => project.id);
  const { t } = useTranslation();
  const role = useReactiveVar(MAIN_ROLE);
  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    getValues,
    formState: { errors, isValid },
  } = useForm<CvDetailForm>({
    mode: 'all',
    defaultValues: {
      is_template: cv?.is_template,
      name: cv?.name,
      description: cv?.description,
      full_name: cv?.user?.profile?.full_name,
      positionId: cv?.user?.position?.name,
      projectsIds,
      skills,
      languages,
    },
  });

  const submitForm = (data: CvDetailForm): void => {
    onSubmitForm(data, cv?.id ?? '');

    if (!cv) {
      reset();
    }
  };

  const renderInputs = (): ReactNode => {
    const inputs = makeCvInputsList(type, cv);

    return inputs?.map((input) => {
      return (
        <Input
          key={input.label}
          type={input.type}
          labelName={input.labelName}
          label={input.label}
          defaultValue={input.defaultValue}
          placeholder={input.labelName}
          validation={input.validation}
          readonly={input.readonly}
          register={register}
          error={errors[input.label as keyof CvDetailForm]?.message}
        />
      );
    });
  };

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
          getValues={getValues}
        />
      )
    })
  }

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
          disabled={type !== TypeForm.cvUser}
        />
      );
    });
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      {renderInputs()}
      {renderSelects()}
      {renderFieldArrays()}
      <div>
        {(type === TypeForm.cvUser || role === Roles.admin.value) && (
          <Button disabled={!isValid}>
            {submitBtnText ?? t(BtnText.saveChanges)}
          </Button>
        )}
        <Link to={PATH.cvs}>
          <Button type={BtnType.transparent}>{t(BtnText.return)}</Button>
        </Link>
      </div>
    </form>
  );
};
