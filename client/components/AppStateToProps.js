import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import * as actionCreators from '../actions/actionCreators';
import actions from '../actions/actionCreators'; //rootSaga
//import actionCreators from '../actions/sagas';
import Main from './Main';
import App from './App';
import { selectorsPost } from '../reducers/posts';


function mapDispachToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const mapStateToProps = (state) => ({
    posts: selectorsPost.getPosts(state.posts),
    selections: state.selections,
    betslip: state.betslip
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
