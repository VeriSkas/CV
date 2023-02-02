import React, { FC } from 'react';

import { useTranslation } from 'react-i18next';

import { EmployeeForm } from '../../components/EmployeeForm/EmployeeForm';
import { TypeForm } from '../../constants/constants';
import { BtnText, TitleText } from '../../constants/text';
import { Inputs } from '../../interfaces/interfaces';
import classes from './CreateEmployee.module.scss';

export const CreateEmployee: FC<{}> = () => {
  const { t } = useTranslation();
  const createEmployee = (data: Inputs): void => {};

  return (
    <div className={classes.CreateEmployee}>
      <div className={classes.Container}>
        <h2 className={classes.Title}>{t(TitleText.createEmployee)}</h2>
        <EmployeeForm
          submitBtnText={t(BtnText.createEmployee)}
          onSubmitForm={(data) => {
            createEmployee(data);
          }}
          type={TypeForm.createEmployee}
        />
      </div>
    </div>
  );
};
