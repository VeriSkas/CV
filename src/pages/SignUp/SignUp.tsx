import React, { FC, useEffect } from 'react';

import { useMutation } from '@apollo/client';

import { SIGN_UP } from 'queries/signUp';
import { LoginSignUpForm } from 'myComponents/LoginSignUpForm/LoginSignUpForm';
import { PATH } from 'constants/paths';
import { signUpFormText } from 'constants/text';
import { MAIN_ROLE, USER_ID, USER_TOKEN } from 'apollo/state';
import { LSItems } from 'constants/variables';
import { openNotification } from 'uiComponents/Notification/Notification';

export const SignUp: FC<{}> = () => {
  const [signUp, { data: userData, error }] = useMutation(SIGN_UP);
  const text = signUpFormText;

  useEffect(() => {
    if (userData) {
      const { token, user } = userData.signup;

      localStorage.setItem(LSItems.token, token);
      localStorage.setItem(LSItems.role, user.role);
      localStorage.setItem(LSItems.userId, user.id);
      MAIN_ROLE(user.role);
      USER_TOKEN(token);
      USER_ID(user.id);
    }

    if (error) {
      openNotification(error.message);
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
