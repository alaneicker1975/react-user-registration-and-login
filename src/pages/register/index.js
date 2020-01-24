import React, { Fragment, useState, useContext } from 'react';
import UserForm from '../../components/user-form';
import { AppContext } from '../../App';

const Register = (props) => {
  const { dispatch } = useContext(AppContext);
  const [ formError, setFormError ] = useState(null);

  const submitFormData = async (formData) => {
    try {
      const response = await fetch('http://localhost:6060/api/v1/user/create', {
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
   
      dispatch({ 
        type: 'SET_GLOBAL_MESSAGE', 
        payload: { text: `User "${formData.username}" has been created. You can now log in`, type: 'confirmation' },
      });
      
      props.history.push('/login');
    } catch (error) {
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
    </Fragment>
  );
};

export default Register;