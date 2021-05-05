import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { colors, typography } from '../../../../constants';
import { getBorderColorByStatus } from '../../../../helpers/utils';
import InputLabel from '../../../atoms/InputLabel/InputLabel';
import SizedContainer from '../../../layout/SizedContainer/SizedContainer';
import { FieldProps, InputStatus, InputProps, GroupingControlsProps } from '../../../types';
import deprecate from 'util-deprecate';

const getCheckedColor = ({ disabled, isValid }: Pick<InputProps, 'disabled' | 'isValid'>) => {
  if (isValid) {
    return colors.success;
  }
  if (disabled) {
    return colors.grey;
  }
  return colors.brand;
};

const zoomIn = keyframes`
  from {
    transform: scale(1.9);
  }
  to {
    transform: scale(1);
  }
`;

const FieldContainer = styled(SizedContainer)`
  position: relative;
  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Label = styled(InputLabel)<InputStatus>`
  display: flex;
  line-height: 1.4;
  font-weight: ${typography.weights.regular};
  font-size: ${typography.sizes.text.body};
  color: ${colors.greyDarkest};
  padding: 14px 16px;
  border: 1px solid ${getBorderColorByStatus};
  transition-property: border, box-shadow;
  transition: 0.2s ease-in-out;
  border-radius: 8px;
  position: relative;
  margin-bottom: 0;
  text-align: left;
  &:before {
    content: '';
    flex-shrink: 0;
    background-color: ${colors.white};
    border-radius: 50%;
    height: 20px;
    width: 20px;
    display: inline-block;
    margin-right: 8px;
    border: 1px ${getBorderColorByStatus} solid;
    box-shadow: 0 0 4px 0 transparent;
    transition-property: border, box-shadow;
    transition: 0.2s ease-in-out;
  }
  &:after {
    content: '';
    position: absolute;
    border-radius: 50%;
    display: inline-block;
    transition-property: background-color;
    transition: 0.2s ease-in-out;
    left: 21px;
    top: 19px;
  }
  &:hover {
    cursor: pointer;
  }
`;

const Input = styled.input<InputStatus & GroupingControlsProps>`
  width: 1px;
  height: 1px;
  opacity: 0;
  z-index: -1;
  position: absolute;

  &:hover:not(:disabled) + label,
  &:focus + label {
    border-color: ${colors.brand};
    box-shadow: 0 0 4px 0 ${colors.brand};
    &:before {
      border-color: ${colors.brand};
      box-shadow: 0 0 4px 0 ${colors.brand};
    }
  }
  &:hover:checked:not(:disabled) + label,
  &:focus:checked + label {
    &:after {
      background-color: ${colors.brand};
    }
  }
  &:disabled + label {
    cursor: not-allowed;
    color: ${colors.grey};
    background-color: ${colors.greyLightest};
  }
  &:disabled:not(:checked) + label {
    border-color: ${colors.greyLight};
    &:before {
      border-color: ${colors.greyLight};
    }
  }
  &:checked + label {
    border-color: ${getCheckedColor};
    background-color: ${colors.brandLight};
    box-shadow: none;
    &:before {
      border-color: ${getCheckedColor};
      box-shadow: none;
    }
    &:after {
      background-color: ${getCheckedColor};
      height: 10px;
      width: 10px;
      animation: ${zoomIn} 200ms ease-in-out;
    }
  }
  ${({ hideControl }) =>
    hideControl &&
    css`
      & + label {
        &:before,
        &:after {
          display: none;
        }
      }
    `}
`;

export interface RadioField extends FieldProps, InputProps, GroupingControlsProps {
  groupLabel?: string;
}

const RadioField = ({
  groupLabel = '',
  label,
  hasError,
  errorMessage,
  isValid,
  value,
  inputSize,
  className,
  hideControl,
  ...rest
}: RadioField) => {
  if (!value) throw Error('Value must be set in inputProps. Check the docs.');
  const id = `radio-id-${groupLabel.replace(/\s/g, '-')}-${value}`;

  return (
    <FieldContainer className={className} size={inputSize}>
      <Input
        id={id}
        hasError={hasError}
        isValid={isValid}
        value={value}
        hideControl={hideControl}
        type="radio"
        {...rest}
      />
      <Label htmlFor={id} hasError={hasError} isValid={isValid}>
        {label}
      </Label>
    </FieldContainer>
  );
};

/**
 * @deprecated *RadioField* it's being deprecated and will be removed on the next release. Use *RadioGroupField* component instead.
 */
export default deprecate(
  RadioField,
  "<RadioField /> it's being deprecated and will be removed on the next release. Use <RadioGroupField /> component instead.",
);
