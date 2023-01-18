import React from 'react';

import { Form } from '../../components/UI/Form/Form';
import { paths, signUpFormText } from '../../shared/constants';

export const SignUp = () => {
  const text = signUpFormText;

  const onSubmit = (data: { email: string, password: string }) => {
    console.log(data);
  };

  return (
    <Form
      text={text}
      path={paths.login}
      onSubmit={(data: { email: string, password: string }) => onSubmit(data)}
    />
  );
};
