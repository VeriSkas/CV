import React, { FC, useEffect } from 'react';

import { useMutation, useReactiveVar } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { CREATE_CV, GET_CVS } from '../../apollo/queries/cvs';
import { CvCreateForm } from '../../components/CvCreateForm/CvCreateForm';
import { FormContainer } from '../../components/FormContainer/FormContainer';
import { TitleText } from '../../constants/text';
import { CvItem, CvItemDetails, NewCV } from '../../types/interfaces/cvs';
import { NewCvForm } from '../../types/interfaces/interfaces';
import { PATH } from '../../constants/paths';
import { ACTIVE_CV_ID, USER_ID } from '../../apollo/state';
import { LSItems } from '../../constants/variables';

export const CreateCV: FC<{ setError: (message: string) => void }> = ({
  setError,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const userID = useReactiveVar(USER_ID);
  const [createCV, { data, error }] = useMutation<{ createCv: CvItemDetails }>(
    CREATE_CV
  );

  useEffect(() => {
    if (data) {
      const { id } = data.createCv;

      localStorage.setItem(LSItems.activeCV, id);
      ACTIVE_CV_ID(id);
      navigate(`${PATH.cvs}/${id} `);
    }

    if (error) {
      setError(error.message);
    }
  }, [data, error]);

  const submitFormHandler = (data: NewCvForm): void => {
    const newCV: NewCV = {
      ...data,
      userId: userID,
      is_template: false,
    };

    void createCV({
      variables: {
        cv: newCV,
      },
      update(cache, { data: newCv }) {
        const cvsData = cache.readQuery<{ cvs: CvItem[] }>({
          query: GET_CVS,
        });

        if (cvsData) {
          cache.writeQuery({
            query: GET_CVS,
            data: {
              cvs: [newCv?.createCv, ...cvsData.cvs],
            },
          });
        }
      },
    });
  };

  return (
    <FormContainer title={t(TitleText.createCV)}>
      <CvCreateForm onSubmitForm={submitFormHandler} />
    </FormContainer>
  );
};
