import React, { useState } from 'react';
import { number } from 'prop-types';
import styled from '@emotion/styled';

import logo from 'images/logo.png';

const Wrapper = styled.div``;
const Total = styled.h1`
  color: hotpink;
`;

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);

  return (
    <Wrapper>
      <Total data-testid="total">Count: {count}</Total>

      <button type="button" onClick={increment}>
        Increment
      </button>

      <button type="button" onClick={decrement}>
        Decrement
      </button>

      <figure>
        <img src={logo} alt="League of legends" />
      </figure>
    </Wrapper>
  );
}

Counter.defaultProps = {
  initialCount: 0,
};

Counter.propTypes = {
  initialCount: number,
};

export default Counter;
