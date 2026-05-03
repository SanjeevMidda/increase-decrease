import useCounter from "../hooks/useCounter";

const Counter = () => {
  const { counter, increment, decrement } = useCounter();

  return (
    <div className="counter">
      <button id="increase" onClick={increment}>
        I
      </button>
      <p>{counter}</p>
      <button id="decrease" onClick={decrement}>
        D
      </button>
    </div>
  );
};

export default Counter;
