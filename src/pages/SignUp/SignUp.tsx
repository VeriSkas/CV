import React, { FC, useEffect } from 'react';

import { useMutation } from '@apollo/client';

import { SIGN_UP } from '../../apollo/queries/signUp';
import { LoginSignUpForm } from '../../components/LoginSignUpForm/LoginSignUpForm';
import { paths, signUpFormText } from '../../constants/constants';

export const SignUp: FC<{
  auth: (isAuth: boolean) => void,
  setError: (error: string) => void,
}> = (props) => {
  const [signUp, { data: userData, error }] = useMutation(SIGN_UP);
  const text = signUpFormText;

  useEffect(() => {
    if (userData) {
      const { token, user } = userData.signup;

      localStorage.setItem('token', token);
      localStorage.setItem('userId', user.id);
      props.auth(true);
    }

    if (error) {
      props.setError(error.message);
    }
  }, [userData, error]);

  const onSubmit = (data: { email: string, password: string }): void => {
    void signUp({
      variables: { auth: data },
    });
  };

  return (
    <LoginSignUpForm
      text={text}
      path={paths.login}
      onSubmit={(data: { email: string, password: string }) => {
        onSubmit(data);
      }}
    />
  );
};
