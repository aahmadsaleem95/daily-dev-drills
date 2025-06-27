const MESSAGE = 108;

function getInfo() {
  // output: ReferenceError: Cannot access MESSAGE because it is not hoisted due to TDZ
  console.log(MESSAGE);
  const MESSAGE = "sadpanda";
}

getInfo();
