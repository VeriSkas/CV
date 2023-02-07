import React, { FC, ReactNode, useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';

import { BtnType, TypeForm } from '../../constants/constants';
import { Inputs } from '../../interfaces/interfaces';
import { BtnText, InputLabels, InputTypes } from '../../constants/text';
import { Button } from '../UI/Button/Button';
import { Input } from '../UI/Input/Input';
import classes from './EmployeeForm.module.scss';
import {
  EmployeeFormProps,
  OptionsType,
} from '../../interfaces/propsInterfaces';
import { Avatar } from '../Avatar/Avatar';
import { PATH } from '../../constants/paths';
import { Select } from '../UI/Select/Select';
import { makeEmployeeInputsList } from '../../utils/formCreator';
import { GET_DEPARTMENTS } from '../../apollo/queries/departments';
import { Department } from '../../interfaces/departments';
import { GET_POSITIONS } from '../../apollo/queries/positions';
import { Position } from '../../interfaces/positions';

export const EmployeeForm: FC<EmployeeFormProps> = ({
  user,
  submitBtnText,
  onSubmitForm,
  setError,
  type,
}) => {
  const { t } = useTranslation();
  const { data: departments } = useQuery<{ departments: Department[] }>(
    GET_DEPARTMENTS
  );
  const { data: positions } = useQuery<{ positions: Position[] }>(
    GET_POSITIONS
  );
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    mode: 'all',
  });
  const [departmentsValue, setDepartmentsValue] = useState<
    OptionsType[] | null
  >(null);
  const [positionsValue, setPositionsValue] = useState<OptionsType[] | null>(
    null
  );

  useEffect(() => {
    if (departments) {
      const departmentsOptions: OptionsType[] = departments.departments.map(
        (department) => ({
          id: department.id,
          value: department.name,
        })
      );
      setDepartmentsValue(departmentsOptions);
    }
  }, [departments]);

  useEffect(() => {
    if (positions) {
      const positionsOptions: OptionsType[] = positions.positions.map(
        (position) => ({
          id: position.id,
          value: position.name,
        })
      );
      setPositionsValue(positionsOptions);
    }
  }, [positions]);

  const setErrorHandler = (message: string): void => {
    if (setError) {
      setError(message);
    }
  };

  const submitForm = (data: Inputs): void => {
    if (data?.departmentId) {
      data.departmentId =
        departmentsValue?.find((item) => item.value === data?.departmentId)
          ?.id ?? '';
    }

    if (data?.positionId) {
      data.positionId =
        positionsValue?.find((item) => item.value === data?.positionId)?.id ??
        '';
    }

    onSubmitForm(data, user?.id ?? '');

    if (!user) {
      reset();
    }
  };

  const renderInputs = (): ReactNode => {
    const profileInputs = makeEmployeeInputsList(type, user);

    return profileInputs?.map((input) => {
      const options =
        input.label === InputLabels.department
          ? departmentsValue
          : positionsValue;

      return input.type === InputTypes.select ? (
        <Select
          key={input.label}
          onChangeHandler={selectChange}
          label={input.label}
          defaultValue={input.defaultValue ?? ''}
          options={options ?? []}
          labelName={input.labelName ?? ''}
          register={register}
        />
      ) : (
        <Input
          key={input.label}
          type={input.type}
          labelName={input.labelName}
          label={input.label}
          defaultValue={input.defaultValue}
          placeholder={input.label}
          validation={input.validation}
          readonly={input.readonly}
          register={register}
          error={errors[input.label]?.message}
        />
      );
    });
  };

  const selectChange = (id: string, value: string, key: string): void => {
    setValue(key, value);
  };

  return (
    <div className={classes.EmployeeForm}>
      <form
        onSubmit={handleSubmit(submitForm)}
        className={classes.EmployeeForm_form}
      >
        {type !== TypeForm.createEmployee && (
          <Avatar
            setError={(message: string) => {
              setErrorHandler(message);
            }}
            user={user}
          />
        )}
        {renderInputs()}
        <div className={classes.FormBtns}>
          <Button disabled={!isValid}>
            {submitBtnText ?? t(BtnText.saveChanges)}
          </Button>
          <Link to={PATH.employees}>
            <Button type={BtnType.transparent}>{t(BtnText.return)}</Button>
          </Link>
        </div>
      </form>
    </div>
  );
};
