const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_HISTORY':
      return { ...state, loading: true };
    case 'HISTORY_RECEIVED':
      return { ...state, history: action.json[0], loading: false }
    default:
      return state;
  }
};

export default reducer;
