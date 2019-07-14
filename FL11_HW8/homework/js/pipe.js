function addOne(x) {
  return x + 1;
}

function pipe(number) {
  if (typeof (arguments[0]) !== 'number') {
    return 'First argument must be a number';
  }
  let result = number,
    functionInAction;
  for (let i = 1; i < arguments.length; i++) {
    if (typeof (arguments[i]) !== 'function') {
      return 'After number all arguments must be functions';
    }
    functionInAction = arguments[i];
    result = functionInAction(result);
  }
  return result;
}

pipe(1, addOne);
pipe(1, addOne, addOne);