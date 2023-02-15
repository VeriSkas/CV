import React, { FC, useEffect } from 'react';

import { useQuery, useReactiveVar } from '@apollo/client';
import { useTranslation } from 'react-i18next';

import { GET_CV } from '../../apollo/queries/cvs';
import { CvForm } from '../../components/CvForm/CvForm ';
import { CvItemDetails } from '../../types/interfaces/cvs';
import { Inputs } from '../../types/interfaces/interfaces';
import { ContentText, TitleText } from '../../constants/text';
import { FormContainer } from '../../components/FormContainer/FormContainer';
import { TypeForm } from '../../constants/variables';
import { ACTIVE_CV_ID, USER_ID } from '../../apollo/state';

export const CvDetails: FC<{}> = () => {
  const userID = useReactiveVar(USER_ID);
  const activeCV = useReactiveVar(ACTIVE_CV_ID);
  const { t } = useTranslation();
  const { loading, data } = useQuery<{ cv: CvItemDetails }>(GET_CV, {
    variables: {
      id: activeCV,
    },
  });

  useEffect(() => {}, [data]);

  const submitFormHandler = (data: Inputs, id?: string): void => {};

  return (
    <FormContainer title={t(TitleText.cvDetails)}>
      <>
        {loading && <div>{t(ContentText.loading)}</div>}
        {data && (
          <CvForm
            cv={data.cv}
            onSubmitForm={(data: any, id?: string) => {
              submitFormHandler(data, id);
            }}
            type={
              userID === data.cv.user?.id ? TypeForm.cvUser : TypeForm.cvDetails
            }
          />
        )}
      </>
    </FormContainer>
  );
};
