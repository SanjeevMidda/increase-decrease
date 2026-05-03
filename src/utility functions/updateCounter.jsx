const updateCounter = (counterValue, updateCounterValue, method) => {
  method === "increase"
    ? updateCounterValue(counterValue + 1)
    : updateCounterValue(counterValue - 1);

  //   if (method === "increase") {
  //     updateCounterValue(counterValue + 1);
  //   } else if (method === "decrease") {
  //     updateCounterValue(counterValue - 1);
  //   } else {
  //     return;
  //   }
};

export default updateCounter;
