const reducer = (state = {}, action) => {
	switch (action.type) {
		case "GET_LAUNCHES":
			return { ...state, loading: true };
		case "LAUNCHES_RECEIVED":
			return { ...state, launches: action.json, loading: false };
		case "LAUNCH_FETCH_FAILED":
			return { ...state, launches: action.json, loading: false };
		case "GET_HISTORY":
			return { ...state, loading: true };
		case "HISTORY_RECEIVED":
			return { ...state, history: action.json, loading: false };
		case "HISTORY_FETCH_FAILED":
			return { ...state, history: action.json, loading: false };
		default:
			return state;
	}
};

export default reducer;
