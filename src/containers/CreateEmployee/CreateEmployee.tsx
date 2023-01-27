import React, { FC } from 'react';

import { EmployeeForm } from '../../components/EmployeeForm/EmployeeForm';
import { TypeEmployeeForm } from '../../shared/constants';
import { Inputs } from '../../shared/interfaces/interfaces';
import classes from './CreateEmployee.module.scss';

export const CreateEmployee: FC<{}> = () => {
  const createEmployee = (data: Inputs): void => {};

  return (
    <div className={classes.CreateEmployee}>
      <div className={classes.Container}>
        <h2 className={classes.Title}>Create Employee</h2>
        <EmployeeForm
          submitBtnText={'Create employee'}
          onSubmitForm={(data) => {
            createEmployee(data);
          }}
          type={TypeEmployeeForm.createEmployee}
        />
      </div>
    </div>
  );
};
