import React, { useState } from "react";
import updateCounter from "../utility functions/updateCounter";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="counter">
      <button id="increase">I</button>
      <p>{counter}</p>
      <button id="decrease">D</button>
    </div>
  );
};

export default Counter;
