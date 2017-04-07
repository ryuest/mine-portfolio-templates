import store from '../index.js';
import React from 'react';
import Counter from './Counter'

const action = type => store.dispatch({type})

function select(state) {
    return state.counter
}

const Root = React.createClass({
    render() {
        return (<Counter value={store.getState()}
          onIncrement={() => action('INCREMENT')}
          onDecrement={() => action('DECREMENT')}
          onIncrementAsync={() => action('INCREMENT_ASYNC')}/>)
    }
});


export default Root;
