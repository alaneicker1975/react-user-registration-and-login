import React, { Fragment, useState, useContext } from 'react';
import UserForm from '../components/user-form';
import { AppContext } from '../App';

const Login = (props) => {
  const { dispatch } = useContext(AppContext);
  const [ errorMessage, setErrorMessage ] = useState(null);
  
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
      
      const { isLoggedIn, username, error } = await response.json();
  
      if (!isLoggedIn || error) {
        throw new Error(error || 'Username or password is invalid!');
      }
      
      dispatch({ type: 'SET_USER', payload: { username } });
      props.history.push('/dashboard');
    } catch (err) {
      setErrorMessage(err.message);
    }
  }

  return (
    <Fragment>
      <h1>Login</h1>
      <UserForm 
        onValidationSuccess={submitFormData} 
        errorMessage={errorMessage}
      />
    </Fragment>
  );
};

export default Login;