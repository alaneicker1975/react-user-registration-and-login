import React from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { useFormik } from 'formik';

const validationSchema = yup.object().shape({
  username: yup.string().required('Required'),
  password: yup.string().required('Required'),
});

const LoginForm = (props) => {
  const { onValidationSuccess, loginError } = props;

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
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
    <form onSubmit={handleSubmit} noValidate>
      {loginError ? <div>{loginError}</div> : null}
      <div>
        <label htmlFor="username">Password</label>
        <input
          id="username"
          name="username"
          onChange={handleChange}
          values={values.username}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          onChange={handleChange}
          values={values.password}
        />
      </div>
    </form>
  );
}

LoginForm.propTypes = {
  onValidationSuccess: PropTypes.func,
  loginError: PropTypes.string,
};

LoginForm.defaultProps = {
  onValidationSuccess: () => {},
  loginError: '',
};

export default LoginForm;