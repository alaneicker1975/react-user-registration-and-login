import React, { useState, useContext } from 'react';
import classNames from 'classnames';
import UserForm from '../../components/user-form';
import { AppContext } from '../../App';

const Login = (props) => {
  const { dispatch } = useContext(AppContext);
  const [ formError, setFormError ] = useState(null);
  const [ loading, setLoading ] = useState(false);
  
  const submitFormData = async (formData) => {
    try {
      setLoading(true);

      const response = await fetch('http://localhost:6060/api/v1/user/authenticate', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });
      
      const { isLoggedIn, username, error } = await response.json();
        
      if (!isLoggedIn || error) {
        throw new Error(error);
      }
      
      setLoading(false);
      dispatch({ type: 'SET_USER', payload: { username } });
      props.history.push('/dashboard');
    } catch (error) {
      setFormError(error.message);
      setLoading(false);
    }
  }

  return (
    <div className={classNames({
      'is-loading': loading
    })}>
      <UserForm 
        title="Login"
        onValidationSuccess={submitFormData} 
        formError={formError}
      />
    </div>
  );
};

export default Login;