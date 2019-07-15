import React from 'react';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import HelpText from '../../atoms/HelpText/HelpText';
import InputLabel from '../../atoms/InputLabel/InputLabel';
import InputText from '../../atoms/InputText/InputText';
import SizedContainer from '../../layout/SizedContainer/SizedContainer';
import { IField } from '../../types';
import styled from 'styled-components';
import { colors } from '../../..';

export interface ITextFieldProps extends IField {
  prefix?: string;
}

const TextField = (props: IField) => {
  const { label, errorMessage, isValid, inputProps, size, helpText, prefix, ...rest } = props;
  const { name } = inputProps;
  if (!name) {
    throw Error('Name must be set in inputProps. Check the docs.');
  }
  if (prefix && prefix.length > 1) {
    throw Error('Prefixes can only have one character');
  }

  const input = (
    <InputText
      id={`text-id-${name}`}
      type="text"
      hasError={!!errorMessage}
      isValid={isValid}
      aria-label={label ? undefined : name}
      {...inputProps}
    />
  );
  return (
    <SizedContainer size={size} {...rest}>
      {label && <InputLabel htmlFor={`text-id-${name}`}>{label}</InputLabel>}
      {helpText && <HelpText>{helpText}</HelpText>}
      {prefix ? <Prefix prefix={prefix}>{input}</Prefix> : input}
      {errorMessage && <ErrorMessage data-automation={`ZA.error-${name}`}>{errorMessage}</ErrorMessage>}
    </SizedContainer>
  );
};

interface IPrefixProps extends HTMLSpanElement {
  prefix: string;
}

const Prefix = styled.span<IPrefixProps>`
  position: relative;
  
  &::before {
    content: '${({ prefix }: IPrefixProps) => prefix}';
    position: absolute;
    top: -4px;
    left: 10px;
    font-size: 20px;
    color: ${colors.neutral.neutral400};
  }
  
  input {
    padding-left: 24px;
  }
`;

export default TextField;
