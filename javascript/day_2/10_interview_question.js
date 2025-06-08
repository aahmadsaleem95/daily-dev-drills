let arr = [1, [2, [3, [[[4, [5]]]]]]];
console.log(arr.flat()); // not nested array could be flatted
console.log(arr.toString()); // 1,2,3,4,5

const result = [] == ![];
// true Let's break it down.

// Whenever we do a double equality check, JS engine will try to convert both
// values in Number.

// Number([]) == Number(![]);
// 0 == Number(false); // ![] will give false
// 0 == 0 // true
console.log(result);
