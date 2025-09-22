function init(x, y, z) {}

function end(a, b = 0, c) {}

console.log(init.length);
console.log(end.length);

// output
// 3
// 1

// In JS a function length is equal to its arguments when we assign a default value to its argument it is exlcuded from the length of function and all the arguments coming after it are also exluded.
