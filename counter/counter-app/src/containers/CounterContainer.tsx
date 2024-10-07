import React, {Component} from 'react';
import Counter from "../views/Counter";

class CounterContainer extends Component<{}, { count: number }> {
    constructor(props: {}) {
        super(props);
        this.state = { count: 0 };
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

export default CounterContainer;
