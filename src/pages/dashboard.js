import React, { Fragment, useContext, useEffect } from 'react';
import { AppContext } from '../App';

const Dashboard = (props) => {
  const { state, dispatch } = useContext(AppContext);
  
  useEffect(() => {
    const verifyUser = async () => {     
      try {
        const userVerification = await fetch('http://localhost:6060/api/v1/user/verify');
        const { isValid, username, error } = await userVerification.json();
    
        if (error || !isValid) {
          dispatch({ type: 'SET_GLOBAL_MESSAGE', payload: { message: 'You\'ve been logged out' }});
          props.history.push('/');
        } else {
          dispatch({ type: 'SET_USER', payload: { username } });
        }
      } catch (error) {
        dispatch({ type: 'SET_GLOBAL_MESSAGE', payload: { message: error.message }});
        props.history.push('/');
      }
    };

    verifyUser();
  }, []);

  return (
    <Fragment>
      <h1>Welcome {state.username}</h1>
    </Fragment>
  );
};

export default Dashboard;
