import React, { FC, useEffect } from 'react';

import { useMutation } from '@apollo/client';

import { SIGN_UP } from '../../apollo/queries/signUp';
import { LoginSignUpForm } from '../../components/LoginSignUpForm/LoginSignUpForm';
import { PATH } from '../../constants/paths';
import { signUpFormText } from '../../constants/text';
import { MAIN_ROLE, USER_ID, USER_TOKEN } from '../../apollo/state';

export const SignUp: FC<{
  auth: (isAuth: boolean) => void,
  setError: (error: string) => void,
}> = ({ auth, setError }) => {
  const [signUp, { data: userData, error }] = useMutation(SIGN_UP);
  const text = signUpFormText;

  useEffect(() => {
    if (userData) {
      const { token, user } = userData.signup;

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
    void signUp({
      variables: { auth: data },
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
