const dataMap = new WeakMap();

let person = { name: "JS" };

dataMap.set(person, "TVA");

console.log(dataMap.get(person));
person = null;
console.log(dataMap.get(person));
/* 
A WeakMap in JavaScript is a collection of key/value pairs where the keys must be objects and are held "weakly." This means that if there are no other references to a key object besides the one in the WeakMap, that object is eligible for garbage collection. When a key object is garbage collected, its corresponding entry in the WeakMap is automatically removed. 
*/
