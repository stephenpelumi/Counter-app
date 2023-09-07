import React, { useState, useEffect } from 'react';
import { RotateCcw, ChevronUp, ChevronsUp, ChevronDown, ChevronsDown, Hash } from 'react-feather';

function Counter() {
  const [count, setCount] = useState(0);

  const reset = () => {
    setCount(0);
  };

  const increment = (amount) => {
    setCount(count + amount);
  };

  const decrement = (amount) => {
    setCount(count - amount);
  };

  const setRandom = () => {
    const randomCount = Math.floor(Math.random() * 100) + 1;
    setCount(randomCount);
  };

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div className="counter-container">
      <h1>Current Value: </h1>
      <div className='Count'>
      {count}
      </div>
      
      <div className='buttons'>
      <button onClick={() => increment(1)}>
        <ChevronUp />
      </button>
     
      <button onClick={() => increment(10)}>
        <ChevronsUp />
      </button>
      <button onClick={reset}>
        <RotateCcw />
      </button>
      <button onClick={setRandom}>
        <Hash />
      </button>
      <button onClick={() => decrement(10)}>
        <ChevronsDown />
      </button>
      <button onClick={() => decrement(1)}>
        <ChevronDown />
      </button>
     
    </div>
    </div>
  );
}

export default Counter;