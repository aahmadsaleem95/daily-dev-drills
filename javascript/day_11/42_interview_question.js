console.log(
  [1, 2, 3].map((num) => {
    if (num > 0) return;
    return num * 2;
  })
);
// output will be [undefined, undefined, undefined]
