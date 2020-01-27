import { useState, useCallback, useEffect, useMemo } from 'react';

type TValue = any;
export type TValues = Record<string, TValue>;
export type TErrors = Record<string, string | undefined>;

export interface IUseFormProps {
  initialValues: TValues;
  onSubmit: (values: TValues) => void;
  validate?: (values: TValues) => TErrors | Promise<TErrors>;
}

export interface IFieldProps {
  error: string | undefined;
  touched: boolean;
  value: TValue;
  onChange: (eventData: unknown) => void;
  onBlur: (eventData: unknown) => void;
}

export interface IUseFormValues {
  getFieldProps: (name: string) => IFieldProps;
  invalid: boolean;
  handleSubmit: (values: TValues) => void;
}

export const useForm = ({ initialValues, validate, onSubmit }: IUseFormProps): IUseFormValues => {
  const [values, updateValues] = useState(initialValues);
  const [errors, updateErrors] = useState<Record<string, string | undefined>>({});
  const [touched, updateTouched] = useState<Record<string, boolean>>({});

  const runValidation = async (formValues: typeof initialValues) => {
    if (validate) {
      const errors = await validate(formValues);
      updateErrors(errors);
    }
  };

  useEffect(() => {
    runValidation(values);
  }, []);

  const invalid = useMemo(() => !!Object.keys(errors).length, [errors]);

  const getFieldProps = useCallback(
    (name: string) => ({
      error: errors[name],
      touched: !!touched[name],
      value: values[name],
      onChange(value: unknown) {
        const newValues = { ...values, [name]: value };
        updateValues(newValues);
        runValidation(newValues);
      },
      onBlur() {
        updateTouched({ ...touched, [name]: true });
      },
    }),
    [errors, runValidation, touched, values],
  );

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      updateTouched(
        Object.keys(initialValues).reduce(
          (acc, key) => ({
            ...acc,
            [key]: true,
          }),
          {},
        ),
      );
      if (!invalid) {
        onSubmit(values);
      }
    },
    [invalid, onSubmit, values],
  );

  return {
    getFieldProps,
    invalid,
    handleSubmit,
  };
};