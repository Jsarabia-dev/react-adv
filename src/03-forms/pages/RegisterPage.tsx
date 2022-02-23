import React, { ChangeEvent, FormEvent, useState } from 'react';

import '../styles/styles.css';
import { useForm } from '../hooks/useForm';

export const RegisterPage = () => {
  //
  const initialState = {
    name: '',
    email: '',
    password1: '',
    password2: '',
  };

  const {
    name,
    password1,
    password2,
    email,
    formData,
    isValidEmail,
    onChange,
    resetForm,
  } = useForm(initialState);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('[+] registerData: ', formData);
  };

  return (
    <div>
      <h1> RegisterPage </h1>

      <form noValidate onSubmit={onSubmit}>
        <input
          className={`${name.trim().length <= 0 && 'has-error'}`}
          name="name"
          type="text"
          value={name}
          placeholder="Name"
          onChange={onChange}
        />
        {name.trim().length <= 0 && <span>This field is mandatory</span>}

        <input
          className={`${!isValidEmail(email) && 'has-error'}`}
          name="email"
          type="email"
          value={email}
          placeholder="Email"
          onChange={onChange}
        />
        {!isValidEmail(email) && <span>This field is mandatory</span>}

        <input
          name="password1"
          type="password"
          value={password1}
          placeholder="Password"
          onChange={onChange}
        />
        {password1.trim().length <= 0 && <span>This field is mandatory</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && (
          <span>This field characters larger than 6</span>
        )}

        <input
          name="password2"
          type="password"
          value={password2}
          placeholder="Repeat password"
          onChange={onChange}
        />
        {password2.trim().length <= 0 && <span>This field is mandatory</span>}
        {password2.trim().length > 0 && password1 !== password2 && (
          <span>The passwords no match</span>
        )}

        <button type="submit"> Create </button>
        <button type="button" onClick={resetForm}>
          Reset Form
        </button>
      </form>
    </div>
  );
};
