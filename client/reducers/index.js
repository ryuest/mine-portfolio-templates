import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';
import {likez} from './posts';
import counter from './counter';
import speechKeys from './speech';
import players from './players';

const rootReducer = combineReducers({
  posts,
  counter,
  comments,
  likez,
  speechKeys,
  players,
  routing: routerReducer
});

export default rootReducer;
