var magic = 900;
function magic() {
  console.log("magic");
}
// output: 900
console.log(magic);

// In JS function declaration is prioritize so if I break down my code in terms how javascript will see it.

/* 
function magic(){
    console.log("magic");
}
var magic;

magic = 900;

console.log(magic);

*/
