import React, { FC, useEffect } from 'react';

import { useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';

import { CREATE_PROJECT } from '../../apollo/queries/projects';
import { FormContainer } from '../../components/FormContainer/FormContainer';
import { ProjectCreateForm } from '../../components/ProjectCreateForm/ProjectCreateForm';
import { TitleText } from '../../constants/text';
import { NewProjectForm } from '../../types/interfaces/interfaces';
import { LSItems } from '../../constants/variables';
import { useNavigate } from 'react-router-dom';
import { ACTIVE_PROJECT_ID } from '../../apollo/state';
import { PATH } from '../../constants/paths';

export const CreateProject: FC<{ setError: (message: string) => void }> = ({
  setError,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [createProject, { error, data }] = useMutation<{
    createProject: { id: string },
  }>(CREATE_PROJECT);

  useEffect(() => {
    if (data) {
      const { id } = data.createProject;

      localStorage.setItem(LSItems.activeProject, id);
      ACTIVE_PROJECT_ID(id);
      navigate(`${PATH.projects}/${id} `);
    }

    if (error) {
      setError(error.message);
    }
  }, [error, data]);

  const submitFormHandler = (data: NewProjectForm): void => {
    const project = {
      ...data,
      end_date: data.end_date ? data.end_date : new Date().toISOString(),
      team_size: +data.team_size,
      skillsIds: data.skillsIds.length
        ? data.skillsIds.map((skill) => skill.value)
        : [],
    };

    void createProject({
      variables: {
        project,
      },
    });
  };

  return (
    <FormContainer title={t(TitleText.createProject)}>
      <ProjectCreateForm onSubmitForm={submitFormHandler} />
    </FormContainer>
  );
};
