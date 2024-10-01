import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Counter from '../views/Counter/index.jsx';

class CounterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    decrement = () => {
        this.setState({ count: this.state.count - 1 });
    };

    reset = () => {
        this.setState({ count: 0 });
    };

    render() {
        return <Counter
            count={this.state.count}
            increment={this.increment}
            decrement={this.decrement}
            reset={this.reset}
        />;
    }
}

CounterContainer.propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired
}

export default CounterContainer;
