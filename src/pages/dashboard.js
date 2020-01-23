import React, { Fragment, useContext, useEffect } from 'react';
import { AppContext } from '../App';

const Dashboard = (props) => {
  const { state, dispatch } = useContext(AppContext);
  
  useEffect(() => {

    if (!state.isLoggedIn) {
      props.history.push('/');
    }

    // This code will run only if page is reloaded
    if (performance.navigation.type == 1) {
      const verifyUser = async () => {        
        try {
          const userVerification = await fetch('http://localhost:6060/api/v1/user/verify');
          const { isValid, error } = await userVerification.json();
     
          if (error || !isValid) {
            dispatch({ type: 'SET_ERROR', payload: { error: 'Invalid token' }});
            dispatch({ type: 'SET_USER_AS_LOGGED_OUT' });
          } else {
            dispatch({ type: 'SET_USER_AS_LOGGED_IN' });
          }
        } catch (error) {
          dispatch({ type: 'SET_ERROR', payload: { error: error.message }});
          dispatch({ type: 'SET_USER_AS_LOGGED_OUT' });
        }
      };

      verifyUser();      
    }
  }, []);

  return (
    <Fragment>
      <h1>Dashboard</h1>
    </Fragment>
  );
};

export default Dashboard;
