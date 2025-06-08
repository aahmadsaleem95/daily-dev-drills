const data = 100;
console.log(data.toString());
// this . operator has 2 uses one if I'm trying access method of an object or decimal places of a number. In this line the compiler gets confused
// console.log(100.toString())
// work around
//console.log(100..toString());
console.log((100).toString());
