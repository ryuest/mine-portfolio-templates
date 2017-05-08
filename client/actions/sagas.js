import {
    put,
    call,
    select,
    fork,
    take,
    race
} from 'redux-saga/effects';

import {takeLatest, delay, takeEvery} from 'redux-saga';
//import {fetchFirebase} from '../components/App'
import firebase from 'firebase';
import {firebaseConfig} from '../data/baseConfig';
import actions from './actionCreators';

let database;
export const fetchFirebase = (path) => {
    if (database === undefined) {
        firebase.initializeApp(firebaseConfig);
        database = firebase.database();
    }

    let resolvedPath = path;
    if (resolvedPath instanceof Array) {
        resolvedPath = path.join('/');
    }
    return database.ref(resolvedPath).once('value').then((snapshot) => snapshot.val());
};

export const fetchBetStakes = (path) => {

  return betStakes
};

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

function* incrementSaga() {
  console.log("incrementSaga log")
  yield call(delay, 1000)
  yield put(actions.increment(0));
}


function* log() {
  console.log("watchIncrementAsync LOG")
  incrementSaga()
  yield* takeEvery('LOG', incrementSaga)
}

export function * doFetchPosts() {
    // make API call without blocking application
    const posts = yield call(fetchFirebase, 'posts');
    // when done, send data to reducer
    yield put(actions.fetchedPostsKeys(posts));
}


export function * placeBetGetReceipt() {
//  console.log("placeBetGetReceipt Saga")
  yield put(actions.enableReceipt());
  yield put(actions.disableBetSlip());
  yield put(actions.clearBets());
}
/*
function* inputFormSaga () {
  console.log("inputFormSaga")
}
*/

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    takeLatest('FETCH_POSTS', doFetchPosts),
    takeLatest('GET_RECEIPT', placeBetGetReceipt),
//    takeLatest('INPUT_FORM_SUBMIT', inputFormSaga),
    log()
  ]
}
