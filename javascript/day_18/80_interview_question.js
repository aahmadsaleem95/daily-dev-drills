let z = a = {};

a.name = 'JS';
// as a and z are pointing to the same object
// a={}
// let z = a
// output: JS
console.log(z.name);