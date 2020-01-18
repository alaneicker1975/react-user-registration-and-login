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
  loginError: PropTypes.bool,
};

LoginForm.defaultProps = {
  onValidationSuccess: () => {},
  loginError: false,
};

export default LoginForm;