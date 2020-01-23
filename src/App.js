import React, { createContext, useReducer, useEffect } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Register from './pages/register';

import Alert from './components/alert';

import { reducer, initialState } from './reducers';

// import './styles/app.scss';

export const AppContext = createContext({});

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.message !== null) {
      setTimeout(() => {
        dispatch({ type: 'SET_GLOBAL_MESSAGE', payload: { message: null } });
      }, 5000);
    }
  });
  
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