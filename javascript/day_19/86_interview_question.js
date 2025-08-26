const data1 = ["C", "B", "A"];
const data2 = ["Z", "Y", "X"];

// this method is introduced in ECMA script 2023 it does not sort the original array but returns a new array which is sorted
const data3 = data1.toSorted();
// sort method sort the original array and returns a reference to the array like the original array is return.
data2.sort();

console.log({ data1 });
console.log({ data2 });
