import React from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { useFormik } from 'formik';

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const UserForm = (props) => {
  const { onValidationSuccess, errorMessage } = props;

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
    <form onSubmit={handleSubmit} noValidate>
      {errorMessage ? <div>{errorMessage}</div> : null}
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={handleChange}
          values={values.username}
        />
        {errors.username && touched.username ? <div>{errors.username}</div> : null}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
          values={values.password}
        />
        {errors.password && touched.password ? <div>{errors.password}</div> : null}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

UserForm.propTypes = {
  onValidationSuccess: PropTypes.func,
  errorMessage: PropTypes.string,
};

UserForm.defaultProps = {
  onValidationSuccess: () => {},
  errorMessage: '',
};

export default UserForm;