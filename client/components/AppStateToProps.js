import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import actions from '../actions/actionCreators'; //rootSaga
//import actionCreators from '../actions/sagas';
import Main from './Main';
import { selectors } from '../reducers/speech';
import { selectorsPost } from '../reducers/posts';

/*
function mapStateToProps(state) {
  return {
    ss: selectors.getSpeechKeys(state)

  }
}
*/


function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}



const mapStateToProps = (state) => ({
    speechKeys: selectors.getSpeechKeys(state.speechKeys),
    posts: selectorsPost.getPosts(state.posts)

});
/*
const mapDispachToProps = (dispatch) => ({
    fetchSpeech: (key) => dispatch(actions.fetchSpeech(key)),
    playSpeech: () => dispatch(actions.playSpeech()),
    reset: () => dispatch(actions.reset()),
});
*/
const AppStateToProps = connect(mapStateToProps, mapDispachToProps)(Main);

export default AppStateToProps;
