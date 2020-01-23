import React, { Fragment, useState } from 'react';
import UserForm from '../components/user-form';

const Login = (props) => {
  const [ loginError, setLoginError ] = useState(null);
  
  const submitFormData = async (formData) => {
    try {
      const response = await fetch('http://localhost:6060/api/v1/user/authenticate', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ formData }),
      });
      
      const { isLoggedIn, error } = await response.json();

      if (isLoggedIn === false || error) {
        throw new Error(error || 'Username or password is invalid!');
      }
      
      props.history.push('/dashboard');
    } catch (err) {
      setLoginError(err.message);
    }
  }

  return (
    <Fragment>
      <h1>Login</h1>
      <UserForm 
        onValidationSuccess={submitFormData} 
        loginError={loginError}
      />
    </Fragment>
  );
};

export default Login;