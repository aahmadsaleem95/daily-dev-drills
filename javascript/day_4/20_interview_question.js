function Human(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}

const MrX = new Human("Mr.", "X");
const Rock = Human("The", "Rock");

console.log(MrX);
console.log(Rock);
