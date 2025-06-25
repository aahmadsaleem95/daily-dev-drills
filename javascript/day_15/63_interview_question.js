let randomValue = { name: "naina" };
randomValue = 23;

if (!typeof randomValue === "string") {
  console.log("It's not a string!");
} else {
  console.log("Yay it's a string!");
}

// output: "Yay it's a string"
// !typeof randomValue === "string"
// !typeof 23 === "string"
// !"number" === "string"
// false === "string"  resulting in false
