import React, { FC, useEffect } from 'react';

import { useMutation, useQuery, useReactiveVar } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { GET_PROJECT, UPDATE_PROJECT } from '../../apollo/queries/projects';
import { ACTIVE_PROJECT_ID, MAIN_ROLE } from '../../apollo/state';
import { FormContainer } from '../../components/FormContainer/FormContainer';
import { ProjectCreateForm } from '../../components/ProjectCreateForm/ProjectCreateForm';
import { PATH } from '../../constants/paths';
import { ContentText, TitleText } from '../../constants/text';
import { NewProjectForm } from '../../types/interfaces/interfaces';
import { ProjectItem } from '../../types/interfaces/project';
import { Roles } from '../../constants/constants';
import { TypeForm } from '../../constants/variables';

export const ProjectDetailPage: FC<{ setError: (error: string) => void }> = ({
  setError,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const activeProjectID = useReactiveVar(ACTIVE_PROJECT_ID);
  const { loading, data } = useQuery<{ project: ProjectItem }>(GET_PROJECT, {
    variables: {
      id: activeProjectID,
    },
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
      setError(error.message);
    }
  }, [error]);

  const submitFormHandler = async (data: NewProjectForm): Promise<void> => {
    const project = {
      ...data,
      end_date: data.end_date ? data.end_date : new Date().toISOString(),
      team_size: +data.team_size,
      skillsIds: data.skillsIds.length
        ? data.skillsIds.map((skill) => skill.value)
        : [],
    };

    await updateProject({
      variables: {
        id: activeProjectID,
        project,
      },
    });
  };

  return (
    <FormContainer title={t(TitleText.projectDetails)}>
      <>
        {loading && t(ContentText.loading)}
        {data && (
          <ProjectCreateForm
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
