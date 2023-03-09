import React, { FC } from 'react';

import { Control, useForm, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { FormTypes, IEmployeeForm } from '../../types/interfaces/interfaces';
import { Button } from '../UI/Button/Button';
import { EmployeeFormProps } from '../../types/interfaces/propsInterfaces';
import { Avatar } from '../Avatar/Avatar';
import { PATH } from '../../constants/paths';
import { makeInputsList, makeSelectsList } from '../../utils/formCreator';
import { BtnType, TypeForm } from '../../constants/variables';
import { FieldArrays } from '../../constants/fieldArrayVars';
import { LanguageItemInDB, SkillItemInDB } from '../../types/interfaces/cvs';
import { InputsFromArray } from '../UI/InputsFromArray/InputsFromArray';
import { SelectsFromArray } from '../UI/SelectsFromArray/SelectsFromArray';
import { FieldsArrayFromArray } from '../UI/FieldsArrayFromArray/FieldsArrayFromArray';
import '../../i18n/i18n';
import classes from './EmployeeForm.module.scss';

export const EmployeeForm: FC<EmployeeFormProps> = ({
  user,
  submitBtnText,
  onSubmitForm,
  type,
}) => {
  const skills = user?.profile?.skills?.reduce<SkillItemInDB[]>((acc, skill): SkillItemInDB[] => {
    return [...acc, { skill_name: skill.skill_name, mastery: skill.mastery }]
  }, []);
  const languages = user?.profile?.languages?.reduce<LanguageItemInDB[]>((acc, language): LanguageItemInDB[] => {
    return [...acc, { language_name: language.language_name, proficiency: language.proficiency }]
  }, []);
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm<IEmployeeForm>({
    mode: 'all',
    defaultValues: {
      first_name: user?.profile.first_name ?? '',
      last_name: user?.profile.last_name ?? '',
      email: user?.email ?? '',
      departmentId: user?.department?.id ?? '',
      positionId: user?.position?.id ?? '',
      cvsIds: user?.cvs?.map(cv => cv.id) ?? [],
      skills,
      languages,
    },
  });
  const isProfileType = type === TypeForm.employeeProfile;
  const { skills: skillFields, languages: languageFields } = FieldArrays;

  const submitForm = (data: IEmployeeForm): void => {
    onSubmitForm(data, user?.id ?? '');

    if (!user) {
      reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className={classes.EmployeeForm_form}
    >
      <Avatar
        user={user}
        disabled={isProfileType}
      />
      <InputsFromArray
        register={register as UseFormRegister<FormTypes>}
        inputsArray={makeInputsList(type)}
        errors={errors}
      />
      <SelectsFromArray
        selectsArray={makeSelectsList(type)}
        control={control as Control<FormTypes, any>}
        setValue={setValue as UseFormSetValue<FormTypes>}
      />
      <FieldsArrayFromArray
        fieldsArray={[skillFields, languageFields]}
        register={register as UseFormRegister<FormTypes>}
        control={control as Control<FormTypes, any>}
        disabled={isProfileType}
        setValue={setValue as UseFormSetValue<FormTypes>}
      />
      <div className={classes.FormBtns}>
        {!isProfileType && <Button disabled={!isValid}>
          {submitBtnText ?? t('BtnText.saveChanges')}
        </Button>}
        <Link to={PATH.employees}>
          <Button type={BtnType.transparent}>{t('BtnText.return')}</Button>
        </Link>
      </div>
    </form>
  );
};
