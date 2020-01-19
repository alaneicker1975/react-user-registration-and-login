import React, { Fragment, useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AppContext } from '../App';

const Dashboard = () => {
  const { state, dispatch } = useContext(AppContext);
  
  useEffect(() => {
    // This code will run only if page is reloaded
    if (performance.navigation.type == 1) {
      const token = localStorage.getItem('token');
      
      if (token) {
        fetch('http://localhost:6060/api/v1/user/verify', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ token }),
        })
        .then(res => res.json())
        .then(({ isValid }) => {
          if (!isValid) {
            dispatch({ type: 'SET_USER_AS_LOGGED_OUT' });
          } else {
            dispatch({ type: 'SET_USER_AS_LOGGED_IN' });
          }
        })
        .catch(err => {
          console.log(err);
        });

        return;
      }

      dispatch({ type: 'SET_USER_AS_LOGGED_OUT' });
    }
  }, []);

  return state.isLoggedIn 
    ? <Fragment>
        <h1>Dashboard</h1>
      </Fragment>
    : <Redirect to="/login" />;
};

export default Dashboard;