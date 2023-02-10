import React, { FC, useEffect } from 'react';

import { useLazyQuery } from '@apollo/client';

import { AUTH } from '../../apollo/queries/auth';
import { LoginSignUpForm } from '../../components/LoginSignUpForm/LoginSignUpForm';
import { PATH } from '../../constants/paths';
import { authFormText } from '../../constants/text';
import { LSItems } from '../../constants/variables';

export const Auth: FC<{
  auth: (isAuth: boolean) => void,
  setError: (error: string) => void,
}> = (props) => {
  const [authUser, { data: userData, error }] = useLazyQuery(AUTH);
  const text = authFormText;

  useEffect(() => {
    if (userData) {
      const { token, user } = userData.login;

      localStorage.setItem(LSItems.token, token);
      localStorage.setItem(LSItems.userId, user.id);
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
      path={PATH.login}
      onSubmit={(data: { email: string, password: string }) => {
        onSubmit(data);
      }}
    />
  );
};
