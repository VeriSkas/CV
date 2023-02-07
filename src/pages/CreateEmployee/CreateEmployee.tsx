import React, { FC } from 'react';

import { useTranslation } from 'react-i18next';

import { EmployeeForm } from '../../components/EmployeeForm/EmployeeForm';
import { FormContainer } from '../../components/FormContainer/FormContainer';
import { TypeForm } from '../../constants/constants';
import { BtnText, TitleText } from '../../constants/text';
import { Inputs } from '../../interfaces/interfaces';

export const CreateEmployee: FC<{}> = () => {
  const { t } = useTranslation();
  const createEmployee = (data: Inputs): void => {};

  return (
    <FormContainer title={t(TitleText.createEmployee)}>
      <EmployeeForm
        submitBtnText={t(BtnText.createEmployee)}
        onSubmitForm={(data) => {
          createEmployee(data);
        }}
        type={TypeForm.createEmployee}
      />
    </FormContainer>
  );
};
