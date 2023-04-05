import React, { FC, useEffect } from 'react';

import { useLazyQuery } from '@apollo/client';

import { AUTH } from 'queries/auth';
import { LoginSignUpForm } from 'myComponents/LoginSignUpForm/LoginSignUpForm';
import { PATH } from 'constants/paths';
import { authFormText } from 'constants/text';
import { MAIN_ROLE, USER_ID, USER_TOKEN } from 'apollo/state';
import { LSItems } from 'constants/variables';
import { openNotification } from 'uiComponents/Notification/Notification';

export const Auth: FC<{}> = () => {
  const [authUser, { data: userData, error }] = useLazyQuery(AUTH);
  const text = authFormText;

  useEffect(() => {
    if (userData) {
      const { token, user } = userData.login;

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
