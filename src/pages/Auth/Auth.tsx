import React, { FC, useEffect } from 'react';

import { useLazyQuery } from '@apollo/client';

import { AUTH } from '../../apollo/queries/auth';
import { LoginSignUpForm } from '../../components/LoginSignUpForm/LoginSignUpForm';
import { PATH } from '../../constants/paths';
import { authFormText } from '../../constants/text';
import { MAIN_ROLE, USER_ID, USER_TOKEN } from '../../apollo/state';

export const Auth: FC<{
  auth: (isAuth: boolean) => void,
  setError: (error: string) => void,
}> = ({ auth, setError }) => {
  const [authUser, { data: userData, error }] = useLazyQuery(AUTH);
  const text = authFormText;

  useEffect(() => {
    if (userData) {
      const { token, user } = userData.login;

      MAIN_ROLE(user.role);
      USER_TOKEN(token);
      USER_ID(user.id);
      auth(true);
    }

    if (error) {
      setError(error.message);
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
