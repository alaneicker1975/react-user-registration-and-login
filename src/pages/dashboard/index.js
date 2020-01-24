import React, { Fragment, useContext, useEffect } from 'react';
import { AppContext } from '../../App';

const Dashboard = (props) => {
  const { state, dispatch } = useContext(AppContext);
  
  useEffect(() => {
    const verifyUser = async () => {     
      try {
        const userVerification = await fetch('http://localhost:6060/api/v1/user/verify');
        const { error, isValid, username } = await userVerification.json();
    
        if (error || !isValid) {
          dispatch({ type: 'SET_GLOBAL_MESSAGE', payload: { message: 'You\'ve been logged out' }});
          props.history.push('/login');
        } else {
          dispatch({ type: 'SET_USER', payload: { username } });
        }
      } catch (error) {
        dispatch({ type: 'SET_GLOBAL_MESSAGE', payload: { message: error.message }});
        props.history.push('/login');
      }
    };

    verifyUser();
  }, []);

  const logout = async () => {
    try {
      const response = await fetch('http://localhost:6060/api/v1/user/logout', { method: 'POST' });
      const { isLoggedOut, error } = await response.json();

      if (!isLoggedOut || error) {
        throw new Error(error || 'Error logging out');
      }

      dispatch({ type: 'SET_GLOBAL_MESSAGE', payload: { message: 'You\'ve been logged out' }});
      props.history.push('/login');
    } catch (error) {
      dispatch({ type: 'SET_GLOBAL_MESSAGE', payload: { message: error.message }});
    }
  }

  return (
    <Fragment>
      <h1>Welcome {state.username}</h1>
      <button type="button" onClick={logout}>Log Out</button>
    </Fragment>
  );
};

export default Dashboard;
