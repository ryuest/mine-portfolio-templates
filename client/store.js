import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';
import { composeWithDevTools} from 'redux-devtools-extension';
import actions from './actions/actionCreators';

// import all reducers
import rootReducer from './reducers/index';

//saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './actions/sagas';

const sagaMiddleware = createSagaMiddleware();

// crate store with redux chrome devtools and redux-saga
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

// run saga
sagaMiddleware.run(rootSaga);

// fetch some data from firebase (posts)
store.dispatch(actions.fetchPosts());

export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot) {
  module.hot.accept('./reducers/',() => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
