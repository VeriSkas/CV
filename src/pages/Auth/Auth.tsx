import React, { FC, useEffect } from 'react';

import { useLazyQuery } from '@apollo/client';

import { AUTH } from '../../apollo/queries/auth';
import { LoginSignUpForm } from '../../components/LoginSignUpForm/LoginSignUpForm';
import { authFormText } from '../../constants/constants';

export const Auth: FC<{
  auth: (isAuth: boolean) => void,
  setError: (error: string) => void,
}> = (props) => {
  const [authUser, { data: userData, error }] = useLazyQuery(AUTH);
  const text = authFormText;

  useEffect(() => {
    if (userData) {
      const { token, user } = userData.login;

      localStorage.setItem('token', token);
      localStorage.setItem('userId', user.id);
      props.auth(true);
    }

    if (error) {
      props.setError(error.message);
    }
  }, [userData, error]);

  const onSubmit = (data: { email: string, password: string }): void => {
    void authUser({
      variables: {
        auth: data,
      },
    });
  };

  return (
    <LoginSignUpForm
      text={text}
      path="/login"
      onSubmit={(data: { email: string, password: string }) => {
        onSubmit(data);
      }}
    />
  );
};
