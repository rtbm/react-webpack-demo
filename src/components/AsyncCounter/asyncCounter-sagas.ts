import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'
import { ASYNC_COUNTER_INCREMENT, ASYNC_COUNTER_INCREMENT_ASYNC } from './asyncCounter-actions';

function* helloSaga(): any {
  console.log('Hello Sagas!');
}

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  yield delay(1000);

  yield put({
    type: ASYNC_COUNTER_INCREMENT,
  });
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery(ASYNC_COUNTER_INCREMENT_ASYNC, incrementAsync);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* helloWorldSaga(): any {
  yield all([
    helloSaga(),
    watchIncrementAsync(),
  ]);
}
