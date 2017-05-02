import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';
import speechKeys from './speech';
import players from './players';
import selections from './selections'

const rootReducer = combineReducers({
  posts,
  comments,
  speechKeys,
  players,
  selections,
  routing: routerReducer
});

export default rootReducer;
