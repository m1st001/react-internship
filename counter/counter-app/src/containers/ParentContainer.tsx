import React, {Component} from "react";
import Parent from "../views/Parent";

export default class ParentContainer extends Component<any, any> {
    constructor(props: {}) {
        super(props);
        this.state = { counterCount: 1 };
    }

    addCounter = () => {
        this.setState({ counterCount: this.state.counterCount + 1 });
    };

    removeCounter = () => {
        if (this.state.counterCount == 1) {
            return;
        }
        this.setState({ counterCount: this.state.counterCount - 1 });
    };

    reset = () => {
        this.setState({ counterCount: 1 });
    };


    render() {
        return <Parent
            count={this.state.counterCount}
            increment={this.addCounter}
            decrement={this.removeCounter}
            reset={this.reset}
        />;
    }

}