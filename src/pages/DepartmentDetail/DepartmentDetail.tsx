import React, { FC, useEffect, useState } from 'react';

import { useMutation, useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';

import {
  GET_DEPARTMENTS,
  UPDATE_DEPARTMENT,
} from '../../apollo/queries/departments';
import { FormContainer } from '../../components/FormContainer/FormContainer';
import { TypeForm } from '../../constants/variables';
import { ACTIVE_DEPARTMENT_ID } from '../../apollo/state';
import { Department } from '../../types/interfaces/departments';
import { useNavigate, useParams } from 'react-router-dom';
import { PATH } from '../../constants/paths';
import { FormWithOnlyName } from '../../components/FormWithOnlyName/FormWithOnlyName';
import '../../i18n/i18n';

export const DepartmentDetail: FC<{ setError: (error: string) => void }> = ({
  setError,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { departmentId } = useParams();
  const [updateDepartment, { error, data: updatedData }] =
    useMutation(UPDATE_DEPARTMENT);
  const { data: departments, loading } = useQuery<{
    departments: Department[],
  }>(GET_DEPARTMENTS);
  const [department, setDepartment] = useState<Department | null>(null);

  useEffect(() => {
    if (error) {
      setError(error.message);
    }
  }, [error]);

  useEffect(() => {
    if (updatedData) {
      navigate(PATH.departments);
    }
  }, [updatedData]);

  useEffect(() => {
    if (departments) {
      const activeDepartment = departments.departments.find(
        (department: Department) => department.id === departmentId
      );

      if (activeDepartment) {
        setDepartment(activeDepartment);
        ACTIVE_DEPARTMENT_ID(departmentId);
      }
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
    <FormContainer title={t('TitleText.updateDepartment')}>
      <>
        {loading && t('ContentText.loading')}
        {department && (
          <FormWithOnlyName
            onSubmitForm={submitFormHandler}
            type={TypeForm.updateDepartment}
            returnPath={PATH.departments}
            item={department ?? undefined}
          />
        )}
      </>
    </FormContainer>
  );
};
