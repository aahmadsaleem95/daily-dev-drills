// one = {} because {} is a truthy value
const one = false || {} || null;
// two = "" because it is left on the left side of the short circuiting.
const two = null || false || "";
// three = [] because boolean([]) is true
const three = [] || 0 || true;
// output: {} '' []
console.log(one, two, three);
