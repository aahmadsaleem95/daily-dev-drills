// the output of all the three statements will be 108 a number as the method parseInt does it takes the valid first part of string which is a number and then discards the remaining part
console.log(parseInt("108"));
console.log(parseInt("108*200"));
console.log(parseInt("108Wonders"));

function magicalFunc() {
  return (cosmic = 9000);
}
// output will be 9000, const res = cosmic = 90000;
//return res;
// Undeclared cosmic will be added to global scrope and 90000 will be returned.
console.log(magicalFunc());
