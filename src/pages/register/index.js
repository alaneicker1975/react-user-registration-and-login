import React, { Fragment, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import UserForm from '../../components/user-form';
import { AppContext } from '../../App';

const Register = props => {
  const { dispatch } = useContext(AppContext);
  const [ formError, setFormError ] = useState(null);

  const submitFormData = async (formData) => {
    try {
      dispatch({ type: 'SHOW_OVERLAY', payload: { showOverlay: true } });

      const response = await fetch('http://localhost:6060/api/v1/users/create', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });
      
      const { lastID, error } = await response.json();
      
      if (!lastID || error) {
        throw new Error('Could not create user');
      }
      
      dispatch({ type: 'SHOW_OVERLAY', payload: { showOverlay: false } });

      dispatch({ 
        type: 'SET_GLOBAL_MESSAGE', 
        payload: { text: `User "${formData.username}" has been created. You can now log in`, type: 'confirmation' },
      });
      
      props.history.push('/login');
    } catch (error) {
      dispatch({ type: 'SHOW_OVERLAY', payload: { showOverlay: false } });
      setFormError(error.message);
    }
  }

  return (
    <Fragment>
      <UserForm
        title="Register"
        onValidationSuccess={submitFormData}
        formError={formError}
      />
      <p className="text-align-center text-size-14"
        >Already have an account? <Link to="/login">Log In</Link>
      </p>
    </Fragment>
  );
};

export default Register;