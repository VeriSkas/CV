import React, { FC, useEffect, useState } from 'react';

import { useMutation, useQuery, useReactiveVar } from '@apollo/client';
import { useTranslation } from 'react-i18next';

import {
  GET_DEPARTMENTS,
  UPDATE_DEPARTMENT,
} from '../../apollo/queries/departments';
import { DepartmentAndPositionForm } from '../../components/DepartmentAndPositionForm/DepartmentAndPositionForm';
import { FormContainer } from '../../components/FormContainer/FormContainer';
import { ContentText, TitleText } from '../../constants/text';
import { TypeForm } from '../../constants/variables';
import { ACTIVE_DEPARTMENT_ID } from '../../apollo/state';
import { Department } from '../../types/interfaces/departments';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../constants/paths';

export const DepartmentDetail: FC<{ setError: (error: string) => void }> = ({
  setError,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const activeDepartment = useReactiveVar(ACTIVE_DEPARTMENT_ID);
  const [updateDepartment, { error, data: updatedData }] = useMutation(UPDATE_DEPARTMENT);
  const { data: departments, loading } = useQuery<{ departments: Department[] }>(GET_DEPARTMENTS);
  const [department, setDepartment] = useState<Department | null>(null);

  useEffect(() => {
    if (error) {
      setError(error.message);
    }
  }, [error]);

  useEffect(() => {
    if (updatedData) {
      navigate(PATH.departments)
    }
  }, [updatedData]);

  useEffect(() => {
    if (departments) {
      setDepartment(
        departments.departments.find(
          (department: Department) => department.id === activeDepartment
        ) as Department
      );
    }
  }, [departments]);

  const submitFormHandler = (
    department: {
      name: string,
    },
    id?: string
  ): void => {
    void updateDepartment({
      variables: {
        id,
        department,
      },
    });
  };

  return (
    <FormContainer title={t(TitleText.updateDepartment)}>
      <>
        {loading && t(ContentText.loading)}
        {department && (
        <DepartmentAndPositionForm
          onSubmitForm={submitFormHandler}
          type={TypeForm.updateDepartment}
          item={department ?? undefined}
        />
        )}
     </>
    </FormContainer>
  );
};
