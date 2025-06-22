function* generatorFn(i) {
  console.log("A");
  yield i;
  console.log("B");
  yield i * 2;
}
// generator function are those function whose execution could be paused at any time using yield keyword, we just need to add * after function keyword
// We we call generator function first time it returns an object instead of running a function
const gen = generatorFn(10);
console.log(gen);
// Whenever we call next method then it starts the execution and when it sees a yield key word it pauses
console.log(gen.next().value);
console.log(gen.next().value);
