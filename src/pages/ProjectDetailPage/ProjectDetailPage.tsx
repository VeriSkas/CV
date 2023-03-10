import React, { FC, useEffect } from 'react';

import { useMutation, useQuery, useReactiveVar } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

import { GET_PROJECT, UPDATE_PROJECT } from 'queries/projects';
import { ACTIVE_PROJECT_ID, MAIN_ROLE } from 'apollo/state';
import { FormContainer } from 'myComponents/FormContainer/FormContainer';
import { ProjectForm } from 'myComponents/ProjectForm/ProjectForm';
import { PATH } from 'constants/paths';
import { NewProjectForm } from 'interfaces/interfaces';
import { ProjectItem } from 'interfaces/project';
import { Roles } from 'constants/constants';
import { TypeForm } from 'constants/variables';
import { openNotification } from 'uiComponents/Notification/Notification';
import 'i18n/i18n';

export const ProjectDetailPage: FC<{}> = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { projectId: id } = useParams();
  const {
    loading,
    data,
    error: getProjectError,
  } = useQuery<{ project: ProjectItem }>(GET_PROJECT, {
    variables: { id },
  });
  const [updateProject, { error, data: projectUpdated }] =
    useMutation(UPDATE_PROJECT);
  const role = useReactiveVar(MAIN_ROLE);

  useEffect(() => {
    if (projectUpdated) {
      navigate(PATH.projects);
    }
  }, [projectUpdated]);

  useEffect(() => {
    if (error) {
      openNotification(error.message);
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      ACTIVE_PROJECT_ID(id);
    }
  }, [data]);

  useEffect(() => {
    if (getProjectError) {
      openNotification(getProjectError.message);
    }
  }, [getProjectError]);

  const submitFormHandler = async (data: NewProjectForm): Promise<void> => {
    const project = {
      ...data,
      end_date: data.end_date ? data.end_date : new Date().toISOString(),
      team_size: +data.team_size,
      skillsIds: data.skillsIds,
    };

    await updateProject({
      variables: {
        id,
        project,
      },
    });
  };

  return (
    <FormContainer title={t('TitleText.projectDetails')}>
      <>
        {loading && t('ContentText.loading')}
        {data && (
          <ProjectForm
            onSubmitForm={submitFormHandler}
            project={data.project}
            type={
              role === Roles.admin.value
                ? TypeForm.updateProject
                : TypeForm.projectDetails
            }
          />
        )}
      </>
    </FormContainer>
  );
};
