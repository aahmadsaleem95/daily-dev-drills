// 5 ways to create an Object
const obj1 = {};
const obj2 = new Object();
const obj3 = Object.assign({}, {});
const obj4 = Object.create({});
function test() {}
const obj5 = new test();
console.log(obj1, obj2, obj3, obj4, obj5);
// output
// {}[[Prototype]]: Object {} {} {} test {}[[Prototype]]: Object
