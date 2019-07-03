let a = Number(prompt('Write the value of a', 0)),
    b = Number(prompt('Write the value of b', 0)),
    c = Number(prompt('Write the value of c', 0));

if (a + b < c || a + c < b || b + c < a) {
    console.log('Triangle doesn’t exist');
} else if (a === b && a === c && b === c) {
    console.log('Equivalent triangle');
} else if (a === b || a === c || b === c) {
    console.log('Isosceles triangle');
} else {
    console.log('Normal triangle');
}