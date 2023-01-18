import React from 'react';

import { Form } from '../../components/UI/Form/Form';
import { authFormText } from '../../shared/constants';

export const Auth = () => {
  const text = authFormText;

  const onSubmit = (data: { email: string, password: string }) => {
    localStorage.setItem('email', data.email);
  };

  return (
    <Form
      text={text}
      onSubmit={(data: { email: string, password: string }) => onSubmit(data)}
    />
  );
};
