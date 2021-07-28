import React, { useState } from 'react'
import PropTypes from 'prop-types';

function Counter({ initialCount= 0 }) {
  const [ count, setCount ] = useState(initialCount);

  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </>
  );
}

Counter.propTypes = {
  initialCount: PropTypes.number,
}

export default Counter;
