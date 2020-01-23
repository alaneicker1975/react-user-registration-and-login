import React, { Fragment, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import UserForm from '../components/user-form';
import { AppContext } from '../App';

const Register = (props) => {
  const { dispatch } = useContext(AppContext);
  const [ errorMessage, setErrorMessage ] = useState(null);

  const submitFormData = async (formData) => {
    try {
      const response = await fetch('http://localhost:6060/api/v1/user/create', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ formData }),
      });
      
      const { userCreated } = await response.json();
  
      if (!userCreated || error) {
        throw new Error(error || 'Could not create user!');
      }
      
      dispatch({ type: 'SET_GLOBAL_MESSAGE', payload: { 
        message: `User "${formData.username}" has been created. You can now ${<Link to="/login">Log In</Link>}` 
      }});
    } catch (err) {
      setErrorMessage(err.message);
    }
  }

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