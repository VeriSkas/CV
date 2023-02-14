import React, { FC } from 'react';

import { useTranslation } from 'react-i18next';

import { CreateEmployeeForm } from '../../components/CreateEmployeeForm/CreateEmployeeForm';
import { FormContainer } from '../../components/FormContainer/FormContainer';
import { TitleText } from '../../constants/text';
import { NewEmployeeForm } from '../../types/interfaces/interfaces';

export const CreateEmployee: FC<{}> = () => {
  const { t } = useTranslation();

  const createEmployee = (data: NewEmployeeForm): void => {};

  return (
    <FormContainer title={t(TitleText.createEmployee)}>
      <CreateEmployeeForm onSubmitForm={createEmployee} />
    </FormContainer>
  );
};
