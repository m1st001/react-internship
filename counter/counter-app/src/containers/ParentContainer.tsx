import React, {Component} from "react";
import Parent from "../views/Parent";

export default class ParentContainer extends Component<{}, any> {
    constructor(props: {}) {
        super(props);
        this.state = { counters: [1] };
    }

    addCounter = () => {
        this.setState({counters: [...this.state.counters, 0]});
    };

    removeCounter = () => {
        if ( this.state.counters.length == 1) {
            return;
        }

        this.state.counters.shift();
        this.setState({counters: this.state.counters});
    };

    resetCounters = () => {
        this.setState({counters: this.state.counters.length = 0});
        if ( this.state.counters.length == 0) {
            this.addCounter();
        }
    };


    render() {
        return <Parent
            counters={this.state.counters}
            addCounter={this.addCounter}
            removeCounter={this.removeCounter}
            resetCounters={this.resetCounters}
        />;
    }

}