import React, { FC, ReactNode } from 'react';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { inputs } from '../../shared/constants';
import { Inputs, UserInfo } from '../../shared/interfaces';
import { Button } from '../UI/Button/Button';
import { Input } from '../UI/Input/Input';
import classes from './EmployeeForm.module.scss';

export const EmployeeForm: FC<{ user: UserInfo }> = ({ user }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    mode: 'all',
  });
  const {
    department,
    email,
    position,
    profile: { firstName, lastName, avatar },
  } = user;

  const submitForm = (data: Inputs): void => {
    reset();
  };

  const renderInputs = (): ReactNode => {
    const profileInputs = [
      { ...inputs.firstName, defaultValue: firstName || '' },
      { ...inputs.lastName, defaultValue: lastName || '' },
      { ...inputs.email2, defaultValue: email || '' },
      { ...inputs.department, defaultValue: department ?? '' },
      { ...inputs.position, defaultValue: position ?? '' },
    ];

    return profileInputs.map((input) => {
      return (
        <Input
          key={input.label}
          type={input.type}
          labelName={input.labelName}
          label={input.label}
          defaultValue={input.defaultValue}
          placeholder={input.label}
          validation={input.validation}
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
        <div className={classes.UserPhoto}>
          <div className={classes.UserLogo}>
            {avatar ? <img src={avatar} /> : email[0]}
          </div>
        </div>
        {renderInputs()}
        <div className={classes.FormBtns}>
          <Button disabled={!isValid}>{'Save changes'}</Button>
          <Link to={'/employees'}>
            <Button type="transparent">{'Return'}</Button>
          </Link>
        </div>
      </form>
    </div>
  );
};
