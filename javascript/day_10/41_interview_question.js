// The parseInt function first tries to valid the string into an number but if the string is invlaid then it only grabs the number which is at the start of the string only.
// output : 10
console.log(parseInt("10+2"));
// output : 7
console.log(parseInt("7FM"));
// output : NaN
console.log(parseInt("d20+3"));
// output : NaN
console.log(parseInt("sfsf78"));
