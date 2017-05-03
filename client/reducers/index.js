import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';
import selections from './selections'

const rootReducer = combineReducers({
  posts,
  comments,
  selections,
  routing: routerReducer
});

export default rootReducer;
