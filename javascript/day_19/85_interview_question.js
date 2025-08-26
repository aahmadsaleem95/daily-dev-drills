againTest();
test();

// function expression
// cannot be accessed before initialization
var test = function () {
  console.log("inside test");
};

// function declaration or function statement
// can be accessed before initialization.
function againTest() {
  console.log("againTest test");
}

/* 
output: 
againTest test
Uncaught TypeError: test is not a function
*/
