const updateCounter = (counterValue, updateCounterValue, method) => {
  console.log(method);
  if (method === "increase") {
    return console.log("increase");
  } else if (method === "decrease") {
    return console.log("decrease");
  } else {
    return;
  }
};

export default updateCounter;
