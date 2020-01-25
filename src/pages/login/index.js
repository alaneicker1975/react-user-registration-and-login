import React, { useState, useContext, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UserForm from '../../components/user-form';
import { AppContext } from '../../App';

const Login = props => {
  const { dispatch } = useContext(AppContext);
  const [ formError, setFormError ] = useState(null);
  
  const submitFormData = async (formData) => {
    try {
      dispatch({ type: 'SHOW_OVERLAY', payload: true });

      const response = await fetch('http://localhost:6060/api/v1/users/authenticate', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });
      
      const { isLoggedIn, username, isAdmin, error } = await response.json();
        
      if (!isLoggedIn || error) {
        throw new Error(error);
      }
      
      dispatch({ type: 'SHOW_OVERLAY', payload: false });
      dispatch({ type: 'SET_USER', payload: { username, isAdmin } });
      
      props.history.push('/dashboard');
    } catch (error) {
      dispatch({ type: 'SHOW_OVERLAY', payload: false });
      setFormError(error.message);
    }
  }

  return (
    <Fragment>
      <UserForm 
        title="Account Login"
        onValidationSuccess={submitFormData} 
        formError={formError}
      />
      <p className="text-align-center text-size-14">
        {'Don\'t have an account?'} <Link to="/register">Register</Link>
      </p>
    </Fragment>
  );
};

Login.propTypes = {
  history: PropTypes.object,
};

export default Login;