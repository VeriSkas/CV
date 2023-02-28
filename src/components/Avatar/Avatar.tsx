import React, {
  ChangeEvent,
  DragEvent,
  FC,
  ReactNode,
  useEffect,
  useState,
} from 'react';

import { useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { IconContext } from 'react-icons';
import { RiDeleteBin6Line } from 'react-icons/ri';

import {
  DELETE_AVATAR,
  GET_USER,
  UPLOAD_AVATAR,
} from '../../apollo/queries/users';
import { MAX_photoSize, PhotoTypes } from '../../constants/constants';
import { ErrorMessages, TooltipText } from '../../constants/text';
import { AvatarValue, UserInfo } from '../../types/interfaces/user';
import classes from './Avatar.module.scss';
import { InputType } from '../../constants/variables';

export const Avatar: FC<{
  setError: (message: string) => void,
  user?: UserInfo,
  disabled: boolean,
}> = ({ setError, user, disabled }) => {
  const { t } = useTranslation();
  const [image, setImage] = useState<AvatarValue | null>(null);
  const [drag, setDrag] = useState(false);
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
    if (event.target.files) {
      addFile(event.target.files[0]);
    }
  };

  const addFile = (file: File): void => {
    const reader = new FileReader();

    if (file.size > MAX_photoSize) {
      if (setError) {
        setError(t(ErrorMessages.avatarSize));
      }
    } else if (!Object.values(PhotoTypes).includes(file.type)) {
      if (setError) {
        setError(t(ErrorMessages.avatarType));
      }
    } else {
      reader.onloadend = () => {
        const image = {
          base64: reader.result?.toString() ?? '',
          size: +file.size,
          type: file.type,
        };
        setImage((prev) => ({ ...prev, ...image }));
      };
      reader.readAsDataURL(file);
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

  const dragStartHandler = (event: DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    setDrag(true);
  };

  const dragLeaveHandler = (event: DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    setDrag(false);
  };

  const dropHandler = (event: DragEvent): void => {
    event.preventDefault();

    if (event.dataTransfer) {
      addFile(event.dataTransfer.files[0]);
      setDrag(false);
    }
  };

  const avatarRender = (): ReactNode => {
    if (image?.base64 ?? user?.profile.avatar) {
      return (
        <>
          <img src={image?.base64 ?? user?.profile.avatar ?? ''} />
          {!disabled && (
            <div
              className={classes.BinIcon}
              title={t(TooltipText.deleteAvatar)}
              onClick={deleteAvatar}
            >
              <IconContext.Provider value={{ className: classes.Icon }}>
                <RiDeleteBin6Line />
              </IconContext.Provider>
            </div>
          )}
        </>
      );
    }

    return <span className={classes.Letter}>{user?.email[0] ?? ''}</span>;
  };

  return (
    <div className={classes.Avatar}>
      <div
        className={`${classes.UserLogo} ${drag ? classes.DropArea : ''}`}
        onDragStart={dragStartHandler}
        onDragLeave={dragLeaveHandler}
        onDragOver={dragStartHandler}
        onDrop={dropHandler}
      >
        {!drag && (
          <>
            {avatarRender()}
            <label
              className={classes.InputFile}
              title={!disabled ? t(TooltipText.addAvatar) : ''}
            >
              <input
                type={InputType.file}
                className={classes.InputFile_input}
                onChange={(event) => {
                  onChangeFileInput(event);
                }}
                disabled={disabled}
              />
            </label>
          </>
        )}
      </div>
    </div>
  );
};
