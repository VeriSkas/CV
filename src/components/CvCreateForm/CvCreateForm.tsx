import React, { FC, ReactNode, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { BtnType, ListCreatorType, TypeForm } from '../../constants/constants';
import { PATH } from '../../constants/paths';
import { BtnText } from '../../constants/text';
import {
  LanguageItem,
  LanguageItemInDB,
  SkillItem,
  SkillItemInDB,
} from '../../interfaces/cvs';
import { Inputs } from '../../interfaces/interfaces';
import { makeCvInputsList } from '../../utils/formCreator';
import { ListCreator } from '../ListCreator/ListCreator';
import { Button } from '../UI/Button/Button';
import { Input } from '../UI/Input/Input';

export const CvCreateForm: FC<{
  onSubmitForm: (
    data: Inputs,
    skills: SkillItemInDB[],
    languages: LanguageItemInDB[]
  ) => void,
}> = ({ onSubmitForm }) => {
  const { t } = useTranslation();
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

  const changedListHandler = (
    data: SkillItem[] | LanguageItem[],
    type: string
  ): void => {
    if (type === ListCreatorType.skills) {
      const modifiedData: SkillItemInDB[] = data.map((skill) => ({
        skill_name: skill.name,
        mastery: '',
      }));

      setSkills(modifiedData);
    } else if (type === ListCreatorType.languages) {
      const modifiedData: LanguageItemInDB[] = data.map((language) => ({
        language_name: language.name,
        proficiency: '',
      }));

      setLanguages(modifiedData);
    }
  };

  const submitForm = (data: Inputs): void => {
    onSubmitForm(data, skills, languages);
    reset();
  };

  const renderInputs = (): ReactNode => {
    const inputs = makeCvInputsList(TypeForm.createCV);

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
    <form onSubmit={handleSubmit(submitForm)}>
      {renderInputs()}
      <ListCreator
        data={[]}
        title={ListCreatorType.skills}
        disabled={false}
        changedData={(data) => {
          changedListHandler(data, ListCreatorType.skills);
        }}
      />
      <ListCreator
        data={[]}
        title={ListCreatorType.languages}
        disabled={false}
        changedData={(data) => {
          changedListHandler(data, ListCreatorType.languages);
        }}
      />
      <div>
        <Button disabled={!isValid}>{t(BtnText.saveChanges)}</Button>
        <Link to={PATH.cvs}>
          <Button type={BtnType.transparent}>{t(BtnText.return)}</Button>
        </Link>
      </div>
    </form>
  );
};
