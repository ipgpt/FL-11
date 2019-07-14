function getMin() {
  let result;
  for (let i = 0; i < arguments.length; i++) {
    for (let j = 1; j < arguments.length; j++) {
      if (arguments[i] < arguments[j]) {
        result = arguments[i];
      } else {
        result = arguments[j];
      }
    }
  }
  return result;
}

getMin(3, 0, -3);