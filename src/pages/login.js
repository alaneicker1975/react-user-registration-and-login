import React, { Fragment, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from '../components/login-form';
import { AppContext } from '../App';

const Login = () => {
  const { dispatch } = useContext(AppContext);
  const [loggedIn, setLoggedIn] = useState(false);
  
  const handleLoginSuccess = () => {
    dispatch({ type: 'SET_USER_AS_LOGGED_IN' });
    setLoggedIn(true);
  }

  return loggedIn
    ? <Redirect to="/dashboard" />
    : (
      <Fragment>
        <h1>Login</h1>
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      </Fragment>
    );
};

export default Login;