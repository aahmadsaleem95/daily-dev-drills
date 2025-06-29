const groceries = ["🍎", "🍇"];

if (groceries.indexOf("🍎")) {
  console.log("We have 🍎!");
} else {
  console.log(`We don't have 🍎!`);
}
// output: We don't have 🍎!
// because groceries.indexOf("🍎") will return 0 and it boolean value is false
