import React, { Component } from 'react';

class ClassComponent extends Component {
  logSomething = async () => {
    const value = await Promise.resolve(42);

    const obj = { spread: '...spreeeeaaaaad' };

    const a = { ...obj };

    console.log(value, a);
  };

  render() {
    return (
      <div>
        <h1>Class component</h1>
        <button type="button" onClick={this.logSomething}>
          Log something
        </button>
      </div>
    );
  }
}

export default ClassComponent;
