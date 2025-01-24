import React from "react";

class ReactLifecycle extends React.Component {
  constructor() {
    super();
    this.state = { favoriteColor: "red" };
  }
    UpdateNum = () => {
        console.log("UpdateNum");
      this.setState({ number: this.state.number + 1 });
    }
  componentDidMount() {
    console.log("Mountunting");
    setTimeout(() => {
      this.setState({number: 1}); });
  }
componentDidUpdate(prevProps, prevState) {
    if (prevState.number !== this.state.number) {
        console.log("Component did update");
    }
}
  render() {
    console.log("Inside Render");
    return (
      <div>
        {console.log("Inside Render")}
        <h1> This is React Life cycle Method</h1>
        <h2>The state value is {this.state.number}</h2>
        <button onClick={() => this.setState({ number:this.state.number+1 })}>+</button>
      </div>
    );
  }
}
export default ReactLifecycle;