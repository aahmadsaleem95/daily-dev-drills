const dname = "Lydia";
age = 21;
// it will output false as its not an object dname so when the delete operation fails it outputs false. Its use to delete object properties
console.log(delete dname);
// it will output true as age is declared without any keyword
console.log(delete age);

function count(message) {
  console.log(this.length, message);
}

const data = [count, "Urdu", "100"];
/*
3, Hello
this is pointing to array itself, and the length of array is 3.
*/
data[0]("Hello");

// due to hoisting water added will be printed
addWater();
function addWater() {
  console.log("Water Added");
}
// Uncaught TypeError: addSugar is not a function because its declared through a variable
addSugar();
var addSugar = function () {
  console.log("Sugar Added");
};
