import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.incrementAsync = this.incrementAsync.bind(this);
    }

    incrementAsync(){
        setTimeout(this.props.onIncrement, 1000);
    }

    render(){
        const { value, onIncrement, onDecrement} = this.props;
        return(
            <p>
                Clicked: { value } times
                { ' '}
                <button onClick={onIncrement}>
                    +
                </button>
                {' '}
                <button onClick={onDecrement}>
                    -
                </button>
                <button onClick={this.incrementAsync}>
                    Increment Async
                </button>
            </p>

        )
    }
}

export default Counter;