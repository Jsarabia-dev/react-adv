import React from 'react';

import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { TextInput, SelectInput, CheckBoxInput } from '../components/inputs';

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          jobType: '',
          terms: false,
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 char or less')
            .required('First name is required'),
          lastName: Yup.string()
            .max(15, 'Must be 15 char or less')
            .required('Last name is required'),
          email: Yup.string()
            .email('Email format not valid')
            .required('Email is required'),
          terms: Yup.boolean().oneOf(
            [true],
            'Should accept the terms and conditions'
          ),
          jobType: Yup.string()
            .notOneOf(['it-junior'], 'This option is not allowed')
            .required('Job type is required'),
        })}
      >
        {(formik) => (
          <Form>
            <TextInput label="First Name" name="firstName" />
            <TextInput label="Last Name" name="lastName" />
            <TextInput label="Email" name="email" type="email" />
            <SelectInput name="jobType" as="select" label="Job Type">
              <option value="">Pick something...</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-junior">IT Junior</option>
            </SelectInput>
            <CheckBoxInput label="Terms & Conditions" name="terms" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
