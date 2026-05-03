import React, { useState } from "react";
import useCounter from "../hooks/useCounter";

const Counter = () => {
  const { counter, increase, decrease, reset } = useCounter();

  return (
    <div className="counter">
      <button id="increase" onClick={increase}>
        I
      </button>
      <p>{counter}</p>
      <button id="decrease" onClick={decrease}>
        D
      </button>
    </div>
  );
};

export default Counter;
