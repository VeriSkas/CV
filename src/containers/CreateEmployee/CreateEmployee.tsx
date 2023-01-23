import React, { FC } from 'react';

import { EmployeeForm } from '../../components/EmployeeForm/EmployeeForm';
import classes from './CreateEmployee.module.scss';

export const CreateEmployee: FC<{}> = () => {
  return (
    <div className={classes.CreateEmployee}>
      <div className={classes.Container}>
        <h2 className={classes.Title}>Create Employee</h2>
        <EmployeeForm submitBtnText={'Create employee'} />
      </div>
    </div>
  );
};
