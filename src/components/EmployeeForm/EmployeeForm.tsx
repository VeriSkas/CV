import React, { FC, ReactNode } from 'react';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { IEmployeeForm } from '../../types/interfaces/interfaces';
import { BtnText, InputTypes } from '../../constants/text';
import { Button } from '../UI/Button/Button';
import { Input } from '../UI/Input/Input';
import { EmployeeFormProps } from '../../types/interfaces/propsInterfaces';
import { Avatar } from '../Avatar/Avatar';
import { PATH } from '../../constants/paths';
import { Select } from '../UI/Select/Select';
import { makeEmployeeInputsList } from '../../utils/formCreator';
import { BtnType, TypeForm } from '../../constants/variables';
import classes from './EmployeeForm.module.scss';
import { FieldArray } from '../FieldArray/FieldArray';
import { FieldArrays } from '../../constants/fieldArrayVars';
import { LanguageItemInDB, SkillItemInDB } from '../../types/interfaces/cvs';

export const EmployeeForm: FC<EmployeeFormProps> = ({
  user,
  submitBtnText,
  onSubmitForm,
  setError,
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
      skills,
      languages,
    },
  });
  const isProfileType = type === TypeForm.employeeProfile;

  const setErrorHandler = (message: string): void => {
    if (setError) {
      setError(message);
    }
  };

  const submitForm = (data: IEmployeeForm): void => {
    onSubmitForm(data, user?.id ?? '');

    if (!user) {
      reset();
    }
  };

  const renderInputs = (): ReactNode => {
    const profileInputs = makeEmployeeInputsList(type, user);

    return profileInputs?.map((input) => {
      return input.type === InputTypes.select ? (
        <Select
          key={input.label}
          onChangeHandler={selectChange}
          label={input.label}
          defaultValue={input.defaultValue ?? ''}
          labelName={input.labelName ?? ''}
          register={register}
          disabled={isProfileType}
        />
      ) : (
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
          error={errors[input.label as keyof IEmployeeForm]?.message}
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
          disabled={isProfileType}
        />
      );
    });
  };

  const selectChange = (id: string, value: string, key: string): void => {
    setValue(key as keyof IEmployeeForm, id);
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className={classes.EmployeeForm_form}
    >
      <Avatar
        setError={(message: string) => {
          setErrorHandler(message);
        }}
        user={user}
        disabled={isProfileType}
      />
      {renderInputs()}
      {renderFieldArrays()}
      <div className={classes.FormBtns}>
        {!isProfileType && <Button disabled={!isValid}>
          {submitBtnText ?? t(BtnText.saveChanges)}
        </Button>}
        <Link to={PATH.employees}>
          <Button type={BtnType.transparent}>{t(BtnText.return)}</Button>
        </Link>
      </div>
    </form>
  );
};
