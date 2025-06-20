const obj = { a: "Mr.X", b: 21 };
const dat = { c: true, ...obj };

//output: {c:true, a:"Mr.X", b:21}
console.log(dat);
