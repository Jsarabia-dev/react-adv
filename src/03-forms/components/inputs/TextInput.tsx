import React from 'react';
import { ErrorMessage, useField } from 'formik';

export interface Props {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  [x: string]: any;
}

export const TextInput = ({ label, ...rest }: Props) => {
  const [field, meta] = useField(rest);

  return (
    <>
      <label htmlFor={rest.id || rest.name}>{label}</label>
      <input className="text-input" {...field} {...rest} />

      {/*Form 1*/}
      <ErrorMessage name={rest.name} component="span" />

      {/*Form 2*/}
      {meta.touched && meta.error && (
        <span className="error-message">{meta.error}</span>
      )}
      <br />
    </>
  );
};
