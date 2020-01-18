import React from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { useFormik } from 'formik';

const LoginForm = (props) => {
  const { onValidationSuccess, loginError } = props;

  return (
    <form>
      Login form
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