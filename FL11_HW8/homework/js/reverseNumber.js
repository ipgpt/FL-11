function reverseNumber(num) {
    let numberString = num.toString(),
      numberArray = numberString.split(''),
      result = [];
    console.log(numberArray);
    if ((numberArray.indexOf('-')) === 0) {
      numberArray = numberArray.slice(1);
    } else {
      numberArray = numberArray.slice();
    }
    for (let i = numberArray.length - 1; i >= 0; i--) {
      result.push(numberArray[i]);
    }
    return Number(result.join('')) * Math.sign(num);
  }
  
reverseNumber(123);
reverseNumber(-456);
reverseNumber(10000);