const half = 2;
let a1 = Number(prompt('Write the value of a1', 0)),
    a2 = Number(prompt('Write the value of a2', 0)),
    b1 = Number(prompt('Write the value of b1', 0)),
    b2 = Number(prompt('Write the value of b2', 0)),
    c1 = Number(prompt('Write the value of c1', 0)),
    c2 = Number(prompt('Write the value of c2', 0)),
    midpoint1 = (a1 + b1) / half,
    midpoint2 = (a2 + b2) / half;

if (c1 === midpoint1 && c2 === midpoint2) {
    console.log(true);
} else {
    console.log(false);
}