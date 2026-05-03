import { useState } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter((prev) => prev + 1);
  const decrement = () => setCounter((prev) => prev - 1);

  return { increment, decrement, counter };
};

export default useCounter;
