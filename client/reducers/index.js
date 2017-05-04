import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';
import selections from './selections'
import betslip from './betslip'

const rootReducer = combineReducers({
  posts,
  comments,
  selections,
  betslip,
  routing: routerReducer
});

export default rootReducer;
