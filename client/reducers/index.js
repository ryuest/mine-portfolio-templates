import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';
import counter from './counter';

const rootReducer = combineReducers({
  posts,
  counter,
  comments,
  routing: routerReducer
});

export default rootReducer;
