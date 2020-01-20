import React, { Fragment, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from '../components/login-form';
import { AppContext } from '../App';

const Login = () => {
  const { dispatch } = useContext(AppContext);
  const [ redirect, setRedirect ] = useState(false);
  const [ loginError, setLoginError ] = useState(null);
  
  const submitFormData = async (formData) => {
    try {
      const { isLoggedIn } = await fetch('http://localhost:6060/api/v1/user/authenticate', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ formData }),
      });

      if (isLoggedIn) {
        dispatch({ type: 'SET_USER_AS_LOGGED_IN' });
        setRedirect(true);
      }
    } catch (err) {
      setLoginError(err.message);
    }
  }

  return redirect
    ? <Redirect to="/dashboard" />
    : (
      <Fragment>
        <h1>Login</h1>
        <LoginForm 
          onValidationSuccess={submitFormData} 
          loginError={loginError}
        />
      </Fragment>
    );
};

export default Login;