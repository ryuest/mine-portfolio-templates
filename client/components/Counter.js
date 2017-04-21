import React, {Component, PropTypes} from 'react'

const Counter = props => (
  <div className="counter" >
    <button
      className="counter-action decrement"
      onClick={() => props.updatePlayerScore(props.index, -1)}>
      -
    </button>
    <div className="counter-score"> {props.score} </div>
    <button
      className="counter-action increment"
      onClick={() => props.updatePlayerScore(props.index, 1)}>
      +
    </button>
  </div>);

export default Counter;

/*
const Counter = ({value, onIncrement, onDecrement, onIncrementAsync}) => {
    return (
        <div>
            <button onClick={onIncrement}>
                Increment
            </button>
            {' '}
            <button onClick={onDecrement}>
                Decrement
            </button>
            {' '}
            <button onClick={onIncrementAsync}>
                Increment after 1 second
            </button>
            <hr/>
            <div>
                Clicked: {value}
                times
            </div>
        </div>
    )
};

export default Counter
*/
//  Clicked: {value.likes} times
