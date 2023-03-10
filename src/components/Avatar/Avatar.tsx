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
import { PhotoTypes, Sizes } from '../../constants/constants';
import { AvatarValue, UserInfo } from '../../types/interfaces/user';
import { InputType } from '../../constants/variables';
import { openNotification } from '../UI/Notification/Notification';
import { AvatarProps } from '../../types/interfaces/propsInterfaces';
import { useDrag } from '../../hooks/useDrag';
import '../../i18n/i18n';
import classes from './Avatar.module.scss';

export const Avatar: FC<AvatarProps> = ({ user, disabled }) => {
  const { t } = useTranslation();
  const [image, setImage] = useState<AvatarValue | null>(null);
  const { drag, dragStartHandler, dropHandler, dragLeaveHandler } = useDrag();
  const [removeAvatar, { error: deleteError }] = useMutation(DELETE_AVATAR);
  const [uploadAvatar, { error: uploadError }] = useMutation(UPLOAD_AVATAR);

  useEffect(() => {
    if (uploadError) {
      openNotification(uploadError.message);
    }

    if (deleteError) {
      openNotification(deleteError.message);
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
    if (event.target.files?.length) {
      addFile(event.target.files[0]);
    }
  };

  const addFile = (file: File): void => {
    const reader = new FileReader();

    if (file.size > Sizes.MAX_photoSize) {
      openNotification(
        t('ErrorMessages.avatarSize', { MAX_photoSize: Sizes.MAX_photoSize })
      );
    } else if (!Object.values(PhotoTypes).includes(file.type)) {
      openNotification(
        t('ErrorMessages.avatarType', {
          PhotoTypes: Object.keys(PhotoTypes).join(' '),
        })
      );
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

  const dropDownHandler = (event: DragEvent<Element>): void => {
    dropHandler(event);

    if (event.dataTransfer && !disabled) {
      addFile(event.dataTransfer.files[0]);
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
              title={t('TooltipText.deleteAvatar')}
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
        onDrop={dropDownHandler}
      >
        {!drag && (
          <>
            {avatarRender()}
            <label
              className={classes.InputFile}
              title={!disabled ? t('TooltipText.addAvatar') : ''}
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
