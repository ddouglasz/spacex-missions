import { put, takeLatest, all } from "redux-saga/effects";

function* fetchLaunches() {
	try {
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

function* fetchSingleLaunch(action) {
	try {
		const json = yield fetch(
			`https://api.spacexdata.com/v3/launches/${action.payload.id}`,
		).then(response => response.json());

		yield put({
			type: "SINGLE_LAUNCH_RECEIVED",
			json: json || [{ error: json.message }],
		});
	} catch (e) {
		yield put({ type: "SINGLE_LAUNCH_FETCH_FAILED", message: e.message });
	}
}

function* fetchHistories() {
	try {
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

function* fetchSingleHistory(action) {
	try {
		const json = yield fetch(
			`https://api.spacexdata.com/v3/history/${action.payload.id}`,
		).then(response => response.json());

		yield put({
			type: "SINGLE_HISTORY_RECEIVED",
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

function* SingleHistoryActionWatcher() {
	yield takeLatest("GET_SINGLE_HISTORY", fetchSingleHistory);
}

function* SingleLaunchActionWatcher() {
	yield takeLatest("GET_SINGLE_LAUNCH", fetchSingleLaunch);
}

export default function* rootSaga() {
	yield all([
	launchActionWatcher(),
	HistoryActionWatcher(),
	SingleHistoryActionWatcher(),
	SingleLaunchActionWatcher()]);
}
