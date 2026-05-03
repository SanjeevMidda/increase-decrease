import { useState } from "react";

const useCounter = (initialValue = 0, step = 1) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => setCounter((prev) => prev + step);
  const decrement = () => setCounter((prev) => prev - step);

  return { increment, decrement, counter };
};

export default useCounter;
