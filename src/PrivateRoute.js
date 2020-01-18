import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { verifyUserToken } from './actions/verify-user';
import { AppContext } from './App';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    // This code will run only if page is reloaded
    if (performance.navigation.type == 1) {
      const token = localStorage.getItem('token');
      
      if (token) {
        verifyUserToken(token)
          .then(res => res.json())
          .then(({ isValid }) => {
            if (!isValid) {
              dispatch({ type: 'SET_USER_AS_LOGGED_OUT' });
            } else {
              dispatch({ type: 'SET_USER_AS_LOGGED_IN' });
            }
          });
        return;
      }

      dispatch({ type: 'SET_USER_AS_LOGGED_OUT' });
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