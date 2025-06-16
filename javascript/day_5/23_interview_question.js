// Tagged Template Literal

function getSummary(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const fName = "Screen Shots";
const age = 878;

getSummary`${fName} age is ${age}`;
