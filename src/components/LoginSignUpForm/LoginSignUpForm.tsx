import React, { FC } from 'react';

import { useForm, UseFormRegister } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { inputs } from '../../constants/inputsSettings';
import { BtnType } from '../../constants/variables';
import { FormTypes, Inputs } from '../../types/interfaces/interfaces';
import { LoginSignUpFormProps } from '../../types/interfaces/propsInterfaces';
import { Button } from '../UI/Button/Button';
import { InputsFromArray } from '../UI/InputsFromArray/InputsFromArray';
import classes from './LoginSignUpForm.module.scss';

export const LoginSignUpForm: FC<LoginSignUpFormProps> = ({
  text,
  path,
  onSubmit,
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
  const authInputs = [{ ...inputs.email }, { ...inputs.password }];

  const submitForm = (data: Inputs): void => {
    const { email, password } = data;

    onSubmit({ email, password });
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className={classes.LoginSignUpForm_form}
    >
      <h1>{t(text.title)}</h1>
      <h3>{t(text.subtitle)}</h3>
      <InputsFromArray
        register={register as UseFormRegister<FormTypes>}
        inputsArray={authInputs}
        errors={errors}
      />
      <div className={classes.FormBtns}>
        <Button disabled={!isValid}>{t(text.submitBtn)}</Button>
        <Link to={path}>
          <Button type={BtnType.transparent}>{t(text.btn)}</Button>
        </Link>
      </div>
    </form>
  );
};
