import React, { useState } from "react";
import updateCounter from "../utility functions/updateCounter";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="counter">
      <button
        id="increase"
        onClick={() => {
          updateCounter(setCounter, "increase");
        }}
      >
        I
      </button>
      <p>{counter}</p>
      <button
        id="decrease"
        onClick={() => {
          updateCounter(setCounter, "decrease");
        }}
      >
        D
      </button>
    </div>
  );
};

export default Counter;
