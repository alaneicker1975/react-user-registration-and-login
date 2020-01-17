export const initialState = { 
  isLoggedIn: false,
  user: null,
};

export const reducer = (state, action) => {
  const { token, user } = action.payload;

  switch (action.type) {
    case 'SET_AUTH_TOKEN':
      localStorage.setItem('token', token);
      return { ...state, isLoggedIn: true };
    case 'UNSET_AUTH_TOKEN':
      localStorage.removeItem('token');
      return { ...state, isLoggedIn: false };
    case 'SET_USER':
        return { ...state, user };
    default:
      return state;
  }
};