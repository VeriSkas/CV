import React, { FC, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';

import { DELETE_CV, GET_CVS, UPDATE_CV } from '../../apollo/queries/cvs';
import { dropDownOptions } from '../../constants/constants';
import { CvItem, TableCvItem } from '../../types/interfaces/cvs';
import { PATH } from '../../constants/paths';
import { TablePageContainer } from '../../components/TablePageContainer/TablePageContainer';
import { MainPagesInfo } from '../../constants/mainPagesInfo';
import { ACTIVE_CV_ID } from '../../apollo/state';
import { LSItems } from '../../constants/variables';

export const CVs: FC<{ setError: (error: string) => void }> = ({
  setError,
}) => {
  const navigate = useNavigate();
  const { loading, data } = useQuery<{ cvs: CvItem[] }>(GET_CVS);
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
      }));

      setCVs(TableCvItems);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      setError(error.message);
    }
  }, [error]);

  useEffect(() => {
    if (updateCvError) {
      setError(updateCvError.message);
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

  const toggleTemplateCv = async (id: string): Promise<void> => {
    const updatedCv = findCvById(id);
    const changedCv = {
      name: updatedCv?.name,
      userId: updatedCv?.user?.id,
      description: updatedCv?.description,
      skills: updatedCv?.skills,
      languages: updatedCv?.languages,
      projectsIds: updatedCv?.projects.map((project) => project.id),
      is_template: !updatedCv?.is_template,
    };

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
