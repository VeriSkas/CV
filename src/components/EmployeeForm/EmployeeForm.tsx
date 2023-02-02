import React, { FC, ReactNode } from 'react';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { BtnType, inputs, TypeForm } from '../../constants/constants';
import { Inputs } from '../../interfaces/interfaces';
import { BtnText, InputLabelNames } from '../../constants/text';
import { Button } from '../UI/Button/Button';
import { Input } from '../UI/Input/Input';
import classes from './EmployeeForm.module.scss';
import { EmployeeFormProps } from '../../interfaces/propsInterfaces';
import { Avatar } from '../Avatar/Avatar';
import { PATH } from '../../constants/paths';

export const EmployeeForm: FC<EmployeeFormProps> = ({
  user,
  submitBtnText,
  onSubmitForm,
  setError,
  type,
}) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    mode: 'all',
  });

  const setErrorHandler = (message: string): void => {
    if (setError) {
      setError(message);
    }
  };

  const submitForm = (data: Inputs): void => {
    onSubmitForm(data, user?.id ?? '');

    if (!user) {
      reset();
    }
  };

  const renderInputs = (): ReactNode => {
    let profileInputs;

    if (type === TypeForm.updateEmployee) {
      profileInputs = [
        { ...inputs.first_name, defaultValue: user?.profile.first_name ?? '' },
        { ...inputs.last_name, defaultValue: user?.profile.last_name ?? '' },
        { ...inputs.email2, defaultValue: user?.email ?? '' },
        { ...inputs.department, defaultValue: user?.department?.name ?? '' },
        { ...inputs.position, defaultValue: user?.position?.name ?? '' },
      ];
    } else if (type === TypeForm.profileType) {
      profileInputs = [
        { ...inputs.first_name, defaultValue: user?.profile.first_name ?? '' },
        { ...inputs.last_name, defaultValue: user?.profile.last_name ?? '' },
        { ...inputs.email2, defaultValue: user?.email ?? '' },
        {
          ...inputs.department,
          readonly: true,
          defaultValue: user?.department?.name ?? '',
        },
        {
          ...inputs.position,
          readonly: true,
          defaultValue: user?.position?.name ?? '',
        },
      ];
    } else if (type === TypeForm.createEmployee) {
      profileInputs = [
        { ...inputs.first_name },
        { ...inputs.last_name },
        { ...inputs.email, labelName: InputLabelNames.email },
        { ...inputs.password, labelName: InputLabelNames.password },
      ];
    }

    return profileInputs?.map((input) => {
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
          error={errors[input.label]?.message}
        />
      );
    });
  };

  return (
    <div className={classes.EmployeeForm}>
      <form
        onSubmit={handleSubmit(submitForm)}
        className={classes.EmployeeForm_form}
      >
        {type !== TypeForm.createEmployee && (
          <Avatar
            setError={(message: string) => {
              setErrorHandler(message);
            }}
            user={user}
          />
        )}
        {renderInputs()}
        <div className={classes.FormBtns}>
          <Button disabled={!isValid}>
            {submitBtnText ?? t(BtnText.saveChanges)}
          </Button>
          <Link to={PATH.employees}>
            <Button type={BtnType.transparent}>{t(BtnText.return)}</Button>
          </Link>
        </div>
      </form>
    </div>
  );
};
