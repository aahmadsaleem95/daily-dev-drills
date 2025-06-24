class Person {
  constructor() {
    this.name = "Diana";
  }
}

Person = class AnotherPerson {
  constructor() {
    this.name = "Lady";
  }
};

const member = new Person();
// output: Lady
// this behavior is normal in javascript we can reassign a class to another class through class or function constructor
console.log(member.name);
