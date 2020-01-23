import React, { createContext, useReducer } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Register from './pages/register';

import Alert from './components/alert';

import { reducer, initialState } from './reducers';

export const AppContext = createContext({});

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {state.message ? <Alert type="error" text={state.message} /> : null}
      <Router>
        <Route path="/" component={Login} exact />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
      </Router>
    </AppContext.Provider>
  );
};

export default App;