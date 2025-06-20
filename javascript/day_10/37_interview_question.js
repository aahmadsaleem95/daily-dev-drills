(() => {
  let x, y;
  try {
    throw new Error();
  } catch (x) {
    (x = 1), (y = 2);
    // 1
    console.log(x);
  }
  // undefined
  console.log(x);
  // 2
  console.log(y);
})();
