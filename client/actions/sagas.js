import {
    put,
    call,
    select,
    fork,
    take,
    race
} from 'redux-saga/effects';

import {takeLatest, delay, takeEvery} from 'redux-saga';
import {fetchFirebase} from '../components/App'

// Our worker Saga: will perform the async increment task
function* incrementAsync() {
  console.log("incrementAsync")
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

function* zzPost(index) {
  console.log("zzPost log")
  yield call(delay, 1000)
  yield put({ type: 'INCREMENT_LIKES', index })
}

function* logPost() {
  console.log("watchIncrementAsync zzPost")
  zzPost()
  yield* takeEvery('INCREMENT_LIKES', zzPost)
}

function* log() {
  console.log("watchIncrementAsync LOG")
  zz()
  yield* takeEvery('LOG', zz)
}

// SPEECH
// run this function for each FETCH_SPEECH_KEYS
export function* doFetchSpeechKeys() {
    // make API call without blocking application
    const data = yield call(fetchFirebase, 'speechKeys');

    // when done, send data to reducer
    yield put(actions.fetchedSpeechKeys(data));
}

// run this function for each FETCH_SPEECH action
function* doFetchSpeech() {
    // determine which speech to fetch based on Redux
    const key = yield select(selectors.getCurrentSpeech);

    // make api call without blocking application
    const data = yield call(fetchFirebase, ['speeches', key]);

    // when done, send data to reducer
    yield put(actions.fetchedSpeech(data));
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    takeLatest('FETCH_SPEECH_KEYS', doFetchSpeechKeys),
    takeLatest('FETCH_SPEECH', doFetchSpeech),
    fork(watchIncrementAsync),
  ]
}

//


//  helloSaga(),
