import { put, takeLatest, all } from "redux-saga/effects";

function* fetchLaunches() {
	try {
		// const user = yield call(Api.fetchUser, action.payload.userId);
		// yield put({type: "USER_FETCH_SUCCEEDED", user: user});
		const json = yield fetch(
			"https://api.spacexdata.com/v3/launches",
		).then(response => response.json());

		yield put({
			type: "LAUNCHES_RECEIVED",
			json: json || [{ error: json.message }],
		});
	} catch (e) {
		yield put({ type: "LAUNCH_FETCH_FAILED", message: e.message });
	}
}

function* fetchHistories() {
	try {
		// const user = yield call(Api.fetchUser, action.payload.userId);
		// yield put({type: "USER_FETCH_SUCCEEDED", user: user});
		const json = yield fetch(
			"https://api.spacexdata.com/v3/history",
		).then(response => response.json());

		yield put({
			type: "HISTORY_RECEIVED",
			json: json || [{ error: json.message }],
		});
	} catch (e) {
		yield put({ type: "HISTORY_FETCH_FAILED", message: e.message });
	}
}

function* launchActionWatcher() {
	yield takeLatest("GET_LAUNCHES", fetchLaunches);
}

function* HistoryActionWatcher() {
	yield takeLatest("GET_HISTORY", fetchHistories);
}

export default function* rootSaga() {
	yield all([launchActionWatcher(), HistoryActionWatcher()]);
}
