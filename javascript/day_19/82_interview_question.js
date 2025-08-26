console.log(1);

// new Promise(function (res) {
//   console.log(2);
// });

// output
// 1
// 2
// 3
// Because Promise constructor invokes the function by default.
// to fix this

function task() {
  return new Promise(function (res) {
    console.log(2);
  });
}

console.log(3);
