(function () {
  var a = (b = 3);
})();

// b is initialized without any keyword due to which it is bounded on the window object thats why
// a defined? false
console.log("a defined? " + (typeof a !== "undefined"));
// b defined? true
console.log("b defined? " + (typeof b !== "undefined"));
