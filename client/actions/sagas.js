import { delay, takeEvery } from 'redux-saga';
import { fork, call, put } from 'redux-saga/effects';


function* helloSaga() {
  console.log('Hello Sagas!')
}

// Our worker Saga: will perform the async increment task
function* incrementAsync() {
  console.log("incrementAsync")
  yield call(delay, 1000)
  yield put({ type: 'INCREMENT' })
}

function* watchIncrementAsync() {
  console.log("watchIncrementAsync")
  incrementAsync()
  yield* takeEvery('INCREMENT_ASYNC', incrementAsync)
}

function* zz() {
  console.log("zz log")
  yield call(delay, 1000)
  yield put({ type: 'DECREMENT' })
}

function* log() {
  console.log("watchIncrementAsync LOG")
  zz()
  yield* takeEvery('LOG', zz)
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    watchIncrementAsync(),
    log()
  ]
}

//


//  helloSaga(),
