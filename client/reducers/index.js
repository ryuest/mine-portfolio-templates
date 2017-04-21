import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';
import {likez} from './posts';
import counter from './counter';
import speechKeys from './speech';
import player from './player';

const rootReducer = combineReducers({
  posts,
  counter,
  comments,
  likez,
  speechKeys,
  player,
  routing: routerReducer
});

export default rootReducer;
