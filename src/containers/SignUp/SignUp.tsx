import React, { FC, useEffect } from 'react';

import { useMutation } from '@apollo/client';

import { SIGN_UP } from '../../apollo/queries/signUp';
import { Form } from '../../components/UI/Form/Form';
import { paths, signUpFormText } from '../../shared/constants';

export const SignUp: FC<{ auth: (isAuth: boolean) => void }> = (props) => {
  const [signUp, { data: userData }] = useMutation(SIGN_UP);
  const text = signUpFormText;

  useEffect(() => {
    if (userData) {
      const { token, user } = userData.signup;

      localStorage.setItem('email', user.email);
      localStorage.setItem('token', token);
      props.auth(true);
    }
  }, [userData]);

  const onSubmit = (data: { email: string, password: string }): void => {
    void signUp({
      variables: { auth: data },
    });
  };

  return (
    <Form
      text={text}
      path={paths.login}
      onSubmit={(data: { email: string, password: string }) => {
        onSubmit(data);
      }}
    />
  );
};