const data1 = ["C", "B", "A"];
const data2 = ["Z", "Y", "X"];

// toReversed only returns a reversed array but does not change the original array
data1.toReversed();
// reverse method mutates the array and returns the actual array which is mutated.
data2.reverse();

console.log({ data1 });
console.log({ data2 });

// output

// {data1:["C", "B", "A"]}
// {data2:["X", "Y", "Z"]}
