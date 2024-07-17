import React, { useState, useCallback } from 'react';

// Child component
const IncrementButton = React.memo(({ onIncrement }) => {
  console.log('Child component rendered');
  return <button onClick={onIncrement}>Increment</button>;
});

// Parent component
const Counter = () => {
  const [count, setCount] = useState(0);

  // useCallback to memoize the increment function
  const handleIncrement = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []); // Empty dependency array means this function is created only once

  return (
    <div>
      <p>Count: {count}</p>
      <IncrementButton onIncrement={handleIncrement} />
    </div>
  );
};

export default Counter;
