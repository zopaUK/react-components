import React, { FC, ChangeEvent } from 'react';
import RadioField, { IRadioField } from '../../../molecules/RadioField/RadioField';
import { useFieldContext } from '../hooks';

interface IFormRadioFieldProps extends IRadioField {
  name: string;
  value: string;
}

const FormRadioField: FC<IFormRadioFieldProps> = ({ name, value, ...rest }) => {
  const { error, touched, onChange, onBlur } = useFieldContext(name);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <RadioField
      hasError={touched && !!error}
      onChange={handleChange}
      onBlur={onBlur}
      value={value}
      name={name}
      {...rest}
    />
  );
};

export default FormRadioField;
