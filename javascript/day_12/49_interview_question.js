const name = "Mr.X";
age = 20;
// delete is only used to delete key pair from object.
console.log(delete name); // output: false
// as age is undeclared and is added to window object like window.age
console.log(delete age); // output: true
