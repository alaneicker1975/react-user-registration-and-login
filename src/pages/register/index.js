import React, { Fragment, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UserForm from '../../components/user-form';
import { AppContext } from '../../App';

const Register = props => {
  const { dispatch } = useContext(AppContext);
  const [ formError, setFormError ] = useState(null);

  const submitFormData = async (formData) => {
    try {
      dispatch({ type: 'SHOW_OVERLAY', payload: true });

      const response = await fetch('http://localhost:6060/api/v1/users/create', {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });
      
      const { lastID, error } = await response.json();
      
      if (!lastID || error) {
        throw new Error(error || 'Could not create user');
      }
      
      dispatch({ type: 'SHOW_OVERLAY', payload: false });

      dispatch({ 
        type: 'SET_GLOBAL_MESSAGE', 
        payload: { text: `User "${formData.username}" has been created. You can now log in`, type: 'confirmation' },
      });
      
      props.history.push('/login');
    } catch (error) {
      dispatch({ type: 'SHOW_OVERLAY', payload: false });
      setFormError(error.message);
    }
  }

  return (
    <Fragment>
      <UserForm
        title="Register User"
        onValidationSuccess={submitFormData}
        formError={formError}
      />
      <p className="text-align-center text-size-14"
        >Already have an account? <Link to="/login">Log In</Link>
      </p>
    </Fragment>
  );
};

Register.propTypes = {
  history: PropTypes.object,
};

export default Register;
