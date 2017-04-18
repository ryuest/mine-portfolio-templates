import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';
import counter from './counter';
import speech from './speech';

const rootReducer = combineReducers({
  posts,
  counter,
  comments,
  speech,
  routing: routerReducer
});

export default rootReducer;
