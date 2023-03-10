import React, { FC, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';

import { DELETE_CV, GET_CVS, UPDATE_CV } from 'queries/cvs';
import { dropDownOptions } from 'constants/constants';
import { CvItem, TableCvItem } from 'interfaces/cvs';
import { PATH } from 'constants/paths';
import { TablePageContainer } from 'myComponents/TablePageContainer/TablePageContainer';
import { MainPagesInfo } from 'constants/mainPagesInfo';
import { ACTIVE_CV_ID } from 'apollo/state';
import { LSItems } from 'constants/variables';
import { openNotification } from 'uiComponents/Notification/Notification';

export const CVs: FC<{}> = () => {
  const navigate = useNavigate();
  const {
    loading,
    data,
    error: getCvsError,
  } = useQuery<{ cvs: CvItem[] }>(GET_CVS);
  const [cvs, setCVs] = useState<TableCvItem[] | null>(null);
  const [removeCv, { error }] = useMutation(DELETE_CV);
  const [updateCv, { error: updateCvError }] = useMutation(UPDATE_CV);

  useEffect(() => {
    if (data) {
      const TableCvItems: TableCvItem[] = data.cvs.map((cv) => ({
        id: cv.id,
        is_template: cv.is_template,
        name: cv.name,
        description: cv.description,
        email: cv.user?.email ?? '',
        userId: cv.user?.id ?? '',
      }));

      setCVs(TableCvItems);
    }
  }, [data]);

  useEffect(() => {
    if (getCvsError) {
      openNotification(getCvsError.message);
    }
  }, [getCvsError]);

  useEffect(() => {
    if (error) {
      openNotification(error.message);
    }
  }, [error]);

  useEffect(() => {
    if (updateCvError) {
      openNotification(updateCvError.message);
    }
  }, [updateCvError]);

  const dropDownHandler = async (label: string, id: string): Promise<void> => {
    if (label === dropDownOptions.cv.label) {
      localStorage.setItem(LSItems.activeCV, id);
      ACTIVE_CV_ID(id);
      navigate(`${PATH.cvs}/${id}`);
    }

    if (label === dropDownOptions.removeCV.label) {
      await deleteCv(id);
    }
  };

  const toggleTemplateCv = async (
    id: string,
    error?: string
  ): Promise<void> => {
    const updatedCv = findCvById(id);
    const changedCv = {
      name: updatedCv?.name,
      userId: updatedCv?.user?.id,
      description: updatedCv?.description,
      skills: updatedCv?.skills.map((skill) => ({
        skill_name: skill.skill_name,
        mastery: skill.mastery,
      })),
      languages: updatedCv?.languages.map((language) => ({
        language_name: language.language_name,
        proficiency: language.proficiency,
      })),
      projectsIds: updatedCv?.projects.map((project) => project.id),
      is_template: !updatedCv?.is_template,
    };

    if (error) {
      openNotification(error);
      return;
    }

    await updateCv({
      variables: {
        id,
        cv: changedCv,
      },
    });
  };

  const findCvById = (id: string): CvItem | undefined => {
    return data?.cvs.find((cv) => cv.id === id);
  };

  const deleteCv = async (id: string): Promise<void> => {
    await removeCv({
      variables: {
        id,
      },
      update(cache) {
        const cvsData = cache
          .readQuery<{ cvs: CvItem[] }>({
            query: GET_CVS,
          })
          ?.cvs.filter((cv) => cv.id !== id);

        if (cvsData) {
          cache.writeQuery({
            query: GET_CVS,
            data: {
              cvs: [...cvsData],
            },
          });
        }
      },
    });
  };

  return (
    <TablePageContainer
      mainPagesInfo={MainPagesInfo.cvsPage}
      tableItems={cvs}
      loading={loading}
      dropDownHandler={dropDownHandler}
      toggleTemplateCv={toggleTemplateCv}
    />
  );
};
