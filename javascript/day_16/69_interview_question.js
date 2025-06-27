const person = {
  name: "Sehar",
};

Object.seal(person);
// seal method only allows modification, no deletion and addition

person.name = "Zehar";
person.skill = "JS";

delete person.name;

// output: {name: "Zehar"}
console.log(person);
