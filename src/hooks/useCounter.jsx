import { useState } from "react";

const useCounter = (intialValue, step) => {
  const [counter, setCounter] = useState(intialValue);

  const increment = () => setCounter((prev) => prev + step);
  const decrement = () => setCounter((prev) => prev - step);

  return { increment, decrement, counter };
};

export default useCounter;
