import React, { FC, ReactNode } from 'react';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { inputs } from '../../shared/constants';
import { Inputs } from '../../shared/interfaces/interfaces';
import { LoginSignUpFormProps } from '../../shared/interfaces/propsInterfaces';
import { Button } from '../UI/Button/Button';
import { Input } from '../UI/Input/Input';
import classes from './LoginSignUpForm.module.scss';

export const LoginSignUpForm: FC<LoginSignUpFormProps> = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    mode: 'all',
  });

  const submitForm = (data: Inputs): void => {
    const email = data.email;
    const password = data.password;

    props.onSubmit({ email, password });
    reset();
  };

  const renderInputs = (): ReactNode => {
    const authInputs = [{ ...inputs.email }, { ...inputs.password }];

    return authInputs.map((input) => {
      return (
        <Input
          key={input.label}
          type={input.type}
          label={input.label}
          placeholder={input.label}
          validation={input.validation}
          register={register}
          error={errors[input.label]?.message}
        />
      );
    });
  };

  return (
    <div className={classes.LoginSignUpForm}>
      <form
        onSubmit={handleSubmit(submitForm)}
        className={classes.LoginSignUpForm_form}
      >
        <h1>{props.text.title}</h1>
        <h3>{props.text.subtitle}</h3>
        {renderInputs()}
        <div className={classes.FormBtns}>
          <Button disabled={!isValid}>{props.text.submitBtn}</Button>
          <Link to={props.path}>
            <Button type="transparent">{props.text.btn}</Button>
          </Link>
        </div>
      </form>
    </div>
  );
};
