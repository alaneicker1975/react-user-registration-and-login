import React, { createContext, useReducer } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/login';
import Dashboard from './components/dashboard';
import Register from './components/register';

import { reducer, initialState } from './reducers';

export const AppContext = createContext({});

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Router>
        <Route path="/" component={Login} exact />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/register" component={Register} />
      </Router>
    </AppContext.Provider>
  );
};

export default App;