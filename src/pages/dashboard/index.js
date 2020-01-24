import React, { Fragment, useContext, useEffect } from 'react';
import UserList from '../../components/user-list';
import { AppContext } from '../../App';

import './dashboard.scss';

const Dashboard = props => {
  const { state, dispatch } = useContext(AppContext);
  
  useEffect(() => {
    const verifyUser = async () => {     
      try {
        const userVerification = await fetch('http://localhost:6060/api/v1/users/verify');
        const { error, isValid, username } = await userVerification.json();
    
        if (error || !isValid) {
          dispatch({ 
            type: 'SET_GLOBAL_MESSAGE', 
            payload: { text: 'You\'ve been logged out', type: 'error' },
          });
          props.history.push('/login');
        } else {
          dispatch({ type: 'SET_USER', payload: { username } });
        }
      } catch (error) {
        dispatch({ 
          type: 'SET_GLOBAL_MESSAGE', 
          payload: { text: error.message, type: 'error' },
        });
        props.history.push('/login');
      }
    };

    verifyUser();
  }, []);

  const logout = async () => {
    try {
      const response = await fetch('http://localhost:6060/api/v1/users/logout', { method: 'POST' });
      const { isLoggedOut, error } = await response.json();

      if (!isLoggedOut || error) {
        throw new Error(error || 'Error logging out');
      }

      dispatch({ 
        type: 'SET_GLOBAL_MESSAGE', 
        payload: { text: 'You\'ve been logged out', type: 'confirmation' }
      });
      
      props.history.push('/login');
    } catch (error) {
      dispatch({ 
        type: 'SET_GLOBAL_MESSAGE', 
        payload: { text: error.message, type: 'error' }
      });
    }
  }

  return (
    <Fragment>
      <header className="dashboard-header">
        <div className="dashboard-header__logo">Dashboard</div>
        <ul className="dashboard-header__nav">
          <li>
            <span className="text-uppercase text-size-12">{state.username}</span>
          </li>
          <li>
            <button 
              className="btn btn--tertiary btn--sm" 
              type="button" 
              onClick={logout}>
              Log Out
            </button>
          </li>
        </ul>
      </header>
      <h1 className="text-size-30 text-weight-semibold text-align-center margin-top-30 text-uppercase">
        Registered Users
      </h1>
      <div className="flex flex--justify-center margin-top-32">
        <UserList />
      </div>
    </Fragment>
  );
};

export default Dashboard;
