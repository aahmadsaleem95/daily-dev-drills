const animals = {};
let dog = { emoji: "🐶" };
let cat = { emoji: "🐈" };
// because when ever we assign an object as a key in an object it gets converted to object Object
animals[dog] = { ...dog, name: "Dug" };
// animals {[object Object]: {emoji: "🐶", name: "Dug"}}
animals[cat] = { ...cat, name: "Bux" };
// animals {[object Object]: {emoji: "🐈", name: "Bux"}}

console.log(animals[dog]);
