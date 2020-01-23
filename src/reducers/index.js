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
      return { ...state, message: payload.message };
    default:
      return state;
  }
};
