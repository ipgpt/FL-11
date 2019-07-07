const HALF = 2;
let a1 = Number(prompt('Write the value of a1')),
    a2 = Number(prompt('Write the value of a2')),
    b1 = Number(prompt('Write the value of b1')),
    b2 = Number(prompt('Write the value of b2')),
    c1 = Number(prompt('Write the value of c1')),
    c2 = Number(prompt('Write the value of c2')),
    midpoint1 = (a1 + b1) / HALF,
    midpoint2 = (a2 + b2) / HALF;

if (a1 === b1 && a2 === b2) {
    console.log('It is not a segment');
} else {
    console.log(c1 === midpoint1 && c2 === midpoint2);
}