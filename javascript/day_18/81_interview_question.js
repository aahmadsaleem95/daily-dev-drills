function task() {
  return new Promise((res) => {
    res("data");
  });
}

const result = task().then();

console.log(result);
