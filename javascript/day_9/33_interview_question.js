const lang = { name: "ReactJS" };

function getLib(ver) {
  return `${this.name} version ${ver}`;
}
// call and bind decides what will be the context of this when function is called.
// call() method immediately calls the function with the given context and params
console.log(getLib.call(lang, 18));
// bind() method returns a new function after changing the context, it does not call the function
console.log(getLib.bind(lang, 18));
