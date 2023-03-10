import React, { FC, useEffect } from 'react';

import { useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';

import { CREATE_DEPARTMENT, GET_DEPARTMENTS } from 'queries/departments';

import { FormWithOnlyName } from 'myComponents/FormWithOnlyName/FormWithOnlyName';
import { FormContainer } from 'myComponents/FormContainer/FormContainer';
import { TypeForm } from 'constants/variables';
import { Department } from 'interfaces/departments';
import { PATH } from 'constants/paths';
import { openNotification } from 'uiComponents/Notification/Notification';
import 'i18n/i18n';

export const CreateDepartment: FC<{}> = () => {
  const { t } = useTranslation();
  const [createDepartment, { error }] = useMutation(CREATE_DEPARTMENT);

  useEffect(() => {
    if (error) {
      openNotification(error.message);
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
                ...departmentsData.departments,
                newDepartment?.createDepartment,
              ],
            },
          });
        }
      },
    });
  };

  return (
    <FormContainer title={t('TitleText.createDepartment')}>
      <FormWithOnlyName
        onSubmitForm={submitFormHandler}
        type={TypeForm.createDepartment}
        returnPath={PATH.departments}
      />
    </FormContainer>
  );
};
