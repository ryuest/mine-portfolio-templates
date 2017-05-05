import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'

import posts from './posts';
import comments from './comments';
import selections from './selections'
import betslip from './betslip'

const rootReducer = combineReducers({
  posts,
  comments,
  selections,
  betslip,
  form: formReducer,
  routing: routerReducer
});

export default rootReducer;
