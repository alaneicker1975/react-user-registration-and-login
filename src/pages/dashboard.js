import React, { Fragment, useContext, useEffect } from 'react';
import { verifyUser } from '../actions/verify-user';
import { AppContext } from '../App';

const Dashboard = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    // If page is refreshed, re-verify user and set user
    if (performance.navigation.type == 1) {
      const token = localStorage.getItem('token');

      verifyUser(token)
        .then(res => res.json())
        .then(({ isLoggedIn, user }) => {
          dispatch({ 
            type: 'SET_USER_AS_LOGGED_IN',
            payload: { isLoggedIn },
          });
          dispatch({ 
            type: 'SET_USER',
            payload: { user },
          });
        });
    }
  }, []);
  
  return (
    <Fragment>
      <h1>Dashboard</h1>
    </Fragment>
  );
};

export default Dashboard;