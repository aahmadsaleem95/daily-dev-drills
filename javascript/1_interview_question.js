// Hoisting
function showData() {
  console.log("variable name is ", name);
  console.log("variable name is ", age);
  var name = "Noren Red";
  let age = 999;
}

showData();
