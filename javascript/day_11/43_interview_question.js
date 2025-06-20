function getInfo(member, year) {
  member.name = "Sehar urf SS";
  year = "1947";
}

const person = { name: "Dev" };
const birthYear = "2097";

getInfo(person, birthYear);

// output : {name: "Sehar urf SS"} 2097
console.log(person, birthYear);
// because non-primitive data-types are passed as by reference
