import React, { Fragment, useContext, useEffect } from 'react';
import { AppContext } from '../App';

const Dashboard = (props) => {
  const { dispatch } = useContext(AppContext);
  
  useEffect(() => {
    const verifyUser = async () => {     
      try {
        const userVerification = await fetch('http://localhost:6060/api/v1/user/verify');
        const { isValid, error } = await userVerification.json();
    
        if (error || !isValid) {
          dispatch({ type: 'SET_ERROR', payload: { error: 'Invalid token' }});
          props.history.push('/');
        }
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: { error: error.message }});
        props.history.push('/');
      }
    };

    verifyUser();
  }, []);

  return (
    <Fragment>
      <h1>Dashboard</h1>
    </Fragment>
  );
};

export default Dashboard;
