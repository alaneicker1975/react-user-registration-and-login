export const initialState = { 
  isLoggedIn: true,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER_AS_LOGGED_IN':
      return { ...state, isLoggedIn: true };
    case 'SET_USER_AS_LOGGED_OUT':
      localStorage.removeItem('token');
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};