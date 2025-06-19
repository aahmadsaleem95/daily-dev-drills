const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 222;
// when we use object as a key then its gets like this [object Object]
// a= {[object Object]: 222}
a[c] = 999;

console.log(a[b]);
