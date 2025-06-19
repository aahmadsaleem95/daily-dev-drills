function sayHi() {
  // IIFE immediately invoked function expression
  return (() => 0)();
}
console.log(typeof sayHi());
