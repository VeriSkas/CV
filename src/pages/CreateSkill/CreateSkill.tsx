import React, { FC, useEffect } from 'react';

import { useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';

import { CREATE_SKILL, GET_SKILLS } from 'queries/skills';
import { FormContainer } from 'myComponents/FormContainer/FormContainer';
import { FormWithOnlyName } from 'myComponents/FormWithOnlyName/FormWithOnlyName';
import { PATH } from 'constants/paths';
import { TypeForm } from 'constants/variables';
import { Skill } from 'interfaces/skills';
import { openNotification } from 'uiComponents/Notification/Notification';
import 'i18n/i18n';

export const CreateSkill: FC<{}> = () => {
  const { t } = useTranslation();
  const [createSkill, { error }] = useMutation(CREATE_SKILL);

  useEffect(() => {
    if (error) {
      openNotification(error.message);
    }
  }, [error]);

  const submitFormHandler = async (skill: { name: string }): Promise<void> => {
    await createSkill({
      variables: {
        skill,
      },
      update(cache, { data: newSkill }) {
        const skillsData = cache.readQuery<{ skills: Skill[] }>({
          query: GET_SKILLS,
        });

        if (skillsData) {
          cache.writeQuery({
            query: GET_SKILLS,
            data: {
              skills: [...skillsData.skills, newSkill?.createSkill],
            },
          });
        }
      },
    });
  };

  return (
    <FormContainer title={t('TitleText.createSkill')}>
      <FormWithOnlyName
        onSubmitForm={submitFormHandler}
        type={TypeForm.createSkill}
        returnPath={PATH.skills}
      />
    </FormContainer>
  );
};
