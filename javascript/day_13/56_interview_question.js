function nums(a, b) {
  if (a > b) console.log("a is large");
  else console.log("b is large");
  return
  a + b;
}
// because if we do not add ; to a return statement like above 
// js compiler automatically add it before execution.
//output :
/*
a is large
undefined
b is large
undefined
*/
console.log(nums(4, 2));
console.log(nums(1, 2));
