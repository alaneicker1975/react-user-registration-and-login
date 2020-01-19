import React, { Fragment, useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AppContext } from '../App';

const Dashboard = () => {
  const { state, dispatch } = useContext(AppContext);
  
  useEffect(() => {
    // This code will run only if page is reloaded
    if (performance.navigation.type == 1) {
      const verifyUser = async () => {
        let isValid = false;
        
        try {
          const userVerification = await fetch('http://localhost:6060/api/v1/user/verify');
          const response = await response.json();

          isValid = userVerification.isValid;

          return isValid;
        } catch {
          return false;
        }
      };

      const isValidUser = verifyUser();
      
      if (!isValidUser) {
        dispatch({ type: 'SET_USER_AS_LOGGED_OUT' });
      } else {
        dispatch({ type: 'SET_USER_AS_LOGGED_IN' });
      }
    }
  }, []);

  return state.isLoggedIn 
    ? <Fragment>
        <h1>Dashboard</h1>
      </Fragment>
    : <Redirect to="/login" />;
};

export default Dashboard;