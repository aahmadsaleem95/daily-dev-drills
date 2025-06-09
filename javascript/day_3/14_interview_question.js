let user = { name: "Imran Khan" };
const userList = [user];
user = null;
// it will output the array with the object in user. since that is stored in memory and by setting user = null does not delete the object from memory. Since Garbage Collector will not delete the object as it is being used in userList
console.log(userList);

const arr = [3, 10, 7, 20];
// By default, sort method performs sorting by converting the numbers into strings. Then it compares their sequences of UTF-16 code unit values.

// To sort the numbers by their numeric value, we’ll need to pass a compareFn to the sort() method:

// [ 10, 20, 3, 7 ].sort((a, b) => a - b); //[ 3, 7, 10, 20]
console.log(arr.sort());
