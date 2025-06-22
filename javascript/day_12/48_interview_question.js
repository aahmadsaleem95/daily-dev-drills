function addItem(item, list) {
  return list.push(item);
}

const result = addItem("👷‍♀️", ["🐺"]);

// output: 2 because list.push only returns the length of the updated array
console.log(result);
