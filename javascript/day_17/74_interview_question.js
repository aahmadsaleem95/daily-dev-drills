const myFunc = ({ x, y, z }) => {
  console.log(x, y, z);
};
// 2 and 3 will be discarded as we are expecting only one argument which is an object,
// this is how javascript will be interpreting it
// const {x,y,z} = 1; this will result in the following line
// output: undefined undefined undefined
myFunc(1, 2, 3);
