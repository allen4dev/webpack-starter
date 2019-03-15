import React, { useState } from 'react';
import { number } from 'prop-types';

import logo from '../../images/logo.png';

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);

  return (
    <div>
      <h1 data-testid="total">Count: {count}</h1>

      <button type="button" onClick={increment}>
        Increment
      </button>

      <button type="button" onClick={decrement}>
        Decrement
      </button>

      <figure>
        <img src={logo} alt="League of legends" />
      </figure>
    </div>
  );
}

Counter.defaultProps = {
  initialCount: 0,
};

Counter.propTypes = {
  initialCount: number,
};

export default Counter;
