export const initialState = { 
  isLoggedIn: false,
  username: '',
};

export const reducer = (state, action) => {
  const { payload } = action;

  switch (action.type) {
    case 'SET_USER_AS_LOGGED_IN':
      return { ...state, isLoggedIn: true };
    case 'SET_USER_AS_LOGGED_OUT':
      return { ...state, isLoggedIn: false };
    case 'SET_USER':
      return { ...state, username: payload.username };
    default:
      return state;
  }
};