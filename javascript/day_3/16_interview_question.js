var a = {},
  b = { key: "b" },
  c = { key: "c" };

// when ever in js we use object as a key in another object it. Then JS creates a special type of string object Object
a[b] = 123;
// so after the execution of the above line a = {'object Object': 123} as the below lines get executed it only uses c which is an object as a key in object a it will then update the 'object Object' key
a[c] = 456;
// output is 456
console.log(a[b]);
