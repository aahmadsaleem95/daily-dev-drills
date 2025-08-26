var foo = function test() {
  console.log("inside test");
  // we can only access this test function inside not outside
};

test();

// ReferenceError: test is not defined.
