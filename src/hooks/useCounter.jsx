import { useState } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => setCounter((prev) => prev + 1);
  const decrease = () => setCounter((prev) => prev - 1);
  const reset = () => setCounter(0);

  return { increase, decrease, reset, counter };
};

export default useCounter;
