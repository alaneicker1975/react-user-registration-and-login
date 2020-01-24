export const initialState = { 
  user: {
    username: null,
    isAdmin: null,
  },
  message: null,
  showOverlay: false,
  users: [],
};

export const reducer = (state, action) => {
  const { payload } = action;

  switch (action.type) {
    case 'SHOW_OVERLAY':
      return { ...state, showOverlay: payload };
    case 'SET_GLOBAL_MESSAGE':
      if (payload === null) {
        return { ...state, message: null };
      } else {
        return { ...state, message: payload };
      }
    case 'SET_USER':
      return { ...state, user: payload };
    case 'SET_USERS':
      return { ...state, users: payload };
    default:
      return state;
  }
};
