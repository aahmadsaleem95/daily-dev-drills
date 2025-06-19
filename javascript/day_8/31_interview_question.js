String.prototype.youAreAmazing = () => {
  return "You're amazing my friend.";
};

// prototype:
// key that exists on object and function
// value of prototype is a object
// used to share common functionality among object instances or functions

const who = "viewer";

console.log(who.youAreAmazing());
