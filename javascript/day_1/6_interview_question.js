let a = { greeting: "Hi" };

let z = a;

z.greeting = "Bye";

// it will log 'Bye' because it was shallow copy not deep copy. As objects are reference type, to resolve this issue we can use
// destructing let z = {...a}; for single level only
// Object.assign => let z = Object.assign({},a);
// structuredClone => let z = structuredClone(a);
console.log(a.greeting);
