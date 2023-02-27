import React, { FC, ReactNode } from 'react';

import { useFieldArray } from 'react-hook-form';
import { IconContext } from 'react-icons';
import { RxCross2 } from 'react-icons/rx';
import { FaPlus } from 'react-icons/fa';

import { InputTypes } from '../../constants/text';
import { FieldArrayProps } from '../../types/interfaces/propsInterfaces';
import classes from './FieldArray.module.scss';
import { MySelect } from '../UI/MySelect/MySelect';

export const FieldArray: FC<FieldArrayProps> = ({
  register,
  control,
  label,
  labelName,
  radioInputs,
  disabled,
  required,
  setValue,
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: label,
  });
  const { inputValueName, name, options } = radioInputs;

  const radioInputsRender = (index: number): ReactNode => {
    return options.map((option: { value: string, label: string }) => {
      return (
        <React.Fragment key={`${option.value} ${index}`}>
          <input
            {...register(`${label}.${index}.${name}`)}
            id={`${option.value} ${index}`}
            type={InputTypes.radio}
            value={option.value}
            disabled={disabled}
          />
          <label htmlFor={`${option.value} ${index}`}>{option.label}</label>
        </React.Fragment>
      );
    });
  };

  return (
    <div className={classes.FieldArray}>
      {labelName && <h4>{labelName}</h4>}
      <ul>
        {fields.map((item, index) => {
          return (
            <li key={item.id}>
              <div className={classes.Input}>
                <MySelect
                  control={control}
                  setFormValue={setValue}
                  label={label}
                  disabled={disabled ?? false}
                  labelName={''}
                  multi={false}
                  controlName={`${label}.${index}.${inputValueName}`}
                  required={required}
                />
                {!disabled && (
                  <div
                    className={classes.Icon}
                    onClick={() => {
                      remove(index);
                    }}
                  >
                    <IconContext.Provider value={{ className: classes.Remove }}>
                      <RxCross2 />
                    </IconContext.Provider>
                  </div>
                )}
              </div>

              <div className={classes.RadioInputs}>
                {radioInputsRender(index)}
              </div>
            </li>
          );
        })}
        {!disabled && (
          <div className={classes.AddField}>
            <div
              className={classes.AddBtn}
              onClick={() => {
                append({ [name]: options[0].value || '' });
              }}
            >
              <div className={classes.Icon}>
                <IconContext.Provider value={{ className: classes.Add }}>
                  <FaPlus />
                </IconContext.Provider>
              </div>
              <span className={classes.AddFieldText}>Add new...</span>
            </div>
          </div>
        )}
      </ul>
    </div>
  );
};
