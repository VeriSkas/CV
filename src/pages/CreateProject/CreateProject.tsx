import React, { FC, useEffect } from 'react';

import { useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { CREATE_PROJECT, GET_PROJECTS } from 'queries/projects';
import { FormContainer } from 'myComponents/FormContainer/FormContainer';
import { ProjectForm } from 'myComponents/ProjectForm/ProjectForm';
import { NewProjectForm } from 'interfaces/interfaces';
import { LSItems, TypeForm } from 'constants/variables';
import { ACTIVE_PROJECT_ID } from 'apollo/state';
import { PATH } from 'constants/paths';
import { ProjectItem } from 'interfaces/project';
import { openNotification } from 'uiComponents/Notification/Notification';
import 'i18n/i18n';

export const CreateProject: FC<{}> = () => {
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
      openNotification(error.message);
    }
  }, [error, data]);

  const submitFormHandler = async (data: NewProjectForm): Promise<void> => {
    const project = {
      ...data,
      end_date: data.end_date ? data.end_date : new Date().toISOString(),
      team_size: +data.team_size,
      skillsIds: data.skillsIds,
    };

    void createProject({
      variables: {
        project,
      },
      update(cache, { data: newProject }) {
        const projectsData = cache.readQuery<{ projects: ProjectItem[] }>({
          query: GET_PROJECTS,
        });

        if (projectsData) {
          cache.writeQuery({
            query: GET_PROJECTS,
            data: {
              projects: [...projectsData.projects, newProject?.createProject],
            },
          });
        }
      },
    });
  };

  return (
    <FormContainer title={t('TitleText.createProject')}>
      <ProjectForm
        onSubmitForm={submitFormHandler}
        type={TypeForm.createProject}
      />
    </FormContainer>
  );
};
