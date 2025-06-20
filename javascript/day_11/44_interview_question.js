// undeclared variables are added to window object
(() => {
  let x = (y = 10);
  // once this code block execution is completed x will be collected by garabage collector.
})();

// output: undefined
console.log(typeof x);
// output: number
console.log(typeof y);
