import React, { FC, ReactNode, useState } from 'react';

import { SlOptionsVertical } from 'react-icons/sl';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import { IconContext } from 'react-icons';

import { DropDownOption } from '../../shared/interfaces';
import { DropDown } from '../UI/DropDown/DropDown';
import classes from './TableItem.module.scss';

export const TableItem: FC<{
  item: any,
  dropDownOptions: DropDownOption[],
  dropDownHandler: (label: string, id: string) => void,
}> = ({ item, dropDownOptions, dropDownHandler }) => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);

  const toggleDropDown = (): void => {
    setIsOpenDropDown((prev) => !prev);
  };

  const onCloseDropDown = (label: string): void => {
    dropDownHandler(label, item.id);
  };

  const renderItemRow = (): ReactNode | string => {
    return Object.keys(item).map((key) => {
      if (key === 'avatar' || key === 'id' || key === '__typename') {
        return '';
      }

      if (key === 'is_template') {
        return (
          <div className={classes.Item} key={key}>
            {item[key] ? (
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

      return (
        <div className={classes.Item} key={key}>
          {item[key]}
        </div>
      );
    });
  };

  return (
    <div className={classes.TableItem}>
      <div className={classes.Item}>
        {'avatar' in item && item.avatar && (
          <img src={item.avatar} className={classes.UserAvatar} />
        )}
        {'avatar' in item && !item.avatar && (
          <div className={classes.UserLogo}>{item.email[0] || ' '}</div>
        )}
      </div>
      {renderItemRow()}
      <div className={classes.Item}>
        <div className={classes.Options} onClick={toggleDropDown}>
          <SlOptionsVertical />
          {isOpenDropDown && (
            <DropDown
              options={dropDownOptions}
              onClose={(label: string) => {
                onCloseDropDown(label);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
