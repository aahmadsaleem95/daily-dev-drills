const handler = {
  set: (target, property, value) =>
    console.log("Added a new property!", target, property, value),
  get: (target, property) =>
    console.log("Accessed a property!", target, property),
};

const person = new Proxy({}, handler);
// proxy object is used to detect change in objects, that change is addition of key, modification of key and getting value of key

person.name = "Aahmad";
person.name;
