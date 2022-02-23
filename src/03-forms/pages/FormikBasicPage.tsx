import React, { ReactNode } from 'react';
import { FormikErrors, FormikHelpers, FormikProps, useFormik } from 'formik';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikBasicPage = () => {
  const validate = ({ firstName, lastName, email }: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    // FirstName
    if (!firstName.trim()) {
      errors.firstName = 'Required';
    }
    if (firstName.length >= 15) {
      errors.firstName = 'Must be 15 characters or less';
    }

    // LastName
    if (!lastName.trim()) {
      errors.lastName = 'Required';
    }
    if (lastName.length >= 10) {
      errors.lastName = 'Must be 10 characters or less';
    }

    // Email
    if (!email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
  };

  const { errors, handleChange, values, handleSubmit, touched, handleBlur } =
    useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
      },
      onSubmit<Values>(values: Values): void | Promise<any> {
        console.log(values);
        return undefined;
      },
      validate,
    });

  return (
    <div>
      <h1>Formik Basic Tutorial</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          onBlur={handleBlur}
          type="text"
          name="firstName"
          onChange={handleChange}
          value={values.firstName}
        />
        {touched.firstName && errors.firstName && (
          <span> {errors.firstName} </span>
        )}

        <label htmlFor="lastName">Last Name</label>
        <input
          onBlur={handleBlur}
          type="text"
          name="lastName"
          onChange={handleChange}
          value={values.lastName}
        />
        {touched.lastName && errors.lastName && (
          <span> {errors.lastName} </span>
        )}

        <label htmlFor="email">Email Address</label>
        <input
          onBlur={handleBlur}
          type="email"
          name="email"
          onChange={handleChange}
          value={values.email}
        />
        {touched.email && errors.email && <span> {errors.email} </span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
