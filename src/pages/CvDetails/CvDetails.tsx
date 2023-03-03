import React, { FC, useEffect } from 'react';

import { useMutation, useQuery, useReactiveVar } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { GET_CV, UPDATE_CV } from '../../apollo/queries/cvs';
import { CvForm } from '../../components/CvForm/CvForm ';
import { CvItemDetails } from '../../types/interfaces/cvs';
import { CvDetailForm } from '../../types/interfaces/interfaces';
import { ContentText, TitleText } from '../../constants/text';
import { FormContainer } from '../../components/FormContainer/FormContainer';
import { TypeForm } from '../../constants/variables';
import { ACTIVE_CV_ID, MAIN_ROLE, USER_ID } from '../../apollo/state';
import { Roles } from '../../constants/constants';
import { PATH } from '../../constants/paths';

export const CvDetails: FC<{ setError: (error: string) => void }> = ({
  setError,
}) => {
  const userID = useReactiveVar(USER_ID);
  const activeCV = useReactiveVar(ACTIVE_CV_ID);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { loading, data } = useQuery<{ cv: CvItemDetails }>(GET_CV, {
    variables: {
      id: activeCV,
    },
  });
  const [updateCv, { data: updatedCvData, error }] = useMutation(UPDATE_CV);
  const role = useReactiveVar(MAIN_ROLE);

  useEffect(() => {
    if (error) {
      setError(error.message);
    }
  }, [error]);

  useEffect(() => {
    if (updatedCvData) {
      navigate(PATH.cvs);
    }
  }, [updatedCvData]);

  const submitFormHandler = async (
    {
      description,
      is_template,
      languages,
      name,
      projectsIds,
      skills,
      userId,
    }: CvDetailForm,
    id?: string
  ): Promise<void> => {
    const cv = {
      description,
      userId,
      is_template,
      languages,
      name,
      projectsIds,
      skills,
    };

    await updateCv({
      variables: { id, cv },
    });
  };

  return (
    <FormContainer title={t(TitleText.cvDetails)}>
      <>
        {loading && <div>{t(ContentText.loading)}</div>}
        {data && (
          <CvForm
            cv={data.cv}
            onSubmitForm={async (data: CvDetailForm, id?: string) => {
              await submitFormHandler(data, id);
            }}
            type={
              role === Roles.admin.value || userID === data?.cv.user?.id
                ? TypeForm.cvUser
                : TypeForm.cvDetails
            }
          />
        )}
      </>
    </FormContainer>
  );
};
