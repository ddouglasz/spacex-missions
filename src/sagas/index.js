import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchLaunches() {

  const json = yield fetch('https://api.spacexdata.com/v3/launches')
    .then(response => response.json());

  yield put({ type: "LAUNCHES_RECEIVED", json: json || [{ error: json.message }] });
}

function* actionWatcher() {
  yield takeLatest('GET_LAUNCHES', fetchLaunches)
}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
