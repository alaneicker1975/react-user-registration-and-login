export const initialState = { 
  username: null,
  message: null,
  showOverlay: false,
  users: [],
};

export const reducer = (state, action) => {
  const { payload } = action;

  switch (action.type) {
    case 'SHOW_OVERLAY':
      return { ...state, showOverlay: payload.showOverlay };
    case 'SET_USER':
      return { ...state, username: payload.username };
    case 'SET_GLOBAL_MESSAGE':
      if (payload === null) {
        return { ...state, message: null };
      } else {
        return { ...state, message: { text: payload.text, type: payload.type } };
      }
    case 'SET_USERS':
      return { ...state, users: payload.users };
    default:
      return state;
  }
};
