import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

//saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './actions/sagas';

const sagaMiddleware = createSagaMiddleware();

// create an object for the default data
const defaultState = {
  posts,
  comments
};

const composeEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : f => f, applyMiddleware(sagaMiddleware));

const store = createStore(rootReducer, defaultState, composeEnhancers);
sagaMiddleware.run(rootSaga);

export const history = syncHistoryWithStore(browserHistory, store);

/*
if(module.hot) {
  module.hot.accept('./reducers/',() => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}
*/
export default store;
