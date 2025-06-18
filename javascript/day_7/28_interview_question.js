const obj = { 1: "a", 2: "b", 3: "c" };
const set = new Set([1, 2, 3, 4, 5]);

// object keys are always a string

console.log(obj.hasOwnProperty("1")); // true
// javascript will use == for comparison so we get true
console.log(obj.hasOwnProperty(1)); // true

console.log(set.has("1")); // false
console.log(set.has(1)); // true
