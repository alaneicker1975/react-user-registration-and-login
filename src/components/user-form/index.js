import React from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { useFormik } from 'formik';

import './user-form.scss';

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const UserForm = props => {
  const { onValidationSuccess, formError, title } = props;

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: values => {
      onValidationSuccess(values);
    },
  });

  return (
    <form className="user-form" onSubmit={handleSubmit} noValidate autoComplete="off">
      {title ? <h1 className="margin-bottom-16 text-weight-bold text-size-24 text-align-center">{title}</h1> : null}
      {formError ? <div className="text-color-red margin-bottom-16">{formError}</div> : null}
      <div className="field">
        <label className="field__label field__label--center" htmlFor="username">Username</label>
        <input
          id="username"
          className="field__input"
          name="username"
          type="text"
          onChange={handleChange}
          values={values.username}
        />
        {errors.username && touched.username 
          ? <div className="field__error field__error--center">{errors.username}</div> 
          : null}
      </div>
      <div className="margin-top-8"></div>
      <div className="field">
        <label className="field__label field__label--center" htmlFor="password">Password</label>
        <input
          id="password"
          className="field__input"
          name="password"
          type="password"
          onChange={handleChange}
          values={values.password}
        />
        {errors.password && touched.password 
          ? <div className="field__error field__error--center">{errors.password}</div> 
          : null}
      </div>
      <div className="margin-top-16"></div>
      <button className="btn btn--primary btn--block" type="submit">Submit</button>
    </form>
  );
}

UserForm.propTypes = {
  title: PropTypes.string,
  onValidationSuccess: PropTypes.func,
  formError: PropTypes.string,
};

UserForm.defaultProps = {
  title: '',
  onValidationSuccess: () => {},
  formError: '',
};

export default UserForm;