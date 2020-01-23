import React, { Fragment, useState, useContext } from 'react';
import UserForm from '../components/user-form';
import { AppContext } from '../App';

const Register = (props) => {
  const { dispatch } = useContext(AppContext);
  const [ errorMessage, setErrorMessage ] = useState(null);

  const submitFormData = async (formData) => {

  };

  return (
    <Fragment>
      <h1>Register</h1>
      <UserForm
        onValidationSuccess={submitFormData}
        errorMessage={errorMessage}
      />
    </Fragment>
  );
};

export default Register;