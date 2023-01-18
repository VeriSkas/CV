import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { inputs } from '../../../shared/constants';
import { Inputs } from '../../../shared/interfaces';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import classes from './Form.module.scss';

export const Form = (props: any) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    mode: 'all',
  });

  const submitForm = (data: Inputs) => {
    const email = data.email;
    const password = data.password;

    props.onSubmit({ email, password });
    reset();
  };

  const renderInputs = () => {
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
    <div className={classes.Form}>
      <form onSubmit={handleSubmit(submitForm)} className={classes.Form_form}>
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
