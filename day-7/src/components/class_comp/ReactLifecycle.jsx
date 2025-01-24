import React from "react";

class ReactLifecycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };
    }

    render() {
        return (
            <div>
                <h1>This is React LifeCycle</h1>
                <p>Number: {this.state.number}</p>
                <button onClick={() => this.setState({ number: this.state.number + 1 })}>
                    +
                </button>
            </div>
        );
    }
}

export default ReactLifecycle;