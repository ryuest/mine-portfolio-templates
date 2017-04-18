import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators'; //rootSaga
//import actionCreators from '../actions/sagas';
import Main from './Main';
import { selectors } from '../reducers/speech';

/*
function mapStateToProps(state) {
  return {
    posts: state.posts,
    counter: state.counter,
    comments: state.comments
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
*/

const mapStateToProps = (state) => ({
    speechKeys: selectors.getSpeechKeys(state),
});

const mapDispatchToProps = (dispatch) => ({
    fetchSpeech: (key) => dispatch(actions.fetchSpeech(key)),
});

const AppStateToProps = connect(mapStateToProps, mapDispatchToProps)(Main);

export default AppStateToProps;
