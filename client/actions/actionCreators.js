import { delay } from 'redux-saga'
import { put, call, takeEvery } from 'redux-saga/effects'


export function* helloSaga() {
  console.log('Hello Sagas OLD2!')
}

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  yield call(delay, 1000)
  yield put({ type: 'INCREMENT' })
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// single entry point to start all Sagas at once
export function* rootSaga() {
  yield [
    helloSaga(),
    watchIncrementAsync()
  ]
}

// increment
export function increment(index) {
  return{
    type: 'INCREMENT_LIKES',
    index
  }
}

// add comments
export function addComent(postId, author, comment) {
  return{
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// remove commnent
export function removeComment(postId, i) {
  return{
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}
