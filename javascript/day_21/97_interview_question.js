// function test() {
//   for (var i = 0; i < 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, 100);
//   }
// }

// test();

// output
// 5
// 5
// 5
// 5
// 5

// solution 1

// function test() {
//   for (let i = 0; i < 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, 100);
//   }
// }

// test();

// solution 2

function test() {
  for (let i = 0; i < 5; i++) {
    (function (val) {
      setTimeout(function () {
        console.log(i);
      }, 100);
    })(i);
  }
}

test();
