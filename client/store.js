import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';
import { composeWithDevTools} from 'redux-devtools-extension';

// import all reducers
import rootReducer from './reducers/index';

// initial data
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

const store = createStore(rootReducer, defaultState, composeWithDevTools(applyMiddleware(sagaMiddleware)));

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
