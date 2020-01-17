export const initialState = { 
  loggedIn: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'CHECK_USER_AUTH':
      // Check if user is logged in and update state
      return { ...state, loggedIn };
    default:
      return state;
  }
};