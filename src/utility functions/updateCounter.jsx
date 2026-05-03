const updateCounter = (updateCounterValue, method) => {
  method === "increase"
    ? updateCounterValue((prev) => prev + 1)
    : updateCounterValue((prev) => prev - 1);
};

export default updateCounter;
