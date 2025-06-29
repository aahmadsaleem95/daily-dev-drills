const array = [{ key: "J" }, "2", "X"];

// delete does delete the entry from the array but it adds an empty slot in its place
delete array[0];

// output: 3 [empty, '2', 'X']
console.log(array.length, array);
