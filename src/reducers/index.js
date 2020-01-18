export const initialState = { 
  isLoggedIn: true,
};

export const reducer = (state, action) => {
  const { isLoggedIn } = action.payload;

  switch (action.type) {
    case 'SET_USER_AS_LOGGED_IN':
      return { ...state, isLoggedIn };
    case 'SET_USER_AS_LOGGED_OUT':
      localStorage.removeItem('token');
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};