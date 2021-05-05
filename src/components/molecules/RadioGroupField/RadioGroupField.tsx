import React, { useState } from 'react';
import styled from 'styled-components';
import FlexRow, { FlexRowProps } from '../../layout/FlexRow/FlexRow';
import FlexCol, { FlexColProps } from '../../layout/FlexCol/FlexCol';
import RadioField from './RadioField/RadioField';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import Fieldset from '../../atoms/Fieldset/Fieldset';
import Legend from '../../atoms/Legend/Legend';

const RadioWrapper = styled.div`
  padding: 4px 0;
`;

type RadioGroupFieldItem = {
  value: string;
  label?: string | React.ReactNode;
  defaultChecked?: boolean;
  disabled?: boolean;
};

export type RadioGroupFieldProps = {
  label?: string;
  items: RadioGroupFieldItem[];
  onChange: (value: string) => void;
  onBlur?: () => void;
  disabled?: boolean;
  value?: string;
  isValid?: boolean;
  errorMessage?: string;
  className?: string;
  flexColProps?: FlexColProps;
  flexRowProps?: FlexRowProps;
  hideControl?: boolean;
  name?: string;
  'data-automation'?: string;
};

const RadioGroupField = ({
  items,
  label,
  name,
  onChange,
  onBlur,
  value,
  disabled,
  isValid = false,
  errorMessage,
  className,
  flexRowProps = {},
  flexColProps = {},
  hideControl,
  'data-automation': dataAutomation,
}: RadioGroupFieldProps) => {
  const { value: defaultValue } = items.find(({ defaultChecked }) => defaultChecked) || {};

  const [innerValue, setInnerValue] = useState(defaultValue);

  const isControlled = !!value;

  const handleChange = (value: string) => () => {
    if (!disabled) {
      if (!isControlled) {
        setInnerValue(value);
      }
      onChange(value);
    }
  };

  return (
    <Fieldset className={className}>
      {label && <Legend>{label}</Legend>}
      <FlexRow {...flexRowProps}>
        {items.map((item, index) => {
          const checked = isControlled ? value === item.value : innerValue === item.value;
          return (
            <FlexCol {...flexColProps} key={item.value}>
              <RadioWrapper>
                <RadioField
                  disabled={disabled}
                  value={item.value}
                  onChange={handleChange(item.value)}
                  onBlur={onBlur}
                  label={item.label}
                  checked={checked}
                  isValid={checked && isValid}
                  hideControl={hideControl}
                  name={name}
                  data-automation={dataAutomation ? `${dataAutomation}-${index}` : undefined}
                  groupLabel={label}
                />
              </RadioWrapper>
            </FlexCol>
          );
        })}
      </FlexRow>
      {errorMessage && <ErrorMessage className="mt-1">{errorMessage}</ErrorMessage>}
    </Fieldset>
  );
};

export default RadioGroupField;
