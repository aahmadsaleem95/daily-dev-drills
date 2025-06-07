let a = 108;
let b = new Number(108);
let c = 108;

console.log(a == b); // true as it compares only their primitive values
// it will return false because b is an object
console.log(a === b);
console.log(b === c);
