const obj = {};
// what ever key we add through defineProperty it hidden due to security reason that why Object.keys(obj) will return [] or in loops
Object.defineProperty(obj, "a", {
  value: "char",
});

// output: char
console.log(obj.a);
// output: []
console.log(Object.keys(obj));

// but if we want it to be not hidden then we need to add enumerable to be true

const obj2 = {};

Object.defineProperty(obj2, "b", {
  value: "number",
  enumerable: true,
});
// output: number
console.log(obj2.b);
// output: [b]
console.log(Object.keys(obj2));
