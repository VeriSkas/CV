import React, { FC, useEffect } from 'react';

import { useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';

import {
  CREATE_DEPARTMENT,
  GET_DEPARTMENTS,
} from '../../apollo/queries/departments';

import { DepartmentAndPositionForm } from '../../components/DepartmentAndPositionForm/DepartmentAndPositionForm';
import { FormContainer } from '../../components/FormContainer/FormContainer';
import { TitleText } from '../../constants/text';
import { TypeForm } from '../../constants/variables';
import { Department } from '../../types/interfaces/departments';

export const CreateDepartment: FC<{ setError: (error: string) => void }> = ({
  setError,
}) => {
  const { t } = useTranslation();
  const [createDepartment, { error }] = useMutation(CREATE_DEPARTMENT);

  useEffect(() => {
    if (error) {
      setError(error.message);
    }
  }, [error]);

  const submitFormHandler = async (department: {
    name: string,
  }): Promise<void> => {
    await createDepartment({
      variables: {
        department,
      },
      update(cache, { data: newDepartment }) {
        const departmentsData = cache.readQuery<{ departments: Department[] }>({
          query: GET_DEPARTMENTS,
        });

        if (departmentsData) {
          cache.writeQuery({
            query: GET_DEPARTMENTS,
            data: {
              departments: [
                newDepartment?.createDepartment,
                ...departmentsData.departments,
              ],
            },
          });
        }
      },
    });
  };

  return (
    <FormContainer title={t(TitleText.createDepartment)}>
      <DepartmentAndPositionForm
        onSubmitForm={submitFormHandler}
        type={TypeForm.createDepartment}
      />
    </FormContainer>
  );
};
