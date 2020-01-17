export const initialState = { 
  isLoggedIn: true,
  user: null,
};

export const reducer = (state, action) => {
  const { isLoggedIn, user } = action.payload;

  switch (action.type) {
    case 'SET_USER_AS_LOGGED_IN':
      return { ...state, isLoggedIn };
    case 'SET_USER_AS_LOGGED_OUT':
      localStorage.removeItem('token');
      return { ...state, isLoggedIn: false };
    case 'SET_USER':
        return { ...state, user };
    default:
      return state;
  }
};