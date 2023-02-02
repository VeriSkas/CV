import React, { FC, ReactNode, useState } from 'react';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { TypeForm } from '../../constants/constants';
import {
  LanguageItem,
  LanguageItemInDB,
  SkillItem,
  SkillItemInDB,
} from '../../interfaces/cvs';
import { Inputs } from '../../interfaces/interfaces';
import { CvFormProps } from '../../interfaces/propsInterfaces';
import { makeCvInputsList } from '../../utils/formCreator';
import { ListCreator } from '../ListCreator/ListCreator';
import { Button } from '../UI/Button/Button';
import { Input } from '../UI/Input/Input';
import classes from './CvForm.module.scss';

export const CvForm: FC<CvFormProps> = ({
  cv,
  submitBtnText,
  onSubmitForm,
  type,
}) => {
  const [skills, setSkills] = useState<SkillItemInDB[]>([]);
  const [languages, setLanguages] = useState<LanguageItemInDB[]>([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    mode: 'all',
  });

  const submitForm = (data: Inputs): void => {
    onSubmitForm(data, skills, languages, cv?.id ?? '');

    if (!cv) {
      reset();
    }
  };

  const changedListHandler = (
    data: SkillItem[] | LanguageItem[],
    type: string
  ): void => {
    if (type === 'Skills') {
      const modifiedData: SkillItemInDB[] = data.map((skill) => ({
        skill_name: skill.name,
        mastery: '',
      }));

      setSkills(modifiedData);
    } else if (type === 'Languages') {
      const modifiedData: LanguageItemInDB[] = data.map((language) => ({
        language_name: language.name,
        proficiency: '',
      }));

      setLanguages(modifiedData);
    }
  };

  const renderInputs = (): ReactNode => {
    const inputs = makeCvInputsList(type, cv);

    return inputs?.map((input) => {
      return (
        <Input
          key={input.label}
          type={input.type}
          labelName={input.labelName}
          label={input.label}
          defaultValue={input.defaultValue}
          placeholder={input.label}
          validation={input.validation}
          readonly={input.readonly}
          register={register}
          error={errors[input.label]?.message}
        />
      );
    });
  };

  return (
    <div className={classes.CvForm}>
      <form onSubmit={handleSubmit(submitForm)}>
        {renderInputs()}
        <ListCreator
          data={cv?.skills ?? []}
          title="Skills"
          disabled={type !== TypeForm.cvUser}
          changedData={(data) => {
            changedListHandler(data, 'Skills');
          }}
        />
        <ListCreator
          data={cv?.languages ?? []}
          title="Languages"
          disabled={type !== TypeForm.cvUser}
          changedData={(data) => {
            changedListHandler(data, 'Languages');
          }}
        />
        <div className={classes.FormBtns}>
          {type === TypeForm.cvUser && (
            <Button disabled={!isValid}>
              {submitBtnText ?? 'Save changes'}
            </Button>
          )}
          <Link to={'/cvs'}>
            <Button type="transparent">{'Return'}</Button>
          </Link>
        </div>
      </form>
    </div>
  );
};
