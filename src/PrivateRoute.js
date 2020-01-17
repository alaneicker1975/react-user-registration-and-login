import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AppContext } from './App';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { state } = useContext(AppContext);

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