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
    console.log("getting url "+ path)
    console.log(database.ref(resolvedPath).once('value').then((snapshot) => snapshot.val()))
    return database.ref(resolvedPath).once('value').then((snapshot) => snapshot.val());
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

export function * doFetchPosts() {
    // make API call without blocking application
    const posts = yield call(fetchFirebase, 'posts');

    // when done, send data to reducer
    yield put(actions.fetchedPostsKeys(posts));
}

// run this function for each FETCH_SPEECH_KEYS
export function * doFetchSpeechKeys() {
    // make API call without blocking application
    const data = yield call(fetchFirebase, 'speechKeys');

    // when done, send data to reducer
    yield put(actions.fetchedSpeechKeys(data));
}




// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    takeLatest('FETCH_SPEECH_KEYS', doFetchSpeechKeys),
    takeLatest('FETCH_POSTS', doFetchPosts),
    fork(watchIncrementAsync),
  ]
}

//


//  helloSaga(),
