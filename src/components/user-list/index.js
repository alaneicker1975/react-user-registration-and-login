import React, { useEffect, useContext } from 'react';
import { AppContext } from '../../App';

import './user-list.scss';

const UserList = () => {  
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch('http://localhost:6060/api/v1/users');
      const users = await response.json();
      
      dispatch({ type: 'SET_USERS', payload: { users } });
    };

    getUsers();
  }, []);
  
  return (
    <ul className="user-list">
      {state.users.map(user => (
        <li className="flex flex--equalColumns" key={Math.random()}>
          <div><b>username:</b> {user.username}</div>
      <div><b>isAdmin:</b> {Boolean(user.isAdmin).toString()}</div>
        </li>
      ))}
    </ul>
  );
};

export default UserList;