const obj = { name: "JS" };
obj.ref = obj;

const str = JSON.stringify(obj);

console.log(str);

// This is due to the fact that obj is refering to itself producing a cyclic dependency. Which cannot be stringify.
// output: TypeError: COnverting circular structure to JSON
