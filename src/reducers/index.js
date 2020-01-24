export const initialState = { 
  username: null,
  message: null,
};

export const reducer = (state, action) => {
  const { payload } = action;

  switch (action.type) {
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
