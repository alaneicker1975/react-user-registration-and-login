import React, { createContext, useReducer } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Register from './components/register';

import { reducer, initialState } from './reducers';

export const AppContext = createContext({});

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Router>
        <Route path="/" component={Register} exact />
      </Router>
    </AppContext.Provider>
  );
};

export default App;