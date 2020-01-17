export const initialState = { 
  isLoggedIn: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_AUTH_TOKEN':
      // Logic to set cookie
      return { ...state, isLoggedIn };
    case 'SET_AUTH_TOKEN':
      // Logic to logout user
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};