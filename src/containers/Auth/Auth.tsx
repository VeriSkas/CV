import React, { FC, useEffect } from 'react';

import { useLazyQuery } from '@apollo/client';

import { AUTH } from '../../apollo/queries/auth';
import { Form } from '../../components/UI/Form/Form';
import { authFormText } from '../../shared/constants';

export const Auth: FC<{ auth: (isAuth: boolean) => void }> = (props) => {
  const [authUser, { data: userData }] = useLazyQuery(AUTH);
  const text = authFormText;

  useEffect(() => {
    if (userData) {
      const { token, user } = userData.login;

      localStorage.setItem('email', user.email);
      localStorage.setItem('token', token);
      props.auth(true);
    }
  }, [userData]);

  const onSubmit = (data: { email: string, password: string }): void => {
    void authUser({
      variables: {
        auth: data,
      },
    });
  };

  return (
    <Form
      text={text}
      onSubmit={(data: { email: string, password: string }) => {
        onSubmit(data);
      }}
    />
  );
};