// execution will happen from left to right so typeof y will return undefined but typeof x will generate reference error
let x = [typeof x, typeof y];
// but if we use var instead of let then the output will be [undefined, undefined]
console.log(x);

// output
// Uncaught ReferenceError: Cannot access 'x' before initialization
