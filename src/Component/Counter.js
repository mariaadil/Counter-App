// Counter.jsx

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faSync } from '@fortawesome/free-solid-svg-icons';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="flex flex-col items-center justify-center h-full counter-container">
      <div className="bg-white p-10 rounded-lg shadow-2xl max-w-md w-full text-center">
        <h1 className="text-4xl font-extrabold mb-8 text-gray-800">Counter</h1>
        <div className="flex items-center justify-center mb-6">
          <span className="text-5xl font-bold text-gray-900">{count}</span>
        </div>
        <div className="flex space-x-4 justify-center">
          <button onClick={increment} className="btn-primary">
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button onClick={decrement} className="btn-secondary">
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <button onClick={reset} className="btn-gray">
            <FontAwesomeIcon icon={faSync} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
