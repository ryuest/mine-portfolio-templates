import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators'; //rootSaga
//import actionCreators from '../actions/sagas';
import Main from './Main';


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

const AppStateToProps = connect(mapStateToProps, mapDispachToProps)(Main);

export default AppStateToProps;
