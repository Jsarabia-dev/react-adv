import React from 'react';
import { ErrorMessage, useField } from 'formik';

export interface Props {
  label: string;
  name: string;

  [x: string]: any;
}

export const CheckBoxInput = ({ label, ...rest }: Props) => {
  const [field] = useField({ ...rest, type: 'checkbox' });

  return (
    <>
      <label>
        <input className="text-input" type="checkbox" {...field} {...rest} />
        {label}
      </label>
      <ErrorMessage name={rest.name} component="span" />
      <br />
    </>
  );
};
