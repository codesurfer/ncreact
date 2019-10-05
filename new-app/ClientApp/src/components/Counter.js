import React, { Component } from 'react';

export class Counter extends Component {
    static displayName = Counter.name;

    incrementCounter = () => {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

state = {
    currentCount: 0
}
  render () {
    return (
      <div>
        <h1>Counter</h1>

        <p>This is a simple example of a React component.</p>

        <p>Current count: <strong>{this.state.currentCount}</strong></p>

        <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button>
      </div>
    );
  }
}
