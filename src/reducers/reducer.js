const reducer = (state = {}, action) => {
	switch (action.type) {
		case "GET_LAUNCHES":
			return { ...state, loading: true };
		case "LAUNCHES_RECEIVED":
			return { ...state, launches: action.json, loading: false };
		case "LAUNCH_FETCH_FAILED":
			return { ...state, launches: action.json, loading: false };
			
		case "GET_SINGLE_LAUNCH":
			return { ...state, loading: true };
		case "SINGLE_LAUNCH_RECEIVED":
			return { ...state, single_launch: action.json, loading: false };
		case "SINGLE_LAUNCH_FETCH_FAILED":
			return { ...state, single_launch: action.json, loading: false };
			
		case "GET_HISTORY":
			return { ...state, loading: true };
		case "HISTORY_RECEIVED":
			return { ...state, history: action.json, loading: false };
		case "HISTORY_FETCH_FAILED":
			return { ...state, history: action.json, loading: false };
			
		case "GET_SINGLE_HISTORY":
			return { ...state, loading: true };
		case "SINGLE_HISTORY_RECEIVED":
      return { ...state, single_history: action.json, loading: false };
		case "SINGLE_HISTORY_FETCH_FAILED":
			return { ...state, single_history: action.json, loading: false };
		default:
			return state;
	}
};

export default reducer;
