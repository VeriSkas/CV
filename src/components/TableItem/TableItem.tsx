import React, { FC, ReactNode, useState } from 'react';

import { SlOptionsVertical } from 'react-icons/sl';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { useReactiveVar } from '@apollo/client';

import { UsedInTableObjectsType } from '../../types/interfaces/interfaces';
import { DropDown } from '../UI/DropDown/DropDown';
import classes from './TableItem.module.scss';
import { TableCvItem } from '../../types/interfaces/cvs';
import { TableItemProps } from '../../types/interfaces/propsInterfaces';
import { hiddenObjectKeysInTable } from '../../constants/variables';
import { MAIN_ROLE } from '../../apollo/state';
import { Roles } from '../../constants/constants';

export const TableItem: FC<TableItemProps> = ({
  item,
  dropDownOptions,
  dropDownHandler,
  toggleTemplateCv,
  settingsView,
  avatar,
}) => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const role = useReactiveVar(MAIN_ROLE);

  const toggleDropDown = (): void => {
    setIsOpenDropDown((prev) => !prev);
  };

  const onClickDropDown = (label: string): void => {
    dropDownHandler(label, item.id);
  };

  const renderItemRow = (): ReactNode | string => {
    const { is_template } = hiddenObjectKeysInTable;

    return Object.keys(item).map((key: string) => {
      if (key === is_template) {
        const cv = item as TableCvItem;

        return (
          <div className={classes.Item} key={key} onClick={toggleTemplate}>
            {cv[key as keyof TableCvItem] ? (
              <IconContext.Provider
                value={{
                  className: `${classes.IconChecked}`,
                }}
              >
                <MdCheckBox />
              </IconContext.Provider>
            ) : (
              <IconContext.Provider
                value={{
                  className: `${classes.IconUnchecked}`,
                }}
              >
                <MdCheckBoxOutlineBlank />
              </IconContext.Provider>
            )}
          </div>
        );
      }

      if (Object.prototype.hasOwnProperty.call(hiddenObjectKeysInTable, key)) {
        return '';
      }

      return (
        <div className={classes.Item} key={key}>
          {item[key as keyof UsedInTableObjectsType]}
        </div>
      );
    });
  };

  const toggleTemplate = (): void => {
    if (toggleTemplateCv) {
      toggleTemplateCv(item.id)
    }
  }

  return (
    <div className={classes.TableItem}>
      {avatar && <div className={classes.Item}>
        {'avatar' in item && item.avatar && (
          <img src={item.avatar} className={classes.UserAvatar} />
        )}
        {'avatar' in item && !item.avatar && (
          <div className={classes.UserLogo}>{item.email[0] || ' '}</div>
        )}
      </div>}
      {renderItemRow()}
      {(role === Roles.admin.value || settingsView) && <div className={classes.Item}>
        <div className={classes.Options} onClick={toggleDropDown}>
          <SlOptionsVertical />
          {isOpenDropDown && (
            <DropDown
              options={dropDownOptions}
              onClick={(label: string) => {
                onClickDropDown(label);
              }}
            />
          )}
        </div>
      </div>}
    </div>
  );
};
