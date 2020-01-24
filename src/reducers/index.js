export const initialState = { 
  username: null,
  message: null,
  showOverlay: false,
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
    default:
      return state;
  }
};
