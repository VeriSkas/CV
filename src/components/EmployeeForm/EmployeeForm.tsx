import React, { ChangeEvent, FC, ReactNode, useState } from 'react';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { IconContext } from 'react-icons';
import { RiDeleteBin6Line } from 'react-icons/ri';

import {
  inputs,
  MAX_photoSize,
  TypeEmployeeForm,
} from '../../shared/constants';
import {
  Avatar,
  EmployeeFormProps,
  Inputs,
  UserInfo,
} from '../../shared/interfaces';
import { InputLabelNames } from '../../shared/text';
import { Button } from '../UI/Button/Button';
import { Input } from '../UI/Input/Input';
import classes from './EmployeeForm.module.scss';
import {
  DELETE_AVATAR,
  GET_USER,
  UPLOAD_AVATAR,
} from '../../apollo/queries/users';

export const EmployeeForm: FC<EmployeeFormProps> = ({
  user,
  submitBtnText,
  onSubmitForm,
  type,
}) => {
  const [image, setImage] = useState<Avatar | null>(null);
  const [removeAvatar] = useMutation(DELETE_AVATAR);
  const [uploadAvatar] = useMutation(UPLOAD_AVATAR);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    mode: 'all',
  });

  const submitForm = (data: Inputs): void => {
    onSubmitForm(data, user?.id ?? '');
    addAvatar();

    if (!user) {
      reset();
    }
  };

  const deleteAvatar = (): void => {
    setImage(null);

    void removeAvatar({
      variables: {
        id: user?.profile.id,
      },
      update(cache) {
        const data = cache.readQuery<{ user: UserInfo }>({
          query: GET_USER,
          variables: {
            id: user?.id,
          },
        });

        cache.writeQuery({
          query: GET_USER,
          variables: {
            id: user?.id,
          },
          data: {
            user: {
              ...data?.user,
              profile: {
                ...data?.user.profile,
                avatar: null,
                __typename: 'Profile',
              },
              __typename: 'User',
            },
          },
        });
      },
    });
  };

  const addAvatar = (): void => {
    if (image) {
      void uploadAvatar({
        variables: {
          id: user?.profile.id,
          avatar: image,
        },
        update(cache, { data: { uploadAvatar } }) {
          const data = cache.readQuery<{ user: UserInfo }>({
            query: GET_USER,
            variables: {
              id: user?.id,
            },
          });

          cache.writeQuery({
            query: GET_USER,
            variables: {
              id: user?.id,
            },
            data: {
              user: {
                ...data?.user,
                profile: {
                  ...data?.user.profile,
                  avatar: uploadAvatar,
                  __typename: 'Profile',
                },
                __typename: 'User',
              },
            },
          });
        },
      });
    }
  };

  const onChangeFileInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const reader = new FileReader();

    if (event.target.files) {
      if (event.target.files[0].size <= MAX_photoSize) {
        reader.onloadend = () => {
          const image = {
            base64: reader.result?.toString() ?? '',
            size: event.target.files ? +event.target.files[0].size : 0,
            type: event.target.files ? event.target.files[0].type : '',
          };
          setImage((prev) => ({ ...prev, ...image }));
        };

        reader.readAsDataURL(event.target.files[0]);
      } else {
        console.log('Photo size have to be less');
      }
    }
  };

  const renderInputs = (): ReactNode => {
    let profileInputs;

    if (type === TypeEmployeeForm.updateEmployee) {
      profileInputs = [
        { ...inputs.first_name, defaultValue: user?.profile.first_name ?? '' },
        { ...inputs.last_name, defaultValue: user?.profile.last_name ?? '' },
        { ...inputs.email2, defaultValue: user?.email ?? '' },
        { ...inputs.department, defaultValue: user?.department?.name ?? '' },
        { ...inputs.position, defaultValue: user?.position?.name ?? '' },
      ];
    } else if (type === TypeEmployeeForm.profileType) {
      profileInputs = [
        { ...inputs.first_name, defaultValue: user?.profile.first_name ?? '' },
        { ...inputs.last_name, defaultValue: user?.profile.last_name ?? '' },
        { ...inputs.email2, defaultValue: user?.email ?? '' },
        {
          ...inputs.department,
          readonly: true,
          defaultValue: user?.department?.name ?? '',
        },
        {
          ...inputs.position,
          readonly: true,
          defaultValue: user?.position?.name ?? '',
        },
      ];
    } else if (type === TypeEmployeeForm.createEmployee) {
      profileInputs = [
        { ...inputs.first_name },
        { ...inputs.last_name },
        { ...inputs.email, labelName: InputLabelNames.email },
        { ...inputs.password, labelName: InputLabelNames.password },
      ];
    }

    return profileInputs?.map((input) => {
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
    <div className={classes.EmployeeForm}>
      <form
        onSubmit={handleSubmit(submitForm)}
        className={classes.EmployeeForm_form}
      >
        {type !== TypeEmployeeForm.createEmployee && (
          <div className={classes.UserPhoto}>
            <div className={classes.UserLogo}>
              {image?.base64 ?? user?.profile.avatar ? (
                <>
                  <img src={image?.base64 ?? user?.profile.avatar ?? ''} />
                  <div
                    className={classes.BinIcon}
                    title="Delete avatar"
                    onClick={deleteAvatar}
                  >
                    <IconContext.Provider value={{ className: classes.Icon }}>
                      <RiDeleteBin6Line />
                    </IconContext.Provider>
                  </div>
                </>
              ) : (
                <span className={classes.Letter}>{user?.email[0] ?? ''}</span>
              )}
              <label className={classes.InputFile} title="Add new avatar">
                <input
                  type="file"
                  className={classes.InputFile_input}
                  onChange={(event) => {
                    onChangeFileInput(event);
                  }}
                />
              </label>
            </div>
          </div>
        )}
        {renderInputs()}
        <div className={classes.FormBtns}>
          <Button disabled={!isValid}>{submitBtnText ?? 'Save changes'}</Button>
          <Link to={'/employees'}>
            <Button type="transparent">{'Return'}</Button>
          </Link>
        </div>
      </form>
    </div>
  );
};
