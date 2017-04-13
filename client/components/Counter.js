import React, {Component, PropTypes} from 'react'

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

//  Clicked: {value.likes} times
