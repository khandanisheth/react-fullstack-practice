import React, { Component } from 'react';

class R_6_Clscom extends Component {
  constructor(props) {
    super(props);

    // ✅ state hamesha object hona chahiye
    this.state = {
      count: 0,
    };
  }

  // ✅ Method to increment the count
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        {/* ye data App.js aarah Props ke through  */}
        <p>{this.props.name}{this.props.email}{this.props.objst.name}</p>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default R_6_Clscom;
