export const initialState = { 
  user: null,
  error: null,
};

export const reducer = (state, action) => {
  const { payload } = action;

  switch (action.type) {
    case 'SET_USER':
      return { ...state, username: payload.user };
    case 'SET_ERROR':
      return { ...state, error: payload.error };
    default:
      return state;
  }
};
