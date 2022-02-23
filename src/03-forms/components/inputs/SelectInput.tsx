import React from 'react';
import { ErrorMessage, useField } from 'formik';

export interface Props {
  label: string;
  name: string;
  placeholder?: string;

  [x: string]: any; // Allow any additional attributes
}

export const SelectInput = ({ label, ...rest }: Props) => {
  const [field] = useField(rest);

  return (
    <>
      <label htmlFor={rest.id || rest.name}>{label}</label>
      <select {...field} {...rest} />
      <ErrorMessage name={rest.name} component="span" />
      <br />
    </>
  );
};
