import React, { Fragment, useContext } from 'react';
import { AppContext } from '../App';

const Dashboard = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <Fragment>
      <h1>Dashboard</h1>
    </Fragment>
  );
};

export default Dashboard;