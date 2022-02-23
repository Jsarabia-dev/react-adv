import React from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';

export const FormikYupPage = () => {
  const { errors, handleSubmit, touched, getFieldProps } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit<Values>(values: Values): void | Promise<any> {
      console.log(values);
      return undefined;
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 char or less')
        .required('First name is required'),
      lastName: Yup.string()
        .max(15, 'Must be 15 char or less')
        .required('Last name is required'),
      email: Yup.string()
        .email('Email format not valid')
        .required('Email is required'),
    }),
  });

  return (
    <div>
      <h1>Formik Yup Tutorial</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" {...getFieldProps('firstName')} />
        {touched.firstName && errors.firstName && (
          <span> {errors.firstName} </span>
        )}

        <label htmlFor="lastName">Last Name</label>
        <input type="text" {...getFieldProps('lastName')} />
        {touched.lastName && errors.lastName && (
          <span> {errors.lastName} </span>
        )}

        <label htmlFor="email">Email Address</label>
        <input type="text" {...getFieldProps('email')} />
        {touched.email && errors.email && <span> {errors.email} </span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
