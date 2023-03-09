import React, { FC, useEffect, useState } from 'react';

import { useMutation, useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

import { GET_SKILLS, UPDATE_SKILL } from '../../apollo/queries/skills';
import { ACTIVE_SKILL_ID } from '../../apollo/state';
import { FormContainer } from '../../components/FormContainer/FormContainer';
import { FormWithOnlyName } from '../../components/FormWithOnlyName/FormWithOnlyName';
import { PATH } from '../../constants/paths';
import { TypeForm } from '../../constants/variables';
import { Skill } from '../../types/interfaces/skills';
import { openNotification } from '../../components/UI/Notification/Notification';
import '../../i18n/i18n';

export const SkillDetail: FC<{}> = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { skillId } = useParams();
  const [updateSkill, { error, data: updatedData }] = useMutation(UPDATE_SKILL);
  const {
    data: skills,
    loading,
    error: getError,
  } = useQuery<{ skills: Skill[] }>(GET_SKILLS);
  const [skill, setSkill] = useState<Skill | null>(null);

  useEffect(() => {
    if (getError) {
      openNotification(getError.message);
    }
  }, [getError]);

  useEffect(() => {
    if (error) {
      openNotification(error.message);
    }
  }, [error]);

  useEffect(() => {
    if (updatedData) {
      navigate(PATH.skills);
    }
  }, [updatedData]);

  useEffect(() => {
    if (skills) {
      const activeSkill = skills.skills.find(
        (skill: Skill) => skill.id === skillId
      );

      if (activeSkill) {
        setSkill(activeSkill);
        ACTIVE_SKILL_ID(skillId);
      }
    }
  }, [skills]);

  const submitFormHandler = (
    skill: {
      name: string,
    },
    id?: string
  ): void => {
    void updateSkill({
      variables: {
        id,
        skill,
      },
    });
  };

  return (
    <FormContainer title={t('TitleText.updateSkill')}>
      <>
        {loading && t('ContentText.loading')}
        {skill && (
          <FormWithOnlyName
            onSubmitForm={submitFormHandler}
            type={TypeForm.updateSkill}
            returnPath={PATH.skills}
            item={skill ?? undefined}
          />
        )}
      </>
    </FormContainer>
  );
};
