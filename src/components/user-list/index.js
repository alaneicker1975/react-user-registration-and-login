import React, { useEffect, useContext } from 'react';
import classNames from 'classnames';
import { AppContext } from '../../App';

import './user-list.scss';

const UserList = () => {  
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch('http://localhost:6060/api/v1/users');
      const users = await response.json();
      
      dispatch({ type: 'SET_USERS', payload: users });
    };

    getUsers();
  }, []);
  
  return (
    <ul className="user-list">
      {state.users.map(user => {
        const { username, isAdmin } = user;
        return (
          <li className="flex flex--equalColumns" key={Math.random()}>
            <div><b>username:</b> {username}</div>
            <div className="text-align-center"><b>isAdmin:</b> {Boolean(isAdmin).toString()}</div>
            <div className="text-align-right">
              <button style={{ width: '80px' }} type="button" className={classNames('btn btn--sm', {
                'btn--secondary': isAdmin,
                'btn--tertiary': !isAdmin
              })}>
                {isAdmin ? '- Admin' : '+ Admin'}
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default UserList;