import React, { ChangeEvent, FC, useEffect, useState } from 'react';

import { useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { IconContext } from 'react-icons';
import { RiDeleteBin6Line } from 'react-icons/ri';

import {
  DELETE_AVATAR,
  GET_USER,
  UPLOAD_AVATAR,
} from '../../apollo/queries/users';
import { InputType, MAX_photoSize } from '../../constants/constants';
import { ErrorMessages, TooltipText } from '../../constants/text';
import { AvatarValue, UserInfo } from '../../interfaces/user';
import classes from './Avatar.module.scss';

export const Avatar: FC<{
  setError: (message: string) => void,
  user?: UserInfo,
}> = ({ setError, user }) => {
  const { t } = useTranslation();
  const [image, setImage] = useState<AvatarValue | null>(null);
  const [removeAvatar, { error: deleteError }] = useMutation(DELETE_AVATAR);
  const [uploadAvatar, { error: uploadError }] = useMutation(UPLOAD_AVATAR);

  useEffect(() => {
    if (uploadError && setError) {
      setError(uploadError.message);
    }

    if (deleteError && setError) {
      setError(deleteError.message);
    }
  }, [deleteError, uploadError]);

  useEffect(() => {
    if (image) {
      addAvatar();
    }
  }, [image]);

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
        if (setError) {
          setError(t(ErrorMessages.avatarSize));
        }
      }
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

  return (
    <div className={classes.Avatar}>
      <div className={classes.UserLogo}>
        {image?.base64 ?? user?.profile.avatar ? (
          <>
            <img src={image?.base64 ?? user?.profile.avatar ?? ''} />
            <div
              className={classes.BinIcon}
              title={t(TooltipText.deleteAvatar)}
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
        <label className={classes.InputFile} title={t(TooltipText.addAvatar)}>
          <input
            type={InputType.file}
            className={classes.InputFile_input}
            onChange={(event) => {
              onChangeFileInput(event);
            }}
          />
        </label>
      </div>
    </div>
  );
};
