function reverseNumber(num) {
  const TEN = 10;
  let usingNum = Math.abs(num),
    result = '';
  do {
    result += usingNum % TEN;
    usingNum /= TEN;
    usingNum = Math.trunc(usingNum);
  } while (usingNum > 0);
  return Number(result) * Math.sign(num);
}

reverseNumber(123);
reverseNumber(-456);
reverseNumber(10000);