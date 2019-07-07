let a = Number(prompt('Write the value of a')),
    b = Number(prompt('Write the value of b')),
    c = Number(prompt('Write the value of c'));

if (a + b < c || a + c < b || b + c < a) {
    console.log('Triangle doesn’t exist');
} else if (a === b && a === c && b === c) {
    console.log('Equivalent triangle');
} else if (a === b || a === c || b === c) {
    console.log('Isosceles triangle');
} else {
    console.log('Normal triangle');
}