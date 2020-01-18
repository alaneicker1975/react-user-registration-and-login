import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { verifyUser } from './actions/verify-user';
import { AppContext } from './App';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    // If page is refreshed, re-verify user and set user
    if (performance.navigation.type == 1) {
      const token = localStorage.getItem('token');

      verifyUser(token)
        .then(res => res.json())
        .then(({ token, username }) => {
          if (!token) {
            dispatch({ type: 'SET_USER_AS_LOGGED_OUT' });
          } else {
            dispatch({ type: 'SET_USER_AS_LOGGED_IN' });
          }
        });
    }
  }, []);

  return (
    <Route
      {...rest}
      render={props =>
        state.isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

export default PrivateRoute; 